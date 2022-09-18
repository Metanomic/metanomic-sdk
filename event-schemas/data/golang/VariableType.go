
package entities

// VariableType represents an enum of string.
type VariableType string

const (
  VariableTypeProbability VariableType = "Probability"
  VariableTypeQuantity = "Quantity"
  VariableTypeQuality = "Quality"
  VariableTypeRate = "Rate"
  VariableTypeNumber = "Number"
  VariableTypePercentage = "Percentage"
  VariableTypeTime = "Time"
)