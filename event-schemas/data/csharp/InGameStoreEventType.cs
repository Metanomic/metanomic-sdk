namespace entities
{
  public enum InGameStoreEventType
  {
    StoreOpened,
    StoreItemClick,
    ItemAcquired,
    ItemSpent,
    ChampionAcquired,
    SkinAcquired,
    VariationAcquired
  }

  public static class InGameStoreEventTypeExtensions
  {
    public static dynamic GetValue(this InGameStoreEventType enumValue)
    {
      switch (enumValue)
      {
        case InGameStoreEventType.StoreOpened: return "StoreOpened";
        case InGameStoreEventType.StoreItemClick: return "StoreItemClick";
        case InGameStoreEventType.ItemAcquired: return "ItemAcquired";
        case InGameStoreEventType.ItemSpent: return "ItemSpent";
        case InGameStoreEventType.ChampionAcquired: return "ChampionAcquired";
        case InGameStoreEventType.SkinAcquired: return "SkinAcquired";
        case InGameStoreEventType.VariationAcquired: return "VariationAcquired";
      }
      return null;
    }

    public static InGameStoreEventType? ToInGameStoreEventType(dynamic value)
    {
      switch (value)
      {
        case "StoreOpened": return InGameStoreEventType.StoreOpened;
        case "StoreItemClick": return InGameStoreEventType.StoreItemClick;
        case "ItemAcquired": return InGameStoreEventType.ItemAcquired;
        case "ItemSpent": return InGameStoreEventType.ItemSpent;
        case "ChampionAcquired": return InGameStoreEventType.ChampionAcquired;
        case "SkinAcquired": return InGameStoreEventType.SkinAcquired;
        case "VariationAcquired": return InGameStoreEventType.VariationAcquired;
      }
      return null;
    }
  }

}