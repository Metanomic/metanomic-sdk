

class Content {
  private _key?: string;
  private _title?: string;
  private _term?: string;
  private _count?: number;
  private _uri?: string;
  private _isIpfs?: boolean;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    key?: string,
    title?: string,
    term?: string,
    count?: number,
    uri?: string,
    isIpfs?: boolean,
  }) {
    this._key = input.key;
    this._title = input.title;
    this._term = input.term;
    this._count = input.count;
    this._uri = input.uri;
    this._isIpfs = input.isIpfs;
  }

  get key(): string | undefined { return this._key; }
  set key(key: string | undefined) { this._key = key; }

  get title(): string | undefined { return this._title; }
  set title(title: string | undefined) { this._title = title; }

  get term(): string | undefined { return this._term; }
  set term(term: string | undefined) { this._term = term; }

  get count(): number | undefined { return this._count; }
  set count(count: number | undefined) { this._count = count; }

  get uri(): string | undefined { return this._uri; }
  set uri(uri: string | undefined) { this._uri = uri; }

  get isIpfs(): boolean | undefined { return this._isIpfs; }
  set isIpfs(isIpfs: boolean | undefined) { this._isIpfs = isIpfs; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Content;
