

class CampaignContext {
  private _name?: string;
  private _affiliate?: string;
  private _provider?: string;
  private _source?: string;
  private _medium?: string;
  private _term?: string;
  private _contentId?: string;
  private _contentType?: string;
  private _creativeUri?: string;
  private _marketingTactic?: string;
  private _group?: string;
  private _uri?: string;
  private _eCpm?: number;
  private _idfv?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    name?: string,
    affiliate?: string,
    provider?: string,
    source?: string,
    medium?: string,
    term?: string,
    contentId?: string,
    contentType?: string,
    creativeUri?: string,
    marketingTactic?: string,
    group?: string,
    uri?: string,
    eCpm?: number,
    idfv?: string,
  }) {
    this._name = input.name;
    this._affiliate = input.affiliate;
    this._provider = input.provider;
    this._source = input.source;
    this._medium = input.medium;
    this._term = input.term;
    this._contentId = input.contentId;
    this._contentType = input.contentType;
    this._creativeUri = input.creativeUri;
    this._marketingTactic = input.marketingTactic;
    this._group = input.group;
    this._uri = input.uri;
    this._eCpm = input.eCpm;
    this._idfv = input.idfv;
  }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get affiliate(): string | undefined { return this._affiliate; }
  set affiliate(affiliate: string | undefined) { this._affiliate = affiliate; }

  get provider(): string | undefined { return this._provider; }
  set provider(provider: string | undefined) { this._provider = provider; }

  get source(): string | undefined { return this._source; }
  set source(source: string | undefined) { this._source = source; }

  get medium(): string | undefined { return this._medium; }
  set medium(medium: string | undefined) { this._medium = medium; }

  get term(): string | undefined { return this._term; }
  set term(term: string | undefined) { this._term = term; }

  get contentId(): string | undefined { return this._contentId; }
  set contentId(contentId: string | undefined) { this._contentId = contentId; }

  get contentType(): string | undefined { return this._contentType; }
  set contentType(contentType: string | undefined) { this._contentType = contentType; }

  get creativeUri(): string | undefined { return this._creativeUri; }
  set creativeUri(creativeUri: string | undefined) { this._creativeUri = creativeUri; }

  get marketingTactic(): string | undefined { return this._marketingTactic; }
  set marketingTactic(marketingTactic: string | undefined) { this._marketingTactic = marketingTactic; }

  get group(): string | undefined { return this._group; }
  set group(group: string | undefined) { this._group = group; }

  get uri(): string | undefined { return this._uri; }
  set uri(uri: string | undefined) { this._uri = uri; }

  get eCpm(): number | undefined { return this._eCpm; }
  set eCpm(eCpm: number | undefined) { this._eCpm = eCpm; }

  get idfv(): string | undefined { return this._idfv; }
  set idfv(idfv: string | undefined) { this._idfv = idfv; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default CampaignContext;
