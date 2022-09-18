namespace entities
{
  using System.Collections.Generic;

  public class MarketingEvent
  {
    private MarketingEventType type;
    private string version;
    private string eventId;
    private string appId;
    private string userId;
    private string installationId;
    private string playerId;
    private string sessionId;
    private bool? doTrack;
    private int? expiresAt;
    private int? receivedAt;
    private int? sentAt;
    private int? timestamp;
    private int? eventSinceAppstart;
    private EventSourceContextSchema sourceContext;
    private TheValuePayload value;
    private Asset[] linkedAssets;
    private Product[] linkedProduct;
    private Dictionary<string, dynamic> additionalProperties;

    public MarketingEventType Type 
    {
      get { return type; }
      set { type = value; }
    }

    public string Version 
    {
      get { return version; }
      set { version = value; }
    }

    public string EventId 
    {
      get { return eventId; }
      set { eventId = value; }
    }

    public string AppId 
    {
      get { return appId; }
      set { appId = value; }
    }

    public string UserId 
    {
      get { return userId; }
      set { userId = value; }
    }

    public string InstallationId 
    {
      get { return installationId; }
      set { installationId = value; }
    }

    public string PlayerId 
    {
      get { return playerId; }
      set { playerId = value; }
    }

    public string SessionId 
    {
      get { return sessionId; }
      set { sessionId = value; }
    }

    public bool? DoTrack 
    {
      get { return doTrack; }
      set { doTrack = value; }
    }

    public int? ExpiresAt 
    {
      get { return expiresAt; }
      set { expiresAt = value; }
    }

    public int? ReceivedAt 
    {
      get { return receivedAt; }
      set { receivedAt = value; }
    }

    public int? SentAt 
    {
      get { return sentAt; }
      set { sentAt = value; }
    }

    public int? Timestamp 
    {
      get { return timestamp; }
      set { timestamp = value; }
    }

    public int? EventSinceAppstart 
    {
      get { return eventSinceAppstart; }
      set { eventSinceAppstart = value; }
    }

    public EventSourceContextSchema SourceContext 
    {
      get { return sourceContext; }
      set { sourceContext = value; }
    }

    public TheValuePayload Value 
    {
      get { return value; }
      set { value = value; }
    }

    public Asset[] LinkedAssets 
    {
      get { return linkedAssets; }
      set { linkedAssets = value; }
    }

    public Product[] LinkedProduct 
    {
      get { return linkedProduct; }
      set { linkedProduct = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}