
package entities

// SessionContext represents a SessionContext model.
type SessionContext struct {
  Id string
  Name string
  Theme string
  Genre string
  Level float64
  Progress float64
  Difficulty float64
  AdditionalProperties map[string][]interface{}
}