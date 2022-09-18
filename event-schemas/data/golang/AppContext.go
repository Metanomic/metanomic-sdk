
package entities

// AppContext represents a AppContext model.
type AppContext struct {
  Name string
  Version string
  Build string
  Namespace string
  AdditionalProperties map[string][]interface{}
}