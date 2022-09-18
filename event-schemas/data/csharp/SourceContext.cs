namespace entities
{
  using System.Collections.Generic;

  public class SourceContext
  {
    private string worldId;
    private string realmId;
    private string serverId;
    private string shardId;
    private string method;
    private string path;
    private string referrer;
    private string search;
    private string title;
    private string url;
    private string environment;
    private Dictionary<string, dynamic> additionalProperties;

    public string WorldId 
    {
      get { return worldId; }
      set { worldId = value; }
    }

    public string RealmId 
    {
      get { return realmId; }
      set { realmId = value; }
    }

    public string ServerId 
    {
      get { return serverId; }
      set { serverId = value; }
    }

    public string ShardId 
    {
      get { return shardId; }
      set { shardId = value; }
    }

    public string Method 
    {
      get { return method; }
      set { method = value; }
    }

    public string Path 
    {
      get { return path; }
      set { path = value; }
    }

    public string Referrer 
    {
      get { return referrer; }
      set { referrer = value; }
    }

    public string Search 
    {
      get { return search; }
      set { search = value; }
    }

    public string Title 
    {
      get { return title; }
      set { title = value; }
    }

    public string Url 
    {
      get { return url; }
      set { url = value; }
    }

    public string Environment 
    {
      get { return environment; }
      set { environment = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}