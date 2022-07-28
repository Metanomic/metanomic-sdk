import { VERSION, BUILD, NAMESPACE, BASE_API_URL } from './util/config'
import {
  AppContext, SessionContext, ProfileContext, MapContext,
  CampaignContext, ExperimentContext, DeviceContext,
  SourceContext, EventSourceContextSchema
} from './entities/context'

import NetworkClient, { HEADERS } from './network'
import NetBuffer from './netbuffer'

/**
 * @summary The properties for the MetanomicClientProps class.
 */
export interface MetanomicClientProps {
  readonly apiUrl: string
  readonly context?: EventSourceContextSchema
}

/**
 * @summary The SDK client for the Metanomic.
 */
export default class MetanomicClient {
  public readonly appId: string
  public readonly context: EventSourceContextSchema
  public readonly client: NetworkClient
  public readonly netBuffer: NetBuffer
  readonly props: MetanomicClientProps

  constructor(appId: string, apiKey: string, props?: MetanomicClientProps) {
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

    this.client = new NetworkClient(this.props.apiUrl, appId, {
      config: {
        headers: HEADERS({ API_KEY: apiKey })
      }
    })

    this.netBuffer = new NetBuffer(this.appId, async (record) => this.client.sendRecord(record))
  }

  /**
   * Initialise a new Metanomic Client with CampaignContext
   * 
   * @param campaign The properties for the CampaignContext class
   * @returns 
   */
  withCampaign(campaign: CampaignContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { campaign }
    )

    return new MetanomicClient(
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
  withDevice(device: DeviceContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { device }
    )

    return new MetanomicClient(
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
  withSource(source: SourceContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { source }
    )

    return new MetanomicClient(
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
  withExperiment(experiment: ExperimentContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { experiment }
    )

    return new MetanomicClient(
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
  withSession(session: SessionContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { session }
    )

    return new MetanomicClient(
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
  withProfile(profile: ProfileContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { profile }
    )

    return new MetanomicClient(
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
  withTargetProfile(targetProfile: ProfileContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { targetProfile }
    )

    return new MetanomicClient(
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
  withMap(map: MapContext): MetanomicClient {
    const context = Object.assign({},
      this.context ? this.context : new EventSourceContextSchema(),
      { map }
    )

    return new MetanomicClient(
      this.appId,
      this.appId,
      Object.assign({}, this.props, { context })
    )
  }
}
