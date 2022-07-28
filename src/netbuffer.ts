
import { EVENTS_PER_PUSH, BUFFER_INTERVAL, BUFFER_TIME_GAP } from './util/config'
import { EventSchema, RecordSchema } from './entities/event'

/**
 * @summary The properties for the NetBufferProps class.
 */
export interface NetBufferProps {
  readonly eventsPerPush?: number
  readonly interval?: number
  readonly timeGap?: number
}

export type Handler = (record: RecordSchema) => Promise<any>

/**
 * @summary The NetBuffer Network scheduler.
 */
export default class NetBuffer {
  public readonly interval: number
  public readonly timeGap: number
  public readonly eventsPerPush: number
  public readonly appId: string
  public readonly handler: Handler
  private readonly eventStack: EventSchema[]

  constructor(appId: string, handler: Handler, props?: NetBufferProps) {
    this.appId = appId
    this.handler = handler
    this.eventsPerPush = props?.eventsPerPush || EVENTS_PER_PUSH
    this.interval = props?.interval || BUFFER_INTERVAL
    this.timeGap = props?.timeGap || BUFFER_TIME_GAP
    this.eventStack = []

    this._loop(this.interval)
  }

  private _nextRecord(): RecordSchema {
    return {
      appId: this.appId,
      events: this.eventStack.splice(0, 10)
    }
  }

  private async nextTick() {
    if (this.eventStack.length === 0) return

    try {
      await this.handler(this._nextRecord())
    } catch (_e) { }

    if (this.eventStack.length > 0) {
      return this._loop(this.timeGap)
    }
  }

  private async _loop(interval: number) {
    setTimeout(async () => {
      await this.nextTick()
      this._loop(interval)
    }, interval)
  }

  /**
   * The method that makes the network transaction to communicate with the metanomic server
   *
   * @param record the event record that encapsulates all the Events to send
   * @returns number the number o item in the stack
   */
  stack(event: EventSchema): number {
    return this.eventStack.push(event)
  }
}