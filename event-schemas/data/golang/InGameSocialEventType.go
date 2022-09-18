
package entities

// InGameSocialEventType represents an enum of string.
type InGameSocialEventType string

const (
  InGameSocialEventTypeConversationNew InGameSocialEventType = "ConversationNew"
  InGameSocialEventTypeConversationJoin = "ConversationJoin"
  InGameSocialEventTypeConversationLeave = "ConversationLeave"
  InGameSocialEventTypeConversationMsgSent = "ConversationMsgSent"
  InGameSocialEventTypeChannelNew = "ChannelNew"
  InGameSocialEventTypeChannelJoin = "ChannelJoin"
  InGameSocialEventTypeChannelLeave = "ChannelLeave"
  InGameSocialEventTypeChannelMsgSent = "ChannelMsgSent"
  InGameSocialEventTypeGuildNew = "GuildNew"
  InGameSocialEventTypeGuildJoin = "GuildJoin"
  InGameSocialEventTypeGuildLeave = "GuildLeave"
  InGameSocialEventTypeGuildMsgSent = "GuildMsgSent"
  InGameSocialEventTypeGroupNew = "GroupNew"
  InGameSocialEventTypeGroupJoin = "GroupJoin"
  InGameSocialEventTypeGroupLeave = "GroupLeave"
  InGameSocialEventTypeGroupMsgSent = "GroupMsgSent"
  InGameSocialEventTypePartyNew = "PartyNew"
  InGameSocialEventTypePartyJoin = "PartyJoin"
  InGameSocialEventTypePartyLeave = "PartyLeave"
  InGameSocialEventTypePartyMsgSent = "PartyMsgSent"
)