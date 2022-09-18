namespace entities
{
  using System.Collections.Generic;

  public class AssetVariable
  {
    private VariableType type;
    private string key;
    private double value;
    private AssetVariation[] variations;
    private Dictionary<string, dynamic> additionalProperties;

    public VariableType Type 
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

    public AssetVariation[] Variations 
    {
      get { return variations; }
      set { variations = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}