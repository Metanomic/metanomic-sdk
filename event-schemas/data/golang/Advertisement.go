
package entities

// Advertisement represents a Advertisement model.
type Advertisement struct {
  Publisher string
  Position float64
  TotalLength float64
  Quartile float64
  PlacementId string
  PlacementName string
  AdditionalProperties map[string][]interface{}
}