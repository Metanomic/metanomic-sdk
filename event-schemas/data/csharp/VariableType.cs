namespace entities
{
  public enum VariableType
  {
    Probability,
    Quantity,
    Quality,
    Rate,
    Number,
    Percentage,
    Time
  }

  public static class VariableTypeExtensions
  {
    public static dynamic GetValue(this VariableType enumValue)
    {
      switch (enumValue)
      {
        case VariableType.Probability: return "Probability";
        case VariableType.Quantity: return "Quantity";
        case VariableType.Quality: return "Quality";
        case VariableType.Rate: return "Rate";
        case VariableType.Number: return "Number";
        case VariableType.Percentage: return "Percentage";
        case VariableType.Time: return "Time";
      }
      return null;
    }

    public static VariableType? ToVariableType(dynamic value)
    {
      switch (value)
      {
        case "Probability": return VariableType.Probability;
        case "Quantity": return VariableType.Quantity;
        case "Quality": return VariableType.Quality;
        case "Rate": return VariableType.Rate;
        case "Number": return VariableType.Number;
        case "Percentage": return VariableType.Percentage;
        case "Time": return VariableType.Time;
      }
      return null;
    }
  }

}