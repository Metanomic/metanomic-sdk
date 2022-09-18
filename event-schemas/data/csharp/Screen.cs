namespace entities
{
  using System.Collections.Generic;

  public class Screen
  {
    private double? width;
    private double? height;
    private double? density;
    private Dictionary<string, dynamic> additionalProperties;

    public double? Width 
    {
      get { return width; }
      set { width = value; }
    }

    public double? Height 
    {
      get { return height; }
      set { height = value; }
    }

    public double? Density 
    {
      get { return density; }
      set { density = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}