

class Gear {
  private _level?: number;
  private _value?: number;
  private _reservedClass?: string;
  private _isUnique?: boolean;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    level?: number,
    value?: number,
    reservedClass?: string,
    isUnique?: boolean,
  }) {
    this._level = input.level;
    this._value = input.value;
    this._reservedClass = input.reservedClass;
    this._isUnique = input.isUnique;
  }

  get level(): number | undefined { return this._level; }
  set level(level: number | undefined) { this._level = level; }

  get value(): number | undefined { return this._value; }
  set value(value: number | undefined) { this._value = value; }

  get reservedClass(): string | undefined { return this._reservedClass; }
  set reservedClass(reservedClass: string | undefined) { this._reservedClass = reservedClass; }

  get isUnique(): boolean | undefined { return this._isUnique; }
  set isUnique(isUnique: boolean | undefined) { this._isUnique = isUnique; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Gear;
