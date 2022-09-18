namespace entities
{
  using System.Collections.Generic;

  public class Advertisement
  {
    private string publisher;
    private double? position;
    private double? totalLength;
    private double? quartile;
    private string placementId;
    private string placementName;
    private Dictionary<string, dynamic> additionalProperties;

    public string Publisher 
    {
      get { return publisher; }
      set { publisher = value; }
    }

    public double? Position 
    {
      get { return position; }
      set { position = value; }
    }

    public double? TotalLength 
    {
      get { return totalLength; }
      set { totalLength = value; }
    }

    public double? Quartile 
    {
      get { return quartile; }
      set { quartile = value; }
    }

    public string PlacementId 
    {
      get { return placementId; }
      set { placementId = value; }
    }

    public string PlacementName 
    {
      get { return placementName; }
      set { placementName = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}