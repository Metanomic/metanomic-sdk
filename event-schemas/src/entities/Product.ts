

class Product {
  private _productId: string;
  private _sku?: string;
  private _category?: string;
  private _name?: string;
  private _brand?: string;
  private _variant?: string;
  private _quantity?: number;
  private _price?: number;
  private _currency?: string;
  private _imageUri?: string;
  private _uri?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    productId: string,
    sku?: string,
    category?: string,
    name?: string,
    brand?: string,
    variant?: string,
    quantity?: number,
    price?: number,
    currency?: string,
    imageUri?: string,
    uri?: string,
  }) {
    this._productId = input.productId;
    this._sku = input.sku;
    this._category = input.category;
    this._name = input.name;
    this._brand = input.brand;
    this._variant = input.variant;
    this._quantity = input.quantity;
    this._price = input.price;
    this._currency = input.currency;
    this._imageUri = input.imageUri;
    this._uri = input.uri;
  }

  get productId(): string { return this._productId; }
  set productId(productId: string) { this._productId = productId; }

  get sku(): string | undefined { return this._sku; }
  set sku(sku: string | undefined) { this._sku = sku; }

  get category(): string | undefined { return this._category; }
  set category(category: string | undefined) { this._category = category; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get brand(): string | undefined { return this._brand; }
  set brand(brand: string | undefined) { this._brand = brand; }

  get variant(): string | undefined { return this._variant; }
  set variant(variant: string | undefined) { this._variant = variant; }

  get quantity(): number | undefined { return this._quantity; }
  set quantity(quantity: number | undefined) { this._quantity = quantity; }

  get price(): number | undefined { return this._price; }
  set price(price: number | undefined) { this._price = price; }

  get currency(): string | undefined { return this._currency; }
  set currency(currency: string | undefined) { this._currency = currency; }

  get imageUri(): string | undefined { return this._imageUri; }
  set imageUri(imageUri: string | undefined) { this._imageUri = imageUri; }

  get uri(): string | undefined { return this._uri; }
  set uri(uri: string | undefined) { this._uri = uri; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Product;
