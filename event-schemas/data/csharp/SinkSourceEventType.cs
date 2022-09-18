namespace entities
{
  public enum SinkSourceEventType
  {
    SinkFlow,
    SourceFlow
  }

  public static class SinkSourceEventTypeExtensions
  {
    public static dynamic GetValue(this SinkSourceEventType enumValue)
    {
      switch (enumValue)
      {
        case SinkSourceEventType.SinkFlow: return "SinkFlow";
        case SinkSourceEventType.SourceFlow: return "SourceFlow";
      }
      return null;
    }

    public static SinkSourceEventType? ToSinkSourceEventType(dynamic value)
    {
      switch (value)
      {
        case "SinkFlow": return SinkSourceEventType.SinkFlow;
        case "SourceFlow": return SinkSourceEventType.SourceFlow;
      }
      return null;
    }
  }

}