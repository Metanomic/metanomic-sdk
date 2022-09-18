namespace entities
{
  using System.Collections.Generic;

  public class AssetVariation
  {
    private VariableVariationType type;
    private string key;
    private double value;
    private Dictionary<string, dynamic> additionalProperties;

    public VariableVariationType Type 
    {
      get { return type; }
      set { type = value; }
    }

    public string Key 
    {
      get { return key; }
      set { key = value; }
    }

    public double Value 
    {
      get { return value; }
      set { value = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}