

class MapContext {
  private _id?: string;
  private _name?: string;
  private _level?: number;
  private _position?: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: string,
    name?: string,
    level?: number,
    position?: number,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._level = input.level;
    this._position = input.position;
  }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get level(): number | undefined { return this._level; }
  set level(level: number | undefined) { this._level = level; }

  get position(): number | undefined { return this._position; }
  set position(position: number | undefined) { this._position = position; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default MapContext;
