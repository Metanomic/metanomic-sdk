
package entities

// AssetType represents an enum of string.
type AssetType string

const (
  AssetTypeResource AssetType = "Resource"
  AssetTypeItem = "Item"
  AssetTypeCraft = "Craft"
  AssetTypeInput = "Input"
  AssetTypeModifier = "Modifier"
  AssetTypeProfile = "Profile"
  AssetTypeCharacter = "Character"
)