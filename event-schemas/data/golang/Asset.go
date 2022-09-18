
package entities

// Asset represents a Asset model.
type Asset struct {
  AssetId string
  TypeList []*AssetType
  Inputs []string
  Outputs []string
  Classification string
  Categories []string
  Variables []*AssetVariable
  AdditionalProperties map[string][]interface{}
}