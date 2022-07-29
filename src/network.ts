import { RecordSchema } from './entities/event'
import { create, AxiosInstance, AxiosRequestConfig, AxiosResponse } from './util/axios'


export type HEADERS_PROPS = { API_KEY: string }
export const HEADERS = (props: HEADERS_PROPS) => ({
  'X-API-KEY': props.API_KEY
})
export type DOMAIN_PATHS_PROPS = { API_URL: string }
export interface PATHS {
  events: () => string
}
export const DOMAIN_PATHS = (props: DOMAIN_PATHS_PROPS): PATHS => ({
  events: () => `${props.API_URL}/events`
})

/**
 * @summary The properties for the NetworkClientProps class.
 */
export interface NetworkClientProps {
  readonly instance?: AxiosInstance
  readonly config?: AxiosRequestConfig
}

/**
 * @summary The SDK client for the Network.
 */
export class NetworkClient {
  public readonly apiUrl: string
  public readonly appId: string
  public readonly domainPaths: PATHS
  public readonly client: AxiosInstance

  constructor(apiUrl: string, appId: string, props?: NetworkClientProps) {
    this.apiUrl = apiUrl
    this.appId = appId
    this.domainPaths = DOMAIN_PATHS({ API_URL: this.apiUrl })

    this.client = props?.instance || create(props?.config)
  }

  /**
   * The method that makes the network transaction to communicate with the metanomic server
   *
   * @param record the event record that encapsulates all the Events to send
   * @returns Promise<AxiosResponse>
   */
  async sendRecord(record: RecordSchema): Promise<AxiosResponse> {
    const apiPath = this.domainPaths.events()
    return this.client.post(apiPath, record)
  }
}