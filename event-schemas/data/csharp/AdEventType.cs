namespace entities
{
  public enum AdEventType
  {
    AdStarted,
    AdOpened,
    AdPlaying,
    AdStoped,
    AdSkipped,
    Conversion,
    AdCompleted,
    AdStop,
    AdClosed,
    AdImpression,
    AdExposure,
    AdReward
  }

  public static class AdEventTypeExtensions
  {
    public static dynamic GetValue(this AdEventType enumValue)
    {
      switch (enumValue)
      {
        case AdEventType.AdStarted: return "AdStarted";
        case AdEventType.AdOpened: return "AdOpened";
        case AdEventType.AdPlaying: return "AdPlaying";
        case AdEventType.AdStoped: return "AdStoped";
        case AdEventType.AdSkipped: return "AdSkipped";
        case AdEventType.Conversion: return "Conversion";
        case AdEventType.AdCompleted: return "AdCompleted";
        case AdEventType.AdStop: return "AdStop";
        case AdEventType.AdClosed: return "AdClosed";
        case AdEventType.AdImpression: return "AdImpression";
        case AdEventType.AdExposure: return "AdExposure";
        case AdEventType.AdReward: return "AdReward";
      }
      return null;
    }

    public static AdEventType? ToAdEventType(dynamic value)
    {
      switch (value)
      {
        case "AdStarted": return AdEventType.AdStarted;
        case "AdOpened": return AdEventType.AdOpened;
        case "AdPlaying": return AdEventType.AdPlaying;
        case "AdStoped": return AdEventType.AdStoped;
        case "AdSkipped": return AdEventType.AdSkipped;
        case "Conversion": return AdEventType.Conversion;
        case "AdCompleted": return AdEventType.AdCompleted;
        case "AdStop": return AdEventType.AdStop;
        case "AdClosed": return AdEventType.AdClosed;
        case "AdImpression": return AdEventType.AdImpression;
        case "AdExposure": return AdEventType.AdExposure;
        case "AdReward": return AdEventType.AdReward;
      }
      return null;
    }
  }

}