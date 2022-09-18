namespace entities
{
  public enum InGameSocialEventType
  {
    ConversationNew,
    ConversationJoin,
    ConversationLeave,
    ConversationMsgSent,
    ChannelNew,
    ChannelJoin,
    ChannelLeave,
    ChannelMsgSent,
    GuildNew,
    GuildJoin,
    GuildLeave,
    GuildMsgSent,
    GroupNew,
    GroupJoin,
    GroupLeave,
    GroupMsgSent,
    PartyNew,
    PartyJoin,
    PartyLeave,
    PartyMsgSent
  }

  public static class InGameSocialEventTypeExtensions
  {
    public static dynamic GetValue(this InGameSocialEventType enumValue)
    {
      switch (enumValue)
      {
        case InGameSocialEventType.ConversationNew: return "ConversationNew";
        case InGameSocialEventType.ConversationJoin: return "ConversationJoin";
        case InGameSocialEventType.ConversationLeave: return "ConversationLeave";
        case InGameSocialEventType.ConversationMsgSent: return "ConversationMsgSent";
        case InGameSocialEventType.ChannelNew: return "ChannelNew";
        case InGameSocialEventType.ChannelJoin: return "ChannelJoin";
        case InGameSocialEventType.ChannelLeave: return "ChannelLeave";
        case InGameSocialEventType.ChannelMsgSent: return "ChannelMsgSent";
        case InGameSocialEventType.GuildNew: return "GuildNew";
        case InGameSocialEventType.GuildJoin: return "GuildJoin";
        case InGameSocialEventType.GuildLeave: return "GuildLeave";
        case InGameSocialEventType.GuildMsgSent: return "GuildMsgSent";
        case InGameSocialEventType.GroupNew: return "GroupNew";
        case InGameSocialEventType.GroupJoin: return "GroupJoin";
        case InGameSocialEventType.GroupLeave: return "GroupLeave";
        case InGameSocialEventType.GroupMsgSent: return "GroupMsgSent";
        case InGameSocialEventType.PartyNew: return "PartyNew";
        case InGameSocialEventType.PartyJoin: return "PartyJoin";
        case InGameSocialEventType.PartyLeave: return "PartyLeave";
        case InGameSocialEventType.PartyMsgSent: return "PartyMsgSent";
      }
      return null;
    }

    public static InGameSocialEventType? ToInGameSocialEventType(dynamic value)
    {
      switch (value)
      {
        case "ConversationNew": return InGameSocialEventType.ConversationNew;
        case "ConversationJoin": return InGameSocialEventType.ConversationJoin;
        case "ConversationLeave": return InGameSocialEventType.ConversationLeave;
        case "ConversationMsgSent": return InGameSocialEventType.ConversationMsgSent;
        case "ChannelNew": return InGameSocialEventType.ChannelNew;
        case "ChannelJoin": return InGameSocialEventType.ChannelJoin;
        case "ChannelLeave": return InGameSocialEventType.ChannelLeave;
        case "ChannelMsgSent": return InGameSocialEventType.ChannelMsgSent;
        case "GuildNew": return InGameSocialEventType.GuildNew;
        case "GuildJoin": return InGameSocialEventType.GuildJoin;
        case "GuildLeave": return InGameSocialEventType.GuildLeave;
        case "GuildMsgSent": return InGameSocialEventType.GuildMsgSent;
        case "GroupNew": return InGameSocialEventType.GroupNew;
        case "GroupJoin": return InGameSocialEventType.GroupJoin;
        case "GroupLeave": return InGameSocialEventType.GroupLeave;
        case "GroupMsgSent": return InGameSocialEventType.GroupMsgSent;
        case "PartyNew": return InGameSocialEventType.PartyNew;
        case "PartyJoin": return InGameSocialEventType.PartyJoin;
        case "PartyLeave": return InGameSocialEventType.PartyLeave;
        case "PartyMsgSent": return InGameSocialEventType.PartyMsgSent;
      }
      return null;
    }
  }

}