
package entities

// ResourceTrackingEventType represents an enum of string.
type ResourceTrackingEventType string

const (
  ResourceTrackingEventTypeResourceSupply ResourceTrackingEventType = "ResourceSupply"
  ResourceTrackingEventTypeResourceGeneration = "ResourceGeneration"
)