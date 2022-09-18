namespace entities
{
  using System.Collections.Generic;

  public class Asset
  {
    private string assetId;
    private AssetType[] typeList;
    private string[] inputs;
    private string[] outputs;
    private string classification;
    private string[] categories;
    private AssetVariable[] variables;
    private Dictionary<string, dynamic> additionalProperties;

    public string AssetId 
    {
      get { return assetId; }
      set { assetId = value; }
    }

    public AssetType[] TypeList 
    {
      get { return typeList; }
      set { typeList = value; }
    }

    public string[] Inputs 
    {
      get { return inputs; }
      set { inputs = value; }
    }

    public string[] Outputs 
    {
      get { return outputs; }
      set { outputs = value; }
    }

    public string Classification 
    {
      get { return classification; }
      set { classification = value; }
    }

    public string[] Categories 
    {
      get { return categories; }
      set { categories = value; }
    }

    public AssetVariable[] Variables 
    {
      get { return variables; }
      set { variables = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}