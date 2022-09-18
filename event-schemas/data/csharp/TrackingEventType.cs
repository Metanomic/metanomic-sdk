namespace entities
{
  public enum TrackingEventType
  {
    Track,
    Action,
    Transaction,
    Spread,
    Traffic,
    Resource,
    Error
  }

  public static class TrackingEventTypeExtensions
  {
    public static dynamic GetValue(this TrackingEventType enumValue)
    {
      switch (enumValue)
      {
        case TrackingEventType.Track: return "Track";
        case TrackingEventType.Action: return "Action";
        case TrackingEventType.Transaction: return "Transaction";
        case TrackingEventType.Spread: return "Spread";
        case TrackingEventType.Traffic: return "Traffic";
        case TrackingEventType.Resource: return "Resource";
        case TrackingEventType.Error: return "Error";
      }
      return null;
    }

    public static TrackingEventType? ToTrackingEventType(dynamic value)
    {
      switch (value)
      {
        case "Track": return TrackingEventType.Track;
        case "Action": return TrackingEventType.Action;
        case "Transaction": return TrackingEventType.Transaction;
        case "Spread": return TrackingEventType.Spread;
        case "Traffic": return TrackingEventType.Traffic;
        case "Resource": return TrackingEventType.Resource;
        case "Error": return TrackingEventType.Error;
      }
      return null;
    }
  }

}