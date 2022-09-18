import AssetType from './AssetType';
import AssetVariable from './AssetVariable';

class Asset {
  private _assetId: string;
  private _typeList: Array<AssetType>;
  private _inputs?: Array<string>;
  private _outputs?: Array<string>;
  private _classification?: string;
  private _categories?: Array<string>;
  private _variables?: Array<AssetVariable>;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    assetId: string,
    typeList: Array<AssetType>,
    inputs?: Array<string>,
    outputs?: Array<string>,
    classification?: string,
    categories?: Array<string>,
    variables?: Array<AssetVariable>,
  }) {
    this._assetId = input.assetId;
    this._typeList = input.typeList;
    this._inputs = input.inputs;
    this._outputs = input.outputs;
    this._classification = input.classification;
    this._categories = input.categories;
    this._variables = input.variables;
  }

  get assetId(): string { return this._assetId; }
  set assetId(assetId: string) { this._assetId = assetId; }

  get typeList(): Array<AssetType> { return this._typeList; }
  set typeList(typeList: Array<AssetType>) { this._typeList = typeList; }

  get inputs(): Array<string> | undefined { return this._inputs; }
  set inputs(inputs: Array<string> | undefined) { this._inputs = inputs; }

  get outputs(): Array<string> | undefined { return this._outputs; }
  set outputs(outputs: Array<string> | undefined) { this._outputs = outputs; }

  get classification(): string | undefined { return this._classification; }
  set classification(classification: string | undefined) { this._classification = classification; }

  get categories(): Array<string> | undefined { return this._categories; }
  set categories(categories: Array<string> | undefined) { this._categories = categories; }

  get variables(): Array<AssetVariable> | undefined { return this._variables; }
  set variables(variables: Array<AssetVariable> | undefined) { this._variables = variables; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Asset;
