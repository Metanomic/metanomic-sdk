
package entities

// Prize represents a Prize model.
type Prize struct {
  Id string
  Name string
  Value float64
  Level float64
  Amount float64
  IsUnique bool
  IsItem bool
  IsCurrency bool
  AdditionalProperties map[string][]interface{}
}