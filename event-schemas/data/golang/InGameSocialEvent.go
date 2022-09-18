
package entities

// InGameSocialEvent represents a InGameSocialEvent model.
type InGameSocialEvent struct {
  Type *InGameSocialEventType
  Version string
  EventId string
  AppId string
  UserId string
  InstallationId string
  PlayerId string
  SessionId string
  DoTrack bool
  ExpiresAt int
  ReceivedAt int
  SentAt int
  Timestamp int
  EventSinceAppstart int
  SourceContext *EventSourceContextSchema
  Value *TheValuePayload
  LinkedAssets []*Asset
  LinkedProduct []*Product
  AdditionalProperties map[string][]interface{}
}