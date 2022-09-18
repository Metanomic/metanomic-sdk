
package entities

// AdEventType represents an enum of string.
type AdEventType string

const (
  AdEventTypeAdStarted AdEventType = "AdStarted"
  AdEventTypeAdOpened = "AdOpened"
  AdEventTypeAdPlaying = "AdPlaying"
  AdEventTypeAdStoped = "AdStoped"
  AdEventTypeAdSkipped = "AdSkipped"
  AdEventTypeConversion = "Conversion"
  AdEventTypeAdCompleted = "AdCompleted"
  AdEventTypeAdStop = "AdStop"
  AdEventTypeAdClosed = "AdClosed"
  AdEventTypeAdImpression = "AdImpression"
  AdEventTypeAdExposure = "AdExposure"
  AdEventTypeAdReward = "AdReward"
)