namespace entities
{
  public enum ResourceTrackingEventType
  {
    ResourceSupply,
    ResourceGeneration
  }

  public static class ResourceTrackingEventTypeExtensions
  {
    public static dynamic GetValue(this ResourceTrackingEventType enumValue)
    {
      switch (enumValue)
      {
        case ResourceTrackingEventType.ResourceSupply: return "ResourceSupply";
        case ResourceTrackingEventType.ResourceGeneration: return "ResourceGeneration";
      }
      return null;
    }

    public static ResourceTrackingEventType? ToResourceTrackingEventType(dynamic value)
    {
      switch (value)
      {
        case "ResourceSupply": return ResourceTrackingEventType.ResourceSupply;
        case "ResourceGeneration": return ResourceTrackingEventType.ResourceGeneration;
      }
      return null;
    }
  }

}