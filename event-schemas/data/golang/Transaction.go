
package entities

// Transaction represents a Transaction model.
type Transaction struct {
  Id string
  Receipt string
  ReceiptSignature string
  TransactorId string
  TransactorName string
  TransactorType string
  ReceiverId string
  ReceiverName string
  ReceiverType string
  Network string
  CheckoutId string
  OrderId string
  StoreId string
  StoreSourceId string
  RenewalCount float64
  FeesTotal float64
  PriceTotal float64
  DiscountTotal float64
  Quantity float64
  Amount float64
  Currency string
  PaymentMethod string
  PaymentProvider string
  VirtualAmount float64
  VirtualCurrency string
  VirtualCurrencyType string
  Blob string
  AdditionalProperties map[string][]interface{}
}