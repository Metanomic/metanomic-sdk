

class Screen {
  private _width?: number;
  private _height?: number;
  private _density?: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    width?: number,
    height?: number,
    density?: number,
  }) {
    this._width = input.width;
    this._height = input.height;
    this._density = input.density;
  }

  get width(): number | undefined { return this._width; }
  set width(width: number | undefined) { this._width = width; }

  get height(): number | undefined { return this._height; }
  set height(height: number | undefined) { this._height = height; }

  get density(): number | undefined { return this._density; }
  set density(density: number | undefined) { this._density = density; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Screen;
