
package entities

// Social represents a Social model.
type Social struct {
  Recipient string
  Sender string
  GroupName string
  Via string
  Message string
  Rating string
  AdditionalProperties map[string][]interface{}
}