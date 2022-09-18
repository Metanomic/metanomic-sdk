
package entities

// Location represents a Location model.
type Location struct {
  City string
  Country string
  Continent string
  Latitude float64
  Longitude float64
  Speed float64
  AdditionalProperties map[string][]interface{}
}