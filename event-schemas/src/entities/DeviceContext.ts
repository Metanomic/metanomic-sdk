import Screen from './Screen';
import Location from './Location';

class DeviceContext {
  private _installationId?: string;
  private _id?: string;
  private _fullScreen?: boolean;
  private _adTrackingEnabled?: boolean;
  private _manufacturer?: string;
  private _model?: string;
  private _name?: string;
  private _osName?: string;
  private _osType?: string;
  private _osVersion?: string;
  private _jailbroken?: boolean;
  private _token?: string;
  private _ip?: string;
  private _userAgent?: string;
  private _engine?: string;
  private _engineVersion?: string;
  private _client?: string;
  private _locale?: string;
  private _bluetooth?: boolean;
  private _carrier?: string;
  private _cellular?: boolean;
  private _wifi?: boolean;
  private _screen?: Screen;
  private _location?: Location;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    installationId?: string,
    id?: string,
    fullScreen?: boolean,
    adTrackingEnabled?: boolean,
    manufacturer?: string,
    model?: string,
    name?: string,
    osName?: string,
    osType?: string,
    osVersion?: string,
    jailbroken?: boolean,
    token?: string,
    ip?: string,
    userAgent?: string,
    engine?: string,
    engineVersion?: string,
    client?: string,
    locale?: string,
    bluetooth?: boolean,
    carrier?: string,
    cellular?: boolean,
    wifi?: boolean,
    screen?: Screen,
    location?: Location,
  }) {
    this._installationId = input.installationId;
    this._id = input.id;
    this._fullScreen = input.fullScreen;
    this._adTrackingEnabled = input.adTrackingEnabled;
    this._manufacturer = input.manufacturer;
    this._model = input.model;
    this._name = input.name;
    this._osName = input.osName;
    this._osType = input.osType;
    this._osVersion = input.osVersion;
    this._jailbroken = input.jailbroken;
    this._token = input.token;
    this._ip = input.ip;
    this._userAgent = input.userAgent;
    this._engine = input.engine;
    this._engineVersion = input.engineVersion;
    this._client = input.client;
    this._locale = input.locale;
    this._bluetooth = input.bluetooth;
    this._carrier = input.carrier;
    this._cellular = input.cellular;
    this._wifi = input.wifi;
    this._screen = input.screen;
    this._location = input.location;
  }

  get installationId(): string | undefined { return this._installationId; }
  set installationId(installationId: string | undefined) { this._installationId = installationId; }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get fullScreen(): boolean | undefined { return this._fullScreen; }
  set fullScreen(fullScreen: boolean | undefined) { this._fullScreen = fullScreen; }

  get adTrackingEnabled(): boolean | undefined { return this._adTrackingEnabled; }
  set adTrackingEnabled(adTrackingEnabled: boolean | undefined) { this._adTrackingEnabled = adTrackingEnabled; }

  get manufacturer(): string | undefined { return this._manufacturer; }
  set manufacturer(manufacturer: string | undefined) { this._manufacturer = manufacturer; }

  get model(): string | undefined { return this._model; }
  set model(model: string | undefined) { this._model = model; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get osName(): string | undefined { return this._osName; }
  set osName(osName: string | undefined) { this._osName = osName; }

  get osType(): string | undefined { return this._osType; }
  set osType(osType: string | undefined) { this._osType = osType; }

  get osVersion(): string | undefined { return this._osVersion; }
  set osVersion(osVersion: string | undefined) { this._osVersion = osVersion; }

  get jailbroken(): boolean | undefined { return this._jailbroken; }
  set jailbroken(jailbroken: boolean | undefined) { this._jailbroken = jailbroken; }

  get token(): string | undefined { return this._token; }
  set token(token: string | undefined) { this._token = token; }

  get ip(): string | undefined { return this._ip; }
  set ip(ip: string | undefined) { this._ip = ip; }

  get userAgent(): string | undefined { return this._userAgent; }
  set userAgent(userAgent: string | undefined) { this._userAgent = userAgent; }

  get engine(): string | undefined { return this._engine; }
  set engine(engine: string | undefined) { this._engine = engine; }

  get engineVersion(): string | undefined { return this._engineVersion; }
  set engineVersion(engineVersion: string | undefined) { this._engineVersion = engineVersion; }

  get client(): string | undefined { return this._client; }
  set client(client: string | undefined) { this._client = client; }

  get locale(): string | undefined { return this._locale; }
  set locale(locale: string | undefined) { this._locale = locale; }

  get bluetooth(): boolean | undefined { return this._bluetooth; }
  set bluetooth(bluetooth: boolean | undefined) { this._bluetooth = bluetooth; }

  get carrier(): string | undefined { return this._carrier; }
  set carrier(carrier: string | undefined) { this._carrier = carrier; }

  get cellular(): boolean | undefined { return this._cellular; }
  set cellular(cellular: boolean | undefined) { this._cellular = cellular; }

  get wifi(): boolean | undefined { return this._wifi; }
  set wifi(wifi: boolean | undefined) { this._wifi = wifi; }

  get screen(): Screen | undefined { return this._screen; }
  set screen(screen: Screen | undefined) { this._screen = screen; }

  get location(): Location | undefined { return this._location; }
  set location(location: Location | undefined) { this._location = location; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default DeviceContext;
