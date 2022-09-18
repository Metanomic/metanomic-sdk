
package entities

// MarketingEventType represents an enum of string.
type MarketingEventType string

const (
  MarketingEventTypeCampaignNew MarketingEventType = "CampaignNew"
  MarketingEventTypeCampaignStart = "CampaignStart"
  MarketingEventTypeCampaignStop = "CampaignStop"
  MarketingEventTypeCampaignResult = "CampaignResult"
  MarketingEventTypeCampaignBounced = "CampaignBounced"
)