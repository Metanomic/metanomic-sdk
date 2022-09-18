
package entities

// VariableVariationType represents an enum of string.
type VariableVariationType string

const (
  VariableVariationTypeMapping VariableVariationType = "Mapping"
  VariableVariationTypeLeveling = "Leveling"
  VariableVariationTypeClass = "Class"
  VariableVariationTypeTime = "Time"
  VariableVariationTypeDefault = "Default"
)