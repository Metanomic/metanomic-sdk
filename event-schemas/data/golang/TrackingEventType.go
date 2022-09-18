
package entities

// TrackingEventType represents an enum of string.
type TrackingEventType string

const (
  TrackingEventTypeTrack TrackingEventType = "Track"
  TrackingEventTypeAction = "Action"
  TrackingEventTypeTransaction = "Transaction"
  TrackingEventTypeSpread = "Spread"
  TrackingEventTypeTraffic = "Traffic"
  TrackingEventTypeResource = "Resource"
  TrackingEventTypeError = "Error"
)