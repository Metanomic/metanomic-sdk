

class ExperimentContext {
  private _id?: string;
  private _name?: string;
  private _group?: string;
  private _variation?: string;
  private _uri?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: string,
    name?: string,
    group?: string,
    variation?: string,
    uri?: string,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._group = input.group;
    this._variation = input.variation;
    this._uri = input.uri;
  }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get group(): string | undefined { return this._group; }
  set group(group: string | undefined) { this._group = group; }

  get variation(): string | undefined { return this._variation; }
  set variation(variation: string | undefined) { this._variation = variation; }

  get uri(): string | undefined { return this._uri; }
  set uri(uri: string | undefined) { this._uri = uri; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ExperimentContext;
