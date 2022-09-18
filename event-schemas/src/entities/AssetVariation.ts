import VariableVariationType from './VariableVariationType';

class AssetVariation {
  private _type: VariableVariationType;
  private _key: string;
  private _value: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    type: VariableVariationType,
    key: string,
    value: number,
  }) {
    this._type = input.type;
    this._key = input.key;
    this._value = input.value;
  }

  get type(): VariableVariationType { return this._type; }
  set type(type: VariableVariationType) { this._type = type; }

  get key(): string { return this._key; }
  set key(key: string) { this._key = key; }

  get value(): number { return this._value; }
  set value(value: number) { this._value = value; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default AssetVariation;
