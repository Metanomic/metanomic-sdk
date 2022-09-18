namespace entities
{
  using System.Collections.Generic;

  public class Location
  {
    private string city;
    private string country;
    private string continent;
    private double? latitude;
    private double? longitude;
    private double? speed;
    private Dictionary<string, dynamic> additionalProperties;

    public string City 
    {
      get { return city; }
      set { city = value; }
    }

    public string Country 
    {
      get { return country; }
      set { country = value; }
    }

    public string Continent 
    {
      get { return continent; }
      set { continent = value; }
    }

    public double? Latitude 
    {
      get { return latitude; }
      set { latitude = value; }
    }

    public double? Longitude 
    {
      get { return longitude; }
      set { longitude = value; }
    }

    public double? Speed 
    {
      get { return speed; }
      set { speed = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}