
package entities

// GenericProgressEventType represents an enum of string.
type GenericProgressEventType string

const (
  GenericProgressEventTypeProgressionStart GenericProgressEventType = "ProgressionStart"
  GenericProgressEventTypeProgressionComplete = "ProgressionComplete"
  GenericProgressEventTypeProgressionFail = "ProgressionFail"
)