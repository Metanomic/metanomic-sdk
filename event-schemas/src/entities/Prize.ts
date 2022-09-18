

class Prize {
  private _id?: string;
  private _name?: string;
  private _value?: number;
  private _level?: number;
  private _amount?: number;
  private _isUnique?: boolean;
  private _isItem?: boolean;
  private _isCurrency?: boolean;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: string,
    name?: string,
    value?: number,
    level?: number,
    amount?: number,
    isUnique?: boolean,
    isItem?: boolean,
    isCurrency?: boolean,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._value = input.value;
    this._level = input.level;
    this._amount = input.amount;
    this._isUnique = input.isUnique;
    this._isItem = input.isItem;
    this._isCurrency = input.isCurrency;
  }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get value(): number | undefined { return this._value; }
  set value(value: number | undefined) { this._value = value; }

  get level(): number | undefined { return this._level; }
  set level(level: number | undefined) { this._level = level; }

  get amount(): number | undefined { return this._amount; }
  set amount(amount: number | undefined) { this._amount = amount; }

  get isUnique(): boolean | undefined { return this._isUnique; }
  set isUnique(isUnique: boolean | undefined) { this._isUnique = isUnique; }

  get isItem(): boolean | undefined { return this._isItem; }
  set isItem(isItem: boolean | undefined) { this._isItem = isItem; }

  get isCurrency(): boolean | undefined { return this._isCurrency; }
  set isCurrency(isCurrency: boolean | undefined) { this._isCurrency = isCurrency; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Prize;
