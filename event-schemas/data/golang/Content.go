
package entities

// Content represents a Content model.
type Content struct {
  Key string
  Title string
  Term string
  Count float64
  Uri string
  IsIpfs bool
  AdditionalProperties map[string][]interface{}
}