

class Price {
  private _amount?: number;
  private _currency?: string;
  private _currencyType?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    amount?: number,
    currency?: string,
    currencyType?: string,
  }) {
    this._amount = input.amount;
    this._currency = input.currency;
    this._currencyType = input.currencyType;
  }

  get amount(): number | undefined { return this._amount; }
  set amount(amount: number | undefined) { this._amount = amount; }

  get currency(): string | undefined { return this._currency; }
  set currency(currency: string | undefined) { this._currency = currency; }

  get currencyType(): string | undefined { return this._currencyType; }
  set currencyType(currencyType: string | undefined) { this._currencyType = currencyType; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Price;
