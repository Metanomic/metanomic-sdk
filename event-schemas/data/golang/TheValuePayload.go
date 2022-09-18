
package entities

// TheValuePayload represents a TheValuePayload model.
type TheValuePayload struct {
  Identity *Identity
  Content *Content
  LinkedContent *Content
  Prize *Prize
  Gear *Gear
  TxType *TxType
  Transaction *Transaction
  Price *Price
  Social *Social
  Mission *Mission
  Ad *Advertisement
  CustomRef string
  CustomValue float64
  CustomMeta *AnonymousSchema4398
  AdditionalProperties map[string][]interface{}
}