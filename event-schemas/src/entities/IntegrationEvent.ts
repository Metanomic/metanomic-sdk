import IntegrationEventType from './IntegrationEventType';
import EventSourceContextSchema from './EventSourceContextSchema';
import TheValuePayload from './TheValuePayload';
import Asset from './Asset';
import Product from './Product';

class IntegrationEvent {
  private _type: IntegrationEventType;
  private _version?: string;
  private _eventId?: string;
  private _appId: string;
  private _userId?: string;
  private _installationId?: string;
  private _playerId?: string;
  private _sessionId?: string;
  private _doTrack?: boolean;
  private _expiresAt?: number;
  private _receivedAt?: number;
  private _sentAt?: number;
  private _timestamp?: number;
  private _eventSinceAppstart?: number;
  private _sourceContext?: EventSourceContextSchema;
  private _value: TheValuePayload;
  private _linkedAssets?: Array<Asset>;
  private _linkedProduct?: Array<Product>;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    type: IntegrationEventType,
    version?: string,
    eventId?: string,
    appId: string,
    userId?: string,
    installationId?: string,
    playerId?: string,
    sessionId?: string,
    doTrack?: boolean,
    expiresAt?: number,
    receivedAt?: number,
    sentAt?: number,
    timestamp?: number,
    eventSinceAppstart?: number,
    sourceContext?: EventSourceContextSchema,
    value: TheValuePayload,
    linkedAssets?: Array<Asset>,
    linkedProduct?: Array<Product>,
  }) {
    this._type = input.type;
    this._version = input.version;
    this._eventId = input.eventId;
    this._appId = input.appId;
    this._userId = input.userId;
    this._installationId = input.installationId;
    this._playerId = input.playerId;
    this._sessionId = input.sessionId;
    this._doTrack = input.doTrack;
    this._expiresAt = input.expiresAt;
    this._receivedAt = input.receivedAt;
    this._sentAt = input.sentAt;
    this._timestamp = input.timestamp;
    this._eventSinceAppstart = input.eventSinceAppstart;
    this._sourceContext = input.sourceContext;
    this._value = input.value;
    this._linkedAssets = input.linkedAssets;
    this._linkedProduct = input.linkedProduct;
  }

  get type(): IntegrationEventType { return this._type; }
  set type(type: IntegrationEventType) { this._type = type; }

  get version(): string | undefined { return this._version; }
  set version(version: string | undefined) { this._version = version; }

  get eventId(): string | undefined { return this._eventId; }
  set eventId(eventId: string | undefined) { this._eventId = eventId; }

  get appId(): string { return this._appId; }
  set appId(appId: string) { this._appId = appId; }

  get userId(): string | undefined { return this._userId; }
  set userId(userId: string | undefined) { this._userId = userId; }

  get installationId(): string | undefined { return this._installationId; }
  set installationId(installationId: string | undefined) { this._installationId = installationId; }

  get playerId(): string | undefined { return this._playerId; }
  set playerId(playerId: string | undefined) { this._playerId = playerId; }

  get sessionId(): string | undefined { return this._sessionId; }
  set sessionId(sessionId: string | undefined) { this._sessionId = sessionId; }

  get doTrack(): boolean | undefined { return this._doTrack; }
  set doTrack(doTrack: boolean | undefined) { this._doTrack = doTrack; }

  get expiresAt(): number | undefined { return this._expiresAt; }
  set expiresAt(expiresAt: number | undefined) { this._expiresAt = expiresAt; }

  get receivedAt(): number | undefined { return this._receivedAt; }
  set receivedAt(receivedAt: number | undefined) { this._receivedAt = receivedAt; }

  get sentAt(): number | undefined { return this._sentAt; }
  set sentAt(sentAt: number | undefined) { this._sentAt = sentAt; }

  get timestamp(): number | undefined { return this._timestamp; }
  set timestamp(timestamp: number | undefined) { this._timestamp = timestamp; }

  get eventSinceAppstart(): number | undefined { return this._eventSinceAppstart; }
  set eventSinceAppstart(eventSinceAppstart: number | undefined) { this._eventSinceAppstart = eventSinceAppstart; }

  get sourceContext(): EventSourceContextSchema | undefined { return this._sourceContext; }
  set sourceContext(sourceContext: EventSourceContextSchema | undefined) { this._sourceContext = sourceContext; }

  get value(): TheValuePayload { return this._value; }
  set value(value: TheValuePayload) { this._value = value; }

  get linkedAssets(): Array<Asset> | undefined { return this._linkedAssets; }
  set linkedAssets(linkedAssets: Array<Asset> | undefined) { this._linkedAssets = linkedAssets; }

  get linkedProduct(): Array<Product> | undefined { return this._linkedProduct; }
  set linkedProduct(linkedProduct: Array<Product> | undefined) { this._linkedProduct = linkedProduct; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default IntegrationEvent;
