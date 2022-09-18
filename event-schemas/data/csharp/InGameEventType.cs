namespace entities
{
  public enum InGameEventType
  {
    Achievement,
    LevelUp,
    Experience,
    Win,
    Draw,
    Defeat,
    Kill,
    Killed,
    Drop,
    Loot,
    HighScore,
    Build,
    Waging,
    Lock,
    Lose,
    Supply,
    Craft,
    Respawn,
    Spawn,
    Gathering,
    Resistance,
    Gear,
    MapAreaVisit,
    MapAreaLeave,
    Summon,
    Cast,
    Evolved
  }

  public static class InGameEventTypeExtensions
  {
    public static dynamic GetValue(this InGameEventType enumValue)
    {
      switch (enumValue)
      {
        case InGameEventType.Achievement: return "Achievement";
        case InGameEventType.LevelUp: return "LevelUp";
        case InGameEventType.Experience: return "Experience";
        case InGameEventType.Win: return "Win";
        case InGameEventType.Draw: return "Draw";
        case InGameEventType.Defeat: return "Defeat";
        case InGameEventType.Kill: return "Kill";
        case InGameEventType.Killed: return "Killed";
        case InGameEventType.Drop: return "Drop";
        case InGameEventType.Loot: return "Loot";
        case InGameEventType.HighScore: return "HighScore";
        case InGameEventType.Build: return "Build";
        case InGameEventType.Waging: return "Waging";
        case InGameEventType.Lock: return "Lock";
        case InGameEventType.Lose: return "Lose";
        case InGameEventType.Supply: return "Supply";
        case InGameEventType.Craft: return "Craft";
        case InGameEventType.Respawn: return "Respawn";
        case InGameEventType.Spawn: return "Spawn";
        case InGameEventType.Gathering: return "Gathering";
        case InGameEventType.Resistance: return "Resistance";
        case InGameEventType.Gear: return "Gear";
        case InGameEventType.MapAreaVisit: return "MapAreaVisit";
        case InGameEventType.MapAreaLeave: return "MapAreaLeave";
        case InGameEventType.Summon: return "Summon";
        case InGameEventType.Cast: return "Cast";
        case InGameEventType.Evolved: return "Evolved";
      }
      return null;
    }

    public static InGameEventType? ToInGameEventType(dynamic value)
    {
      switch (value)
      {
        case "Achievement": return InGameEventType.Achievement;
        case "LevelUp": return InGameEventType.LevelUp;
        case "Experience": return InGameEventType.Experience;
        case "Win": return InGameEventType.Win;
        case "Draw": return InGameEventType.Draw;
        case "Defeat": return InGameEventType.Defeat;
        case "Kill": return InGameEventType.Kill;
        case "Killed": return InGameEventType.Killed;
        case "Drop": return InGameEventType.Drop;
        case "Loot": return InGameEventType.Loot;
        case "HighScore": return InGameEventType.HighScore;
        case "Build": return InGameEventType.Build;
        case "Waging": return InGameEventType.Waging;
        case "Lock": return InGameEventType.Lock;
        case "Lose": return InGameEventType.Lose;
        case "Supply": return InGameEventType.Supply;
        case "Craft": return InGameEventType.Craft;
        case "Respawn": return InGameEventType.Respawn;
        case "Spawn": return InGameEventType.Spawn;
        case "Gathering": return InGameEventType.Gathering;
        case "Resistance": return InGameEventType.Resistance;
        case "Gear": return InGameEventType.Gear;
        case "MapAreaVisit": return InGameEventType.MapAreaVisit;
        case "MapAreaLeave": return InGameEventType.MapAreaLeave;
        case "Summon": return InGameEventType.Summon;
        case "Cast": return InGameEventType.Cast;
        case "Evolved": return InGameEventType.Evolved;
      }
      return null;
    }
  }

}