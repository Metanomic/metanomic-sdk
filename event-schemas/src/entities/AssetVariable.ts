import VariableType from './VariableType';
import AssetVariation from './AssetVariation';

class AssetVariable {
  private _type: VariableType;
  private _key: string;
  private _value: number;
  private _variations?: Array<AssetVariation>;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    type: VariableType,
    key: string,
    value: number,
    variations?: Array<AssetVariation>,
  }) {
    this._type = input.type;
    this._key = input.key;
    this._value = input.value;
    this._variations = input.variations;
  }

  get type(): VariableType { return this._type; }
  set type(type: VariableType) { this._type = type; }

  get key(): string { return this._key; }
  set key(key: string) { this._key = key; }

  get value(): number { return this._value; }
  set value(value: number) { this._value = value; }

  get variations(): Array<AssetVariation> | undefined { return this._variations; }
  set variations(variations: Array<AssetVariation> | undefined) { this._variations = variations; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default AssetVariable;
