
package entities

// InGameStoreEventType represents an enum of string.
type InGameStoreEventType string

const (
  InGameStoreEventTypeStoreOpened InGameStoreEventType = "StoreOpened"
  InGameStoreEventTypeStoreItemClick = "StoreItemClick"
  InGameStoreEventTypeItemAcquired = "ItemAcquired"
  InGameStoreEventTypeItemSpent = "ItemSpent"
  InGameStoreEventTypeChampionAcquired = "ChampionAcquired"
  InGameStoreEventTypeSkinAcquired = "SkinAcquired"
  InGameStoreEventTypeVariationAcquired = "VariationAcquired"
)