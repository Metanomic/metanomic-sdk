namespace entities
{
  public enum AppLifecycleEventType
  {
    AppOpenedEvent,
    AppStart,
    AppRunning,
    AppStop,
    AppUpdate,
    AppInstall,
    GameStarted,
    GameEnded,
    GameRunning
  }

  public static class AppLifecycleEventTypeExtensions
  {
    public static dynamic GetValue(this AppLifecycleEventType enumValue)
    {
      switch (enumValue)
      {
        case AppLifecycleEventType.AppOpenedEvent: return "AppOpenedEvent";
        case AppLifecycleEventType.AppStart: return "AppStart";
        case AppLifecycleEventType.AppRunning: return "AppRunning";
        case AppLifecycleEventType.AppStop: return "AppStop";
        case AppLifecycleEventType.AppUpdate: return "AppUpdate";
        case AppLifecycleEventType.AppInstall: return "AppInstall";
        case AppLifecycleEventType.GameStarted: return "GameStarted";
        case AppLifecycleEventType.GameEnded: return "GameEnded";
        case AppLifecycleEventType.GameRunning: return "GameRunning";
      }
      return null;
    }

    public static AppLifecycleEventType? ToAppLifecycleEventType(dynamic value)
    {
      switch (value)
      {
        case "AppOpenedEvent": return AppLifecycleEventType.AppOpenedEvent;
        case "AppStart": return AppLifecycleEventType.AppStart;
        case "AppRunning": return AppLifecycleEventType.AppRunning;
        case "AppStop": return AppLifecycleEventType.AppStop;
        case "AppUpdate": return AppLifecycleEventType.AppUpdate;
        case "AppInstall": return AppLifecycleEventType.AppInstall;
        case "GameStarted": return AppLifecycleEventType.GameStarted;
        case "GameEnded": return AppLifecycleEventType.GameEnded;
        case "GameRunning": return AppLifecycleEventType.GameRunning;
      }
      return null;
    }
  }

}