import { v4 as uuidv4 } from 'uuid';

import { entities } from '@metanomic/event-schemas'

import { VERSION, BUILD, NAMESPACE, BASE_API_URL } from './util/config'

import { HEADERS, NetworkClient } from './network'
import { NetBuffer } from './netbuffer'

/**
 * @summary The properties for the MetanomicProps class.
 */
export interface MetanomicProps {
  readonly apiUrl?: string
  readonly context?: entities.EventSourceContextSchema
  readonly client?: NetworkClient
  readonly netBuffer?: NetBuffer
  readonly logTraffic?: boolean
}

/**
 * @summary The Core SDK implementation of the Metanomic client.
 */
export class Metanomic {
  public readonly appId: string
  public readonly context: entities.EventSourceContextSchema
  public readonly client: NetworkClient
  public readonly netBuffer: NetBuffer
  readonly props: MetanomicProps

  constructor(appId: string, apiKey: string, props?: MetanomicProps) {
    this.appId = appId
    this.props = Object.assign({}, {
      apiUrl: BASE_API_URL
    }, props || {})

    this.context = props?.context || new entities.EventSourceContextSchema({})

    this.context.app = new entities.AppContext({})
    this.context.app.name = appId
    this.context.app.version = VERSION
    this.context.app.build = BUILD
    this.context.app.namespace = NAMESPACE

    this.client = props?.client || new NetworkClient(this.props?.apiUrl || BASE_API_URL, appId, {
      config: {
        headers: HEADERS({ API_KEY: apiKey })
      },
      logTraffic: props?.logTraffic
    })

    this.netBuffer = props?.netBuffer || new NetBuffer(this.appId, async (record) => this.client.sendRecord(record))
  }

  /**
   * The low-level implementation of sending the event into the buffer stack, and then over the network to the metanomic platform.
   * It accepts any kind of event.
   *
   * @param event The event that's stacked and will be send to the analytics platform
   */
  async send(event: entities.Event) {
    const now = Date.now()

    event.sentAt = now
    event.timestamp = now

    this.netBuffer.stack(event);
  }

  newEvent(type: entities.EventType, eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]): entities.Event {
    const event = new entities.Event({
      type: type,
      appId: this.appId,
      value: eventValue
    })
    event.appId = this.appId
    event.eventId = uuidv4()
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
  withCampaign(campaign: entities.CampaignContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  withDevice(device: entities.DeviceContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  withSource(source: entities.SourceContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  withExperiment(experiment: entities.ExperimentContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  withSession(session: entities.SessionContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  withProfile(profile: entities.ProfileContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  withTargetProfile(targetProfile: entities.ProfileContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  withMap(map: entities.MapContext): Metanomic {
    const context = Object.assign({},
      this.context ? this.context : new entities.EventSourceContextSchema({}),
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
  async identity(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.IDENTITY
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the deviceInfo to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async deviceInfo(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DEVICE_INFO
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the newUser to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async newUser(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.NEW_USER
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the newPlayer to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async newPlayer(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.NEW_PLAYER
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the DDNADontTrack to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async DDNADontTrack(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DDNA_DONT_TRACK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the login to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async login(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LOGIN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the register to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async register(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.REGISTER
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the kYCPass to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async kYCPass(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.KYC_PASS
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the validated to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async validated(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.VALIDATED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the alias to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async alias(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ALIAS
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
  async track(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.TRACK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the action to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async action(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ACTION
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the transaction to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async transaction(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.TRANSACTION
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the spread to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async spread(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SPREAD
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the traffic to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async traffic(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.TRAFFIC
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the resource to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async resource(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.RESOURCE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the error to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async error(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ERROR
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
  async sinkFlow(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SINK_FLOW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sourceFlow to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sourceFlow(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SOURCE_FLOW
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
  async progressionStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PROGRESSION_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the progressionComplete to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async progressionComplete(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PROGRESSION_COMPLETE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the progressionFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async progressionFail(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PROGRESSION_FAIL
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
  async resourceSupply(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.RESOURCE_SUPPLY
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
  async search(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEARCH
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the bookmarked to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async bookmarked(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.BOOKMARKED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the reviewed to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async reviewed(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.REVIEWED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the listing to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async listing(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LISTING
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the bid to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async bid(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.BID
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the fulfillment to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async fulfillment(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.FULFILLMENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the engagement to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async engagement(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ENGAGEMENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the access to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async access(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ACCESS
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the click to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async click(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CLICK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the view to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async view(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.VIEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the acquire to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async acquire(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ACQUIRE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the download to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async download(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DOWNLOAD
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the grant to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async grant(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GRANT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the retrack to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async retrack(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.RETRACK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the mint to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async mint(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MINT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the burn to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async burn(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.BURN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the play to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async play(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PLAY
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the pause to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async pause(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PAUSE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skip(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SKIP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the resume to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async resume(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.RESUME
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the volumeUp to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async volumeUp(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.VOLUME_UP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the volumeDown to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async volumeDown(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.VOLUME_DOWN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skipFwd to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skipFwd(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SKIP_FWD
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skipBwd to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skipBwd(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SKIP_BWD
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the follow to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async follow(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.FOLLOW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the unfollow to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async unfollow(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.UNFOLLOW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the block to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async block(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.BLOCK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the reply to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async reply(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.REPLY
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the create to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async create(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CREATE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the like to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async like(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LIKE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the spectate to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async spectate(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SPECTATE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the share to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async share(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SHARE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the scroll to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async scroll(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SCROLL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the messageSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async messageSent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MESSAGE_SENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the messageEngagement to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async messageEngagement(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MESSAGE_ENGAGEMENT
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
  async checkout(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CHECKOUT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the purchase to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async purchase(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PURCHASE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the payment to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async payment(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PAYMENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the order to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async order(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ORDER
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the exchange to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async exchange(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.EXCHANGE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the subscription to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async subscription(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SUBSCRIPTION
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the revenueRecord to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async revenueRecord(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.REVENUE_RECORD
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the reward to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async reward(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.REWARD
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the debit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async debit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DEBIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the credit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async credit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CREDIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the subscriptionCancel to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async subscriptionCancel(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SUBSCRIPTION_CANCEL
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
  async appOpenedEvent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.APP_OPENED_EVENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.APP_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appRunning to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appRunning(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.APP_RUNNING
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.APP_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appUpdate to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appUpdate(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.APP_UPDATE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the appInstall to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async appInstall(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.APP_INSTALL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gameStarted to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gameStarted(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GAME_STARTED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gameEnded to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gameEnded(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GAME_ENDED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gameRunning to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gameRunning(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GAME_RUNNING
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
  async adStarted(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_STARTED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adOpened to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adOpened(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_OPENED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adPlaying to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adPlaying(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_PLAYING
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adStoped to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adStoped(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_STOPED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adSkipped to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adSkipped(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_SKIPPED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversion to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversion(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CONVERSION
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adCompleted to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adCompleted(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_COMPLETED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adClosed to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adClosed(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_CLOSED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adImpression to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adImpression(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_IMPRESSION
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adExposure to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adExposure(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_EXPOSURE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the adReward to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async adReward(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.AD_REWARD
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
  async campaignNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CAMPAIGN_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CAMPAIGN_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CAMPAIGN_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignResult(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CAMPAIGN_RESULT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the campaignBounced to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async campaignBounced(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CAMPAIGN_BOUNCED
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
  async achievement(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ACHIEVEMENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelUp to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelUp(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_UP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the experience to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async experience(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.EXPERIENCE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the win to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async win(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.WIN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the draw to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async draw(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DRAW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the defeat to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async defeat(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DEFEAT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the kill to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async kill(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.KILL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the killed to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async killed(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.KILLED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the drop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async drop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DROP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the loot to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async loot(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LOOT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the highScore to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async highScore(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.HIGH_SCORE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the build to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async build(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.BUILD
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the waging to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async waging(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.WAGING
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the lock to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async lock(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LOCK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the lose to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async lose(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LOSE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the supply to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async supply(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SUPPLY
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the craft to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async craft(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CRAFT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the respawn to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async respawn(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.RESPAWN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the spawn to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async spawn(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SPAWN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gathering to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gathering(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GATHERING
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the resistance to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async resistance(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.RESISTANCE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the gear to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async gear(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GEAR
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the mapAreaVisit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async mapAreaVisit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MAP_AREA_VISIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the mapAreaLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async mapAreaLeave(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MAP_AREA_LEAVE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the summon to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async summon(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SUMMON
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the cast to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async cast(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CAST
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the evolved to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async evolved(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.EVOLVED
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
  async storeOpened(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.STORE_OPENED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the storeItemClick to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async storeItemClick(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.STORE_ITEM_CLICK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the itemAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async itemAcquired(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ITEM_ACQUIRED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the itemSpent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async itemSpent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.ITEM_SPENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the championAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async championAcquired(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CHAMPION_ACQUIRED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the skinAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async skinAcquired(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SKIN_ACQUIRED
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the variationAcquired to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async variationAcquired(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.VARIATION_ACQUIRED
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
  async sessionNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionResult(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_RESULT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionRank(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_RANK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionQuit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_QUIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionFail(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_FAIL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the sessionSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async sessionSkip(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SESSION_SKIP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionResult(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_RESULT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionRank(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_RANK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionQuit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_QUIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionFail(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_FAIL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the missionSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async missionSkip(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MISSION_SKIP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questResult(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_RESULT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questRank(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_RANK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questQuit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_QUIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questFail(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_FAIL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the questSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async questSkip(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.QUEST_SKIP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelResult(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_RESULT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelRank(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_RANK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelQuit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_QUIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelFail(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_FAIL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the levelSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async levelSkip(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.LEVEL_SKIP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonResult(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_RESULT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonRank(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_RANK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonQuit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_QUIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonFail(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_FAIL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the seasonSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async seasonSkip(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.SEASON_SKIP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingStart to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingStart(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_START
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingStop to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingStop(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_STOP
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingResult to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingResult(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_RESULT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingRank to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingRank(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_RANK
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingQuit to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingQuit(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_QUIT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingFail to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingFail(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_FAIL
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the matchmakingSkip to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async matchmakingSkip(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.MATCHMAKING_SKIP
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
  async conversationNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CONVERSATION_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversationJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversationJoin(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CONVERSATION_JOIN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversationLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversationLeave(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CONVERSATION_LEAVE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the conversationMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async conversationMsgSent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CONVERSATION_MSG_SENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CHANNEL_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelJoin(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CHANNEL_JOIN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelLeave(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CHANNEL_LEAVE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the channelMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async channelMsgSent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CHANNEL_MSG_SENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GUILD_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildJoin(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GUILD_JOIN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildLeave(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GUILD_LEAVE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the guildMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async guildMsgSent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GUILD_MSG_SENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GROUP_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupJoin(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GROUP_JOIN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupLeave(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GROUP_LEAVE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the groupMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async groupMsgSent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.GROUP_MSG_SENT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyNew to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyNew(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PARTY_NEW
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyJoin to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyJoin(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PARTY_JOIN
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyLeave to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyLeave(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PARTY_LEAVE
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the partyMsgSent to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async partyMsgSent(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.PARTY_MSG_SENT
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
  async connect(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.CONNECT
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the deploy to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async deploy(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.DEPLOY
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
  /**
   * Report the stream to the system
   * @param eventValue The value body of the event. Not all values are needed. Use it based on your context
   * @param linkedAssets In case the Event has any asset of the economy linked
   * @param linkedProducts In case there's a product listing relating to the event
   * @returns 
   */
  async stream(eventValue: entities.TheValuePayload, linkedAssets?: entities.Asset[], linkedProducts?: entities.Product[]) {
    const type = entities.EventType.STREAM
    return this.send(this.newEvent(type, eventValue, linkedAssets, linkedProducts))
  }
}
