namespace entities
{
  using System.Collections.Generic;

  public class MapContext
  {
    private string id;
    private string name;
    private double? level;
    private double? position;
    private Dictionary<string, dynamic> additionalProperties;

    public string Id 
    {
      get { return id; }
      set { id = value; }
    }

    public string Name 
    {
      get { return name; }
      set { name = value; }
    }

    public double? Level 
    {
      get { return level; }
      set { level = value; }
    }

    public double? Position 
    {
      get { return position; }
      set { position = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}