namespace entities
{
  using System.Collections.Generic;

  public class Gear
  {
    private double? level;
    private double? value;
    private string reservedClass;
    private bool? isUnique;
    private Dictionary<string, dynamic> additionalProperties;

    public double? Level 
    {
      get { return level; }
      set { level = value; }
    }

    public double? Value 
    {
      get { return value; }
      set { value = value; }
    }

    public string ReservedClass 
    {
      get { return reservedClass; }
      set { reservedClass = value; }
    }

    public bool? IsUnique 
    {
      get { return isUnique; }
      set { isUnique = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}