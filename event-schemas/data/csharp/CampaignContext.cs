namespace entities
{
  using System.Collections.Generic;

  public class CampaignContext
  {
    private string name;
    private string affiliate;
    private string provider;
    private string source;
    private string medium;
    private string term;
    private string contentId;
    private string contentType;
    private string creativeUri;
    private string marketingTactic;
    private string group;
    private string uri;
    private double? eCpm;
    private string idfv;
    private Dictionary<string, dynamic> additionalProperties;

    public string Name 
    {
      get { return name; }
      set { name = value; }
    }

    public string Affiliate 
    {
      get { return affiliate; }
      set { affiliate = value; }
    }

    public string Provider 
    {
      get { return provider; }
      set { provider = value; }
    }

    public string Source 
    {
      get { return source; }
      set { source = value; }
    }

    public string Medium 
    {
      get { return medium; }
      set { medium = value; }
    }

    public string Term 
    {
      get { return term; }
      set { term = value; }
    }

    public string ContentId 
    {
      get { return contentId; }
      set { contentId = value; }
    }

    public string ContentType 
    {
      get { return contentType; }
      set { contentType = value; }
    }

    public string CreativeUri 
    {
      get { return creativeUri; }
      set { creativeUri = value; }
    }

    public string MarketingTactic 
    {
      get { return marketingTactic; }
      set { marketingTactic = value; }
    }

    public string Group 
    {
      get { return group; }
      set { group = value; }
    }

    public string Uri 
    {
      get { return uri; }
      set { uri = value; }
    }

    public double? ECpm 
    {
      get { return eCpm; }
      set { eCpm = value; }
    }

    public string Idfv 
    {
      get { return idfv; }
      set { idfv = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}