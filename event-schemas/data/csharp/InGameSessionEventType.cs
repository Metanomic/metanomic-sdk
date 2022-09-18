namespace entities
{
  public enum InGameSessionEventType
  {
    SessionNew,
    SessionStart,
    SessionStop,
    SessionResult,
    SessionRank,
    SessionQuit,
    SessionFail,
    SessionSkip,
    MissionNew,
    MissionStart,
    MissionStop,
    MissionResult,
    MissionRank,
    MissionQuit,
    MissionFail,
    MissionSkip,
    QuestNew,
    QuestStart,
    QuestStop,
    QuestResult,
    QuestRank,
    QuestQuit,
    QuestFail,
    QuestSkip,
    LevelNew,
    LevelStart,
    LevelStop,
    LevelResult,
    LevelRank,
    LevelQuit,
    LevelFail,
    LevelSkip,
    SeasonNew,
    SeasonStart,
    SeasonStop,
    SeasonResult,
    SeasonRank,
    SeasonQuit,
    SeasonFail,
    SeasonSkip,
    MatchmakingNew,
    MatchmakingStart,
    MatchmakingStop,
    MatchmakingResult,
    MatchmakingRank,
    MatchmakingQuit,
    MatchmakingFail,
    MatchmakingSkip
  }

  public static class InGameSessionEventTypeExtensions
  {
    public static dynamic GetValue(this InGameSessionEventType enumValue)
    {
      switch (enumValue)
      {
        case InGameSessionEventType.SessionNew: return "SessionNew";
        case InGameSessionEventType.SessionStart: return "SessionStart";
        case InGameSessionEventType.SessionStop: return "SessionStop";
        case InGameSessionEventType.SessionResult: return "SessionResult";
        case InGameSessionEventType.SessionRank: return "SessionRank";
        case InGameSessionEventType.SessionQuit: return "SessionQuit";
        case InGameSessionEventType.SessionFail: return "SessionFail";
        case InGameSessionEventType.SessionSkip: return "SessionSkip";
        case InGameSessionEventType.MissionNew: return "MissionNew";
        case InGameSessionEventType.MissionStart: return "MissionStart";
        case InGameSessionEventType.MissionStop: return "MissionStop";
        case InGameSessionEventType.MissionResult: return "MissionResult";
        case InGameSessionEventType.MissionRank: return "MissionRank";
        case InGameSessionEventType.MissionQuit: return "MissionQuit";
        case InGameSessionEventType.MissionFail: return "MissionFail";
        case InGameSessionEventType.MissionSkip: return "MissionSkip";
        case InGameSessionEventType.QuestNew: return "QuestNew";
        case InGameSessionEventType.QuestStart: return "QuestStart";
        case InGameSessionEventType.QuestStop: return "QuestStop";
        case InGameSessionEventType.QuestResult: return "QuestResult";
        case InGameSessionEventType.QuestRank: return "QuestRank";
        case InGameSessionEventType.QuestQuit: return "QuestQuit";
        case InGameSessionEventType.QuestFail: return "QuestFail";
        case InGameSessionEventType.QuestSkip: return "QuestSkip";
        case InGameSessionEventType.LevelNew: return "LevelNew";
        case InGameSessionEventType.LevelStart: return "LevelStart";
        case InGameSessionEventType.LevelStop: return "LevelStop";
        case InGameSessionEventType.LevelResult: return "LevelResult";
        case InGameSessionEventType.LevelRank: return "LevelRank";
        case InGameSessionEventType.LevelQuit: return "LevelQuit";
        case InGameSessionEventType.LevelFail: return "LevelFail";
        case InGameSessionEventType.LevelSkip: return "LevelSkip";
        case InGameSessionEventType.SeasonNew: return "SeasonNew";
        case InGameSessionEventType.SeasonStart: return "SeasonStart";
        case InGameSessionEventType.SeasonStop: return "SeasonStop";
        case InGameSessionEventType.SeasonResult: return "SeasonResult";
        case InGameSessionEventType.SeasonRank: return "SeasonRank";
        case InGameSessionEventType.SeasonQuit: return "SeasonQuit";
        case InGameSessionEventType.SeasonFail: return "SeasonFail";
        case InGameSessionEventType.SeasonSkip: return "SeasonSkip";
        case InGameSessionEventType.MatchmakingNew: return "MatchmakingNew";
        case InGameSessionEventType.MatchmakingStart: return "MatchmakingStart";
        case InGameSessionEventType.MatchmakingStop: return "MatchmakingStop";
        case InGameSessionEventType.MatchmakingResult: return "MatchmakingResult";
        case InGameSessionEventType.MatchmakingRank: return "MatchmakingRank";
        case InGameSessionEventType.MatchmakingQuit: return "MatchmakingQuit";
        case InGameSessionEventType.MatchmakingFail: return "MatchmakingFail";
        case InGameSessionEventType.MatchmakingSkip: return "MatchmakingSkip";
      }
      return null;
    }

    public static InGameSessionEventType? ToInGameSessionEventType(dynamic value)
    {
      switch (value)
      {
        case "SessionNew": return InGameSessionEventType.SessionNew;
        case "SessionStart": return InGameSessionEventType.SessionStart;
        case "SessionStop": return InGameSessionEventType.SessionStop;
        case "SessionResult": return InGameSessionEventType.SessionResult;
        case "SessionRank": return InGameSessionEventType.SessionRank;
        case "SessionQuit": return InGameSessionEventType.SessionQuit;
        case "SessionFail": return InGameSessionEventType.SessionFail;
        case "SessionSkip": return InGameSessionEventType.SessionSkip;
        case "MissionNew": return InGameSessionEventType.MissionNew;
        case "MissionStart": return InGameSessionEventType.MissionStart;
        case "MissionStop": return InGameSessionEventType.MissionStop;
        case "MissionResult": return InGameSessionEventType.MissionResult;
        case "MissionRank": return InGameSessionEventType.MissionRank;
        case "MissionQuit": return InGameSessionEventType.MissionQuit;
        case "MissionFail": return InGameSessionEventType.MissionFail;
        case "MissionSkip": return InGameSessionEventType.MissionSkip;
        case "QuestNew": return InGameSessionEventType.QuestNew;
        case "QuestStart": return InGameSessionEventType.QuestStart;
        case "QuestStop": return InGameSessionEventType.QuestStop;
        case "QuestResult": return InGameSessionEventType.QuestResult;
        case "QuestRank": return InGameSessionEventType.QuestRank;
        case "QuestQuit": return InGameSessionEventType.QuestQuit;
        case "QuestFail": return InGameSessionEventType.QuestFail;
        case "QuestSkip": return InGameSessionEventType.QuestSkip;
        case "LevelNew": return InGameSessionEventType.LevelNew;
        case "LevelStart": return InGameSessionEventType.LevelStart;
        case "LevelStop": return InGameSessionEventType.LevelStop;
        case "LevelResult": return InGameSessionEventType.LevelResult;
        case "LevelRank": return InGameSessionEventType.LevelRank;
        case "LevelQuit": return InGameSessionEventType.LevelQuit;
        case "LevelFail": return InGameSessionEventType.LevelFail;
        case "LevelSkip": return InGameSessionEventType.LevelSkip;
        case "SeasonNew": return InGameSessionEventType.SeasonNew;
        case "SeasonStart": return InGameSessionEventType.SeasonStart;
        case "SeasonStop": return InGameSessionEventType.SeasonStop;
        case "SeasonResult": return InGameSessionEventType.SeasonResult;
        case "SeasonRank": return InGameSessionEventType.SeasonRank;
        case "SeasonQuit": return InGameSessionEventType.SeasonQuit;
        case "SeasonFail": return InGameSessionEventType.SeasonFail;
        case "SeasonSkip": return InGameSessionEventType.SeasonSkip;
        case "MatchmakingNew": return InGameSessionEventType.MatchmakingNew;
        case "MatchmakingStart": return InGameSessionEventType.MatchmakingStart;
        case "MatchmakingStop": return InGameSessionEventType.MatchmakingStop;
        case "MatchmakingResult": return InGameSessionEventType.MatchmakingResult;
        case "MatchmakingRank": return InGameSessionEventType.MatchmakingRank;
        case "MatchmakingQuit": return InGameSessionEventType.MatchmakingQuit;
        case "MatchmakingFail": return InGameSessionEventType.MatchmakingFail;
        case "MatchmakingSkip": return InGameSessionEventType.MatchmakingSkip;
      }
      return null;
    }
  }

}