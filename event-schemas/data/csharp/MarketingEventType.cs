namespace entities
{
  public enum MarketingEventType
  {
    CampaignNew,
    CampaignStart,
    CampaignStop,
    CampaignResult,
    CampaignBounced
  }

  public static class MarketingEventTypeExtensions
  {
    public static dynamic GetValue(this MarketingEventType enumValue)
    {
      switch (enumValue)
      {
        case MarketingEventType.CampaignNew: return "CampaignNew";
        case MarketingEventType.CampaignStart: return "CampaignStart";
        case MarketingEventType.CampaignStop: return "CampaignStop";
        case MarketingEventType.CampaignResult: return "CampaignResult";
        case MarketingEventType.CampaignBounced: return "CampaignBounced";
      }
      return null;
    }

    public static MarketingEventType? ToMarketingEventType(dynamic value)
    {
      switch (value)
      {
        case "CampaignNew": return MarketingEventType.CampaignNew;
        case "CampaignStart": return MarketingEventType.CampaignStart;
        case "CampaignStop": return MarketingEventType.CampaignStop;
        case "CampaignResult": return MarketingEventType.CampaignResult;
        case "CampaignBounced": return MarketingEventType.CampaignBounced;
      }
      return null;
    }
  }

}