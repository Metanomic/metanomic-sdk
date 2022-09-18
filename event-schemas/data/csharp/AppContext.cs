namespace entities
{
  using System.Collections.Generic;

  public class AppContext
  {
    private string name;
    private string version;
    private string build;
    private string reservedNamespace;
    private Dictionary<string, dynamic> additionalProperties;

    public string Name 
    {
      get { return name; }
      set { name = value; }
    }

    public string Version 
    {
      get { return version; }
      set { version = value; }
    }

    public string Build 
    {
      get { return build; }
      set { build = value; }
    }

    public string ReservedNamespace 
    {
      get { return reservedNamespace; }
      set { reservedNamespace = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}