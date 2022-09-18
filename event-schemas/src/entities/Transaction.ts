

class Transaction {
  private _id?: string;
  private _receipt?: string;
  private _receiptSignature?: string;
  private _transactorId?: string;
  private _transactorName?: string;
  private _transactorType?: string;
  private _receiverId?: string;
  private _receiverName?: string;
  private _receiverType?: string;
  private _network?: string;
  private _checkoutId?: string;
  private _orderId?: string;
  private _storeId?: string;
  private _storeSourceId?: string;
  private _renewalCount?: number;
  private _feesTotal?: number;
  private _priceTotal?: number;
  private _discountTotal?: number;
  private _quantity?: number;
  private _amount?: number;
  private _currency?: string;
  private _paymentMethod?: string;
  private _paymentProvider?: string;
  private _virtualAmount?: number;
  private _virtualCurrency?: string;
  private _virtualCurrencyType?: string;
  private _blob?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: string,
    receipt?: string,
    receiptSignature?: string,
    transactorId?: string,
    transactorName?: string,
    transactorType?: string,
    receiverId?: string,
    receiverName?: string,
    receiverType?: string,
    network?: string,
    checkoutId?: string,
    orderId?: string,
    storeId?: string,
    storeSourceId?: string,
    renewalCount?: number,
    feesTotal?: number,
    priceTotal?: number,
    discountTotal?: number,
    quantity?: number,
    amount?: number,
    currency?: string,
    paymentMethod?: string,
    paymentProvider?: string,
    virtualAmount?: number,
    virtualCurrency?: string,
    virtualCurrencyType?: string,
    blob?: string,
  }) {
    this._id = input.id;
    this._receipt = input.receipt;
    this._receiptSignature = input.receiptSignature;
    this._transactorId = input.transactorId;
    this._transactorName = input.transactorName;
    this._transactorType = input.transactorType;
    this._receiverId = input.receiverId;
    this._receiverName = input.receiverName;
    this._receiverType = input.receiverType;
    this._network = input.network;
    this._checkoutId = input.checkoutId;
    this._orderId = input.orderId;
    this._storeId = input.storeId;
    this._storeSourceId = input.storeSourceId;
    this._renewalCount = input.renewalCount;
    this._feesTotal = input.feesTotal;
    this._priceTotal = input.priceTotal;
    this._discountTotal = input.discountTotal;
    this._quantity = input.quantity;
    this._amount = input.amount;
    this._currency = input.currency;
    this._paymentMethod = input.paymentMethod;
    this._paymentProvider = input.paymentProvider;
    this._virtualAmount = input.virtualAmount;
    this._virtualCurrency = input.virtualCurrency;
    this._virtualCurrencyType = input.virtualCurrencyType;
    this._blob = input.blob;
  }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get receipt(): string | undefined { return this._receipt; }
  set receipt(receipt: string | undefined) { this._receipt = receipt; }

  get receiptSignature(): string | undefined { return this._receiptSignature; }
  set receiptSignature(receiptSignature: string | undefined) { this._receiptSignature = receiptSignature; }

  get transactorId(): string | undefined { return this._transactorId; }
  set transactorId(transactorId: string | undefined) { this._transactorId = transactorId; }

  get transactorName(): string | undefined { return this._transactorName; }
  set transactorName(transactorName: string | undefined) { this._transactorName = transactorName; }

  get transactorType(): string | undefined { return this._transactorType; }
  set transactorType(transactorType: string | undefined) { this._transactorType = transactorType; }

  get receiverId(): string | undefined { return this._receiverId; }
  set receiverId(receiverId: string | undefined) { this._receiverId = receiverId; }

  get receiverName(): string | undefined { return this._receiverName; }
  set receiverName(receiverName: string | undefined) { this._receiverName = receiverName; }

  get receiverType(): string | undefined { return this._receiverType; }
  set receiverType(receiverType: string | undefined) { this._receiverType = receiverType; }

  get network(): string | undefined { return this._network; }
  set network(network: string | undefined) { this._network = network; }

  get checkoutId(): string | undefined { return this._checkoutId; }
  set checkoutId(checkoutId: string | undefined) { this._checkoutId = checkoutId; }

  get orderId(): string | undefined { return this._orderId; }
  set orderId(orderId: string | undefined) { this._orderId = orderId; }

  get storeId(): string | undefined { return this._storeId; }
  set storeId(storeId: string | undefined) { this._storeId = storeId; }

  get storeSourceId(): string | undefined { return this._storeSourceId; }
  set storeSourceId(storeSourceId: string | undefined) { this._storeSourceId = storeSourceId; }

  get renewalCount(): number | undefined { return this._renewalCount; }
  set renewalCount(renewalCount: number | undefined) { this._renewalCount = renewalCount; }

  get feesTotal(): number | undefined { return this._feesTotal; }
  set feesTotal(feesTotal: number | undefined) { this._feesTotal = feesTotal; }

  get priceTotal(): number | undefined { return this._priceTotal; }
  set priceTotal(priceTotal: number | undefined) { this._priceTotal = priceTotal; }

  get discountTotal(): number | undefined { return this._discountTotal; }
  set discountTotal(discountTotal: number | undefined) { this._discountTotal = discountTotal; }

  get quantity(): number | undefined { return this._quantity; }
  set quantity(quantity: number | undefined) { this._quantity = quantity; }

  get amount(): number | undefined { return this._amount; }
  set amount(amount: number | undefined) { this._amount = amount; }

  get currency(): string | undefined { return this._currency; }
  set currency(currency: string | undefined) { this._currency = currency; }

  get paymentMethod(): string | undefined { return this._paymentMethod; }
  set paymentMethod(paymentMethod: string | undefined) { this._paymentMethod = paymentMethod; }

  get paymentProvider(): string | undefined { return this._paymentProvider; }
  set paymentProvider(paymentProvider: string | undefined) { this._paymentProvider = paymentProvider; }

  get virtualAmount(): number | undefined { return this._virtualAmount; }
  set virtualAmount(virtualAmount: number | undefined) { this._virtualAmount = virtualAmount; }

  get virtualCurrency(): string | undefined { return this._virtualCurrency; }
  set virtualCurrency(virtualCurrency: string | undefined) { this._virtualCurrency = virtualCurrency; }

  get virtualCurrencyType(): string | undefined { return this._virtualCurrencyType; }
  set virtualCurrencyType(virtualCurrencyType: string | undefined) { this._virtualCurrencyType = virtualCurrencyType; }

  get blob(): string | undefined { return this._blob; }
  set blob(blob: string | undefined) { this._blob = blob; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Transaction;
