namespace entities
{
  public enum GenericProgressEventType
  {
    ProgressionStart,
    ProgressionComplete,
    ProgressionFail
  }

  public static class GenericProgressEventTypeExtensions
  {
    public static dynamic GetValue(this GenericProgressEventType enumValue)
    {
      switch (enumValue)
      {
        case GenericProgressEventType.ProgressionStart: return "ProgressionStart";
        case GenericProgressEventType.ProgressionComplete: return "ProgressionComplete";
        case GenericProgressEventType.ProgressionFail: return "ProgressionFail";
      }
      return null;
    }

    public static GenericProgressEventType? ToGenericProgressEventType(dynamic value)
    {
      switch (value)
      {
        case "ProgressionStart": return GenericProgressEventType.ProgressionStart;
        case "ProgressionComplete": return GenericProgressEventType.ProgressionComplete;
        case "ProgressionFail": return GenericProgressEventType.ProgressionFail;
      }
      return null;
    }
  }

}