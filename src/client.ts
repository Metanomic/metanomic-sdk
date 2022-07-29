import { v4 as uuidv4 } from 'uuid';

import { EventSchema } from './entities/event'
import { EventValue } from './entities/eventValue'
import { Asset } from './entities/asset'
import { Product } from './entities/product'
import { EventType } from './entities/types'
import { VERSION, BUILD, NAMESPACE, BASE_API_URL } from './util/config'
import {
  AppContext, SessionContext, ProfileContext, MapContext,
  CampaignContext, ExperimentContext, DeviceContext,
  SourceContext, EventSourceContextSchema
} from './entities/context'

import { HEADERS, NetworkClient } from './network'
import { NetBuffer } from './netbuffer'

/**
 * @summary The properties for the MetanomicProps class.
 */
export interface MetanomicProps {
  readonly apiUrl: string
  readonly context?: EventSourceContextSchema
  readonly client?: NetworkClient
  readonly netBuffer?: NetBuffer
}

/**
 * @summary The Core SDK implementation of the Metanomic client.
 */
export class Metanomic {
  public readonly appId: string
  public readonly context: EventSourceContextSchema
  public readonly client: NetworkClient
  public readonly netBuffer: NetBuffer
  readonly props: MetanomicProps

  constructor(appId: string, apiKey: string, props?: MetanomicProps) {
    this.appId = appId
    this.props = Object.assign({}, {
      apiUrl: BASE_API_URL
    }, props || {})

    this.context = props?.context || new EventSourceContextSchema()

    this.context.app = new AppContext()
    this.context.app.name = appId
    this.context.app.version = VERSION
    this.context.app.build = BUILD
    this.context.app.namespace = NAMESPACE

    this.client = props?.client || new NetworkClient(this.props.apiUrl, appId, {
      config: {
        headers: HEADERS({ API_KEY: apiKey })
      }
    })

    this.netBuffer = props?.netBuffer || new NetBuffer(this.appId, async (record) => this.client.sendRecord(record))
  }

  /**
   * The low-level implementation of sending the event into the buffer stack, and then over the network to the metanomic platform.
   * It accepts any kind of event.
   *
   * @param event The event that's stacked and will be send to the analytics platform
   */
  async send(event: EventSchema) {
    const now = Date.now()

    event.sentAt = now
    event.timestamp = now

    this.netBuffer.stack(event);
  }

  newEvent(type: EventType, eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]): EventSchema {
    const event = new EventSchema()
    event.type = type
    event.appId = this.appId
    event.eventId = uuidv4()
    event.value = eventValue
    event.linkedAssets = linkedAssets || []
    event.linkedProduct = linkedProducts || []
    event.version = this.context?.app?.version
    event.installationId = this.context?.device?.installationId
    event.playerId = this.context?.profile?.id
    event.sessionId = this.context?.session?.id
    return event
  }

  /**
   * Initialise a new Metanomic Client with CampaignContext
   * 
   * @param campaign The properties for the CampaignContext class
   * @returns 
   */
  withCampaign(campaign: CampaignContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { campaign }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
  /**
   * Initialise a new Metanomic Client with DeviceContext
   * 
   * @param device The properties for the DeviceContext class
   * @returns 
   */
  withDevice(device: DeviceContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { device }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
  /**
   * Initialise a new Metanomic Client with SourceContext
   * 
   * @param source The properties for the SourceContext class
   * @returns 
   */
  withSource(source: SourceContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { source }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
  /**
   * Initialise a new Metanomic Client with ExperimentContext
   * 
   * @param experiment The properties for the ExperimentContext class
   * @returns 
   */
  withExperiment(experiment: ExperimentContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { experiment }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
  /**
   * Initialise a new Metanomic Client with SessionContext
   * 
   * @param session The properties for the SessionContext class
   * @returns 
   */
  withSession(session: SessionContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { session }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
  /**
   * Initialise a new Metanomic Client with ProfileContext
   * 
   * @param profile The properties for the ProfileContext class
   * @returns 
   */
  withProfile(profile: ProfileContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { profile }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
  /**
   * Initialise a new Metanomic Client with ProfileContext
   * 
   * @param targetProfile The properties for the ProfileContext class
   * @returns 
   */
  withTargetProfile(targetProfile: ProfileContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { targetProfile }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
  /**
   * Initialise a new Metanomic Client with MapContext
   * 
   * @param map The properties for the MapContext class
   * @returns 
   */
  withMap(map: MapContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { map }
    )

    return new Metanomic(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }

  // Identity & User specific
  /**
   * Report the identity to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async identity(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Identity
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the deviceInfo to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async deviceInfo(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.DeviceInfo
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the newUser to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async newUser(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.NewUser
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the newPlayer to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async newPlayer(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.NewPlayer
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the DDNADontTrack to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async DDNADontTrack(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.DDNADontTrack
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the login to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async login(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Login
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the register to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async register(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Register
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the kYCPass to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async kYCPass(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.KYCPass
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the validated to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async validated(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Validated
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the alias to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async alias(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Alias
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // Generic tracking Events for custom metrics
  /**
   * Report the track to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async track(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Track
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the action to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async action(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Action
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the transaction to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async transaction(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Transaction
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the spread to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async spread(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Spread
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the traffic to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async traffic(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Traffic
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the resource to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async resource(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Resource
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the error to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async error(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Error
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // Sink/Source flow of currency
  /**
   * Report the sinkFlow to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sinkFlow(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SinkFlow
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sourceFlow to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sourceFlow(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SourceFlow
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // Generic Progress Tracking
  /**
   * Report the progressionStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async progressionStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ProgressionStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the progressionComplete to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async progressionComplete(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ProgressionComplete
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the progressionFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async progressionFail(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ProgressionFail
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // Resource tracking
  /**
   * Report the resourceSupply to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async resourceSupply(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ResourceSupply
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // Social & in-app Tracking Events
  /**
   * Report the search to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async search(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Search
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the bookmarked to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async bookmarked(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Bookmarked
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the reviewed to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async reviewed(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Reviewed
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the listing to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async listing(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Listing
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the bid to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async bid(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Bid
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the fulfillment to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async fulfillment(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Fulfillment
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the engagement to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async engagement(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Engagement
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the access to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async access(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Access
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the click to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async click(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Click
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the view to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async view(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.View
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the acquire to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async acquire(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Acquire
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the download to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async download(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Download
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the grant to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async grant(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Grant
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the retrack to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async retrack(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Retrack
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the mint to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async mint(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Mint
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the burn to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async burn(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Burn
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the play to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async play(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Play
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the pause to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async pause(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Pause
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skip(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Skip
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the resume to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async resume(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Resume
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the volumeUp to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async volumeUp(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.VolumeUp
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the volumeDown to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async volumeDown(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.VolumeDown
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skipFwd to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skipFwd(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SkipFwd
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skipBwd to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skipBwd(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SkipBwd
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the follow to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async follow(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Follow
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the unfollow to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async unfollow(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Unfollow
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the block to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async block(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Block
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the reply to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async reply(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Reply
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the create to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async create(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Create
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the like to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async like(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Like
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the spectate to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async spectate(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Spectate
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the share to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async share(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Share
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the scroll to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async scroll(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Scroll
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the messageSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async messageSent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MessageSent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the messageEngagement to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async messageEngagement(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MessageEngagement
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // Commerce and payments
  /**
   * Report the checkout to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async checkout(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Checkout
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the purchase to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async purchase(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Purchase
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the payment to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async payment(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Payment
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the order to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async order(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Order
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the exchange to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async exchange(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Exchange
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the subscription to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async subscription(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Subscription
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the revenueRecord to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async revenueRecord(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.RevenueRecord
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the reward to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async reward(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Reward
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the debit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async debit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Debit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the credit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async credit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Credit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the subscriptionCancel to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async subscriptionCancel(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SubscriptionCancel
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // App Lifecycle
  /**
   * Report the appOpenedEvent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appOpenedEvent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AppOpenedEvent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AppStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appRunning to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appRunning(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AppRunning
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AppStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appUpdate to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appUpdate(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AppUpdate
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appInstall to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appInstall(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AppInstall
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gameStarted to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gameStarted(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GameStarted
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gameEnded to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gameEnded(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GameEnded
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gameRunning to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gameRunning(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GameRunning
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // Adnetwork specifics
  /**
   * Report the adStarted to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adStarted(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdStarted
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adOpened to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adOpened(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdOpened
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adPlaying to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adPlaying(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdPlaying
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adStoped to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adStoped(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdStoped
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adSkipped to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adSkipped(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdSkipped
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversion to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversion(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Conversion
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adCompleted to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adCompleted(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdCompleted
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adClosed to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adClosed(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdClosed
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adImpression to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adImpression(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdImpression
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adExposure to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adExposure(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdExposure
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adReward to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adReward(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.AdReward
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // marketing & Ad campaigns
  /**
   * Report the campaignNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.CampaignNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.CampaignStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.CampaignStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignResult(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.CampaignResult
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignBounced to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignBounced(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.CampaignBounced
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // in-Game Experience
  /**
   * Report the achievement to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async achievement(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Achievement
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelUp to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelUp(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelUp
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the experience to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async experience(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Experience
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the win to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async win(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Win
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the draw to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async draw(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Draw
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the defeat to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async defeat(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Defeat
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the kill to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async kill(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Kill
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the killed to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async killed(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Killed
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the drop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async drop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Drop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the loot to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async loot(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Loot
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the highScore to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async highScore(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.HighScore
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the build to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async build(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Build
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the waging to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async waging(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Waging
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the lock to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async lock(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Lock
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the lose to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async lose(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Lose
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the supply to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async supply(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Supply
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the craft to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async craft(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Craft
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the respawn to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async respawn(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Respawn
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the spawn to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async spawn(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Spawn
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gathering to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gathering(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Gathering
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the resistance to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async resistance(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Resistance
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gear to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gear(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Gear
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the mapAreaVisit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async mapAreaVisit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MapAreaVisit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the mapAreaLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async mapAreaLeave(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MapAreaLeave
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the summon to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async summon(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Summon
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the cast to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async cast(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Cast
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the evolved to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async evolved(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Evolved
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // in-game store experience
  /**
   * Report the storeOpened to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async storeOpened(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.StoreOpened
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the storeItemClick to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async storeItemClick(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.StoreItemClick
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the itemAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async itemAcquired(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ItemAcquired
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the itemSpent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async itemSpent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ItemSpent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the championAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async championAcquired(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ChampionAcquired
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skinAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skinAcquired(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SkinAcquired
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the variationAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async variationAcquired(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.VariationAcquired
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // in-game Sessions (eg missions, quests, levels)
  /**
   * Report the sessionNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionResult(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionResult
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionRank(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionRank
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionQuit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionQuit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionFail(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionFail
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionSkip(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SessionSkip
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionResult(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionResult
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionRank(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionRank
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionQuit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionQuit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionFail(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionFail
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionSkip(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MissionSkip
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questResult(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestResult
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questRank(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestRank
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questQuit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestQuit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questFail(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestFail
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questSkip(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.QuestSkip
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelResult(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelResult
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelRank(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelRank
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelQuit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelQuit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelFail(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelFail
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelSkip(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.LevelSkip
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonResult(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonResult
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonRank(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonRank
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonQuit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonQuit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonFail(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonFail
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonSkip(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.SeasonSkip
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingStart(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingStart
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingStop(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingStop
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingResult(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingResult
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingRank(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingRank
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingQuit(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingQuit
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingFail(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingFail
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingSkip(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.MatchmakingSkip
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // In-Game Social & Groups
  /**
   * Report the conversationNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversationNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ConversationNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversationJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversationJoin(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ConversationJoin
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversationLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversationLeave(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ConversationLeave
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversationMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversationMsgSent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ConversationMsgSent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ChannelNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelJoin(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ChannelJoin
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelLeave(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ChannelLeave
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelMsgSent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.ChannelMsgSent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GuildNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildJoin(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GuildJoin
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildLeave(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GuildLeave
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildMsgSent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GuildMsgSent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GroupNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupJoin(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GroupJoin
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupLeave(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GroupLeave
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupMsgSent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.GroupMsgSent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyNew(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.PartyNew
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyJoin(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.PartyJoin
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyLeave(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.PartyLeave
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyMsgSent(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.PartyMsgSent
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }

  // 3rd party interactions
  /**
   * Report the connect to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async connect(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Connect
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the deploy to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async deploy(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Deploy
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the stream to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async stream(eventValue: EventValue, linkedAssets?: Asset[], linkedProducts?: Product[]) {
    const type = EventType.Stream
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
}
