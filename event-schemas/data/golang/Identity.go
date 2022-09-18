
package entities

// Identity represents a Identity model.
type Identity struct {
  UserId string
  ProfileId string
  Wallet string
  Anonymous bool
  Username string
  Email string
  Plan string
  AdditionalProperties map[string][]interface{}
}