

class AppContext {
  private _name?: string;
  private _version?: string;
  private _build?: string;
  private _namespace?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    name?: string,
    version?: string,
    build?: string,
    namespace?: string,
  }) {
    this._name = input.name;
    this._version = input.version;
    this._build = input.build;
    this._namespace = input.namespace;
  }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get version(): string | undefined { return this._version; }
  set version(version: string | undefined) { this._version = version; }

  get build(): string | undefined { return this._build; }
  set build(build: string | undefined) { this._build = build; }

  get namespace(): string | undefined { return this._namespace; }
  set namespace(namespace: string | undefined) { this._namespace = namespace; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default AppContext;
