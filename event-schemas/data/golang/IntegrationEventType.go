
package entities

// IntegrationEventType represents an enum of string.
type IntegrationEventType string

const (
  IntegrationEventTypeConnect IntegrationEventType = "Connect"
  IntegrationEventTypeDeploy = "Deploy"
  IntegrationEventTypeStream = "Stream"
)