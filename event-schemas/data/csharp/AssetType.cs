namespace entities
{
  public enum AssetType
  {
    Resource,
    Item,
    Craft,
    Input,
    Modifier,
    Profile,
    Character
  }

  public static class AssetTypeExtensions
  {
    public static dynamic GetValue(this AssetType enumValue)
    {
      switch (enumValue)
      {
        case AssetType.Resource: return "Resource";
        case AssetType.Item: return "Item";
        case AssetType.Craft: return "Craft";
        case AssetType.Input: return "Input";
        case AssetType.Modifier: return "Modifier";
        case AssetType.Profile: return "Profile";
        case AssetType.Character: return "Character";
      }
      return null;
    }

    public static AssetType? ToAssetType(dynamic value)
    {
      switch (value)
      {
        case "Resource": return AssetType.Resource;
        case "Item": return AssetType.Item;
        case "Craft": return AssetType.Craft;
        case "Input": return AssetType.Input;
        case "Modifier": return AssetType.Modifier;
        case "Profile": return AssetType.Profile;
        case "Character": return AssetType.Character;
      }
      return null;
    }
  }

}