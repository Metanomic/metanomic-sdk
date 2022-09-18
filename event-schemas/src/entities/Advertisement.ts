

class Advertisement {
  private _publisher?: string;
  private _position?: number;
  private _totalLength?: number;
  private _quartile?: number;
  private _placementId?: string;
  private _placementName?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    publisher?: string,
    position?: number,
    totalLength?: number,
    quartile?: number,
    placementId?: string,
    placementName?: string,
  }) {
    this._publisher = input.publisher;
    this._position = input.position;
    this._totalLength = input.totalLength;
    this._quartile = input.quartile;
    this._placementId = input.placementId;
    this._placementName = input.placementName;
  }

  get publisher(): string | undefined { return this._publisher; }
  set publisher(publisher: string | undefined) { this._publisher = publisher; }

  get position(): number | undefined { return this._position; }
  set position(position: number | undefined) { this._position = position; }

  get totalLength(): number | undefined { return this._totalLength; }
  set totalLength(totalLength: number | undefined) { this._totalLength = totalLength; }

  get quartile(): number | undefined { return this._quartile; }
  set quartile(quartile: number | undefined) { this._quartile = quartile; }

  get placementId(): string | undefined { return this._placementId; }
  set placementId(placementId: string | undefined) { this._placementId = placementId; }

  get placementName(): string | undefined { return this._placementName; }
  set placementName(placementName: string | undefined) { this._placementName = placementName; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Advertisement;
