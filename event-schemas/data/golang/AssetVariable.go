
package entities

// AssetVariable represents a AssetVariable model.
type AssetVariable struct {
  Type *VariableType
  Key string
  Value float64
  Variations []*AssetVariation
  AdditionalProperties map[string][]interface{}
}