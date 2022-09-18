
package entities

// EventSourceContextSchema represents a EventSourceContextSchema model.
type EventSourceContextSchema struct {
  App *AppContext
  Campaign *CampaignContext
  Device *DeviceContext
  Source *SourceContext
  Experiment *ExperimentContext
  Session *SessionContext
  Profile *ProfileContext
  TargetProfile *ProfileContext
  Map *MapContext
  AdditionalProperties map[string][]interface{}
}