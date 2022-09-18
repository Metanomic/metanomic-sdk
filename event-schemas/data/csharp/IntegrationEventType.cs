namespace entities
{
  public enum IntegrationEventType
  {
    Connect,
    Deploy,
    Stream
  }

  public static class IntegrationEventTypeExtensions
  {
    public static dynamic GetValue(this IntegrationEventType enumValue)
    {
      switch (enumValue)
      {
        case IntegrationEventType.Connect: return "Connect";
        case IntegrationEventType.Deploy: return "Deploy";
        case IntegrationEventType.Stream: return "Stream";
      }
      return null;
    }

    public static IntegrationEventType? ToIntegrationEventType(dynamic value)
    {
      switch (value)
      {
        case "Connect": return IntegrationEventType.Connect;
        case "Deploy": return IntegrationEventType.Deploy;
        case "Stream": return IntegrationEventType.Stream;
      }
      return null;
    }
  }

}