
package entities

// Product represents a Product model.
type Product struct {
  ProductId string
  Sku string
  Category string
  Name string
  Brand string
  Variant string
  Quantity float64
  Price float64
  Currency string
  ImageUri string
  Uri string
  AdditionalProperties map[string][]interface{}
}