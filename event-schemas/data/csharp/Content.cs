namespace entities
{
  using System.Collections.Generic;

  public class Content
  {
    private string key;
    private string title;
    private string term;
    private double? count;
    private string uri;
    private bool? isIpfs;
    private Dictionary<string, dynamic> additionalProperties;

    public string Key 
    {
      get { return key; }
      set { key = value; }
    }

    public string Title 
    {
      get { return title; }
      set { title = value; }
    }

    public string Term 
    {
      get { return term; }
      set { term = value; }
    }

    public double? Count 
    {
      get { return count; }
      set { count = value; }
    }

    public string Uri 
    {
      get { return uri; }
      set { uri = value; }
    }

    public bool? IsIpfs 
    {
      get { return isIpfs; }
      set { isIpfs = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}