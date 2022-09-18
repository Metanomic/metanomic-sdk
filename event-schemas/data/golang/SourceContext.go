
package entities

// SourceContext represents a SourceContext model.
type SourceContext struct {
  WorldId string
  RealmId string
  ServerId string
  ShardId string
  Method string
  Path string
  Referrer string
  Search string
  Title string
  Url string
  Environment string
  AdditionalProperties map[string][]interface{}
}