
package entities

// TxType represents a TxType model.
type TxType struct {
  IsAchievementReward bool
  IsRedeem bool
  IsReward bool
  IsAdReward bool
  IsInappPurchase bool
  IsRenewal bool
  IsPurchase bool
  IsFxTrade bool
  IsSale bool
  IsTrade bool
  IsDrop bool
  IsLoot bool
  IsGained bool
  IsContract bool
  AdditionalProperties map[string][]interface{}
}