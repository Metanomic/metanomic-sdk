namespace entities
{
  using System.Collections.Generic;

  public class ExperimentContext
  {
    private string id;
    private string name;
    private string group;
    private string variation;
    private string uri;
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

    public string Group 
    {
      get { return group; }
      set { group = value; }
    }

    public string Variation 
    {
      get { return variation; }
      set { variation = value; }
    }

    public string Uri 
    {
      get { return uri; }
      set { uri = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}