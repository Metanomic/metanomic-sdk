namespace entities
{
  public enum VariableVariationType
  {
    Mapping,
    Leveling,
    Class,
    Time,
    Default
  }

  public static class VariableVariationTypeExtensions
  {
    public static dynamic GetValue(this VariableVariationType enumValue)
    {
      switch (enumValue)
      {
        case VariableVariationType.Mapping: return "Mapping";
        case VariableVariationType.Leveling: return "Leveling";
        case VariableVariationType.Class: return "Class";
        case VariableVariationType.Time: return "Time";
        case VariableVariationType.Default: return "Default";
      }
      return null;
    }

    public static VariableVariationType? ToVariableVariationType(dynamic value)
    {
      switch (value)
      {
        case "Mapping": return VariableVariationType.Mapping;
        case "Leveling": return VariableVariationType.Leveling;
        case "Class": return VariableVariationType.Class;
        case "Time": return VariableVariationType.Time;
        case "Default": return VariableVariationType.Default;
      }
      return null;
    }
  }

}