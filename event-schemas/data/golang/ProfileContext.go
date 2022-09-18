
package entities

// ProfileContext represents a ProfileContext model.
type ProfileContext struct {
  Id string
  Name string
  Xp float64
  Champion string
  Skin string
  IsPremium bool
  Class string
  Subclass string
  Race string
  Mastery string
  GroupId string
  GuildId string
  TeamId string
  PartyId string
  FactionId string
  ChannelId string
  AdditionalProperties map[string][]interface{}
}