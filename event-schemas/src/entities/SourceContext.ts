

class SourceContext {
  private _worldId?: string;
  private _realmId?: string;
  private _serverId?: string;
  private _shardId?: string;
  private _method?: string;
  private _path?: string;
  private _referrer?: string;
  private _search?: string;
  private _title?: string;
  private _url?: string;
  private _environment?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    worldId?: string,
    realmId?: string,
    serverId?: string,
    shardId?: string,
    method?: string,
    path?: string,
    referrer?: string,
    search?: string,
    title?: string,
    url?: string,
    environment?: string,
  }) {
    this._worldId = input.worldId;
    this._realmId = input.realmId;
    this._serverId = input.serverId;
    this._shardId = input.shardId;
    this._method = input.method;
    this._path = input.path;
    this._referrer = input.referrer;
    this._search = input.search;
    this._title = input.title;
    this._url = input.url;
    this._environment = input.environment;
  }

  get worldId(): string | undefined { return this._worldId; }
  set worldId(worldId: string | undefined) { this._worldId = worldId; }

  get realmId(): string | undefined { return this._realmId; }
  set realmId(realmId: string | undefined) { this._realmId = realmId; }

  get serverId(): string | undefined { return this._serverId; }
  set serverId(serverId: string | undefined) { this._serverId = serverId; }

  get shardId(): string | undefined { return this._shardId; }
  set shardId(shardId: string | undefined) { this._shardId = shardId; }

  get method(): string | undefined { return this._method; }
  set method(method: string | undefined) { this._method = method; }

  get path(): string | undefined { return this._path; }
  set path(path: string | undefined) { this._path = path; }

  get referrer(): string | undefined { return this._referrer; }
  set referrer(referrer: string | undefined) { this._referrer = referrer; }

  get search(): string | undefined { return this._search; }
  set search(search: string | undefined) { this._search = search; }

  get title(): string | undefined { return this._title; }
  set title(title: string | undefined) { this._title = title; }

  get url(): string | undefined { return this._url; }
  set url(url: string | undefined) { this._url = url; }

  get environment(): string | undefined { return this._environment; }
  set environment(environment: string | undefined) { this._environment = environment; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default SourceContext;
