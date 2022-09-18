namespace entities
{
  using System.Collections.Generic;

  public class Prize
  {
    private string id;
    private string name;
    private double? value;
    private double? level;
    private double? amount;
    private bool? isUnique;
    private bool? isItem;
    private bool? isCurrency;
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

    public double? Value 
    {
      get { return value; }
      set { value = value; }
    }

    public double? Level 
    {
      get { return level; }
      set { level = value; }
    }

    public double? Amount 
    {
      get { return amount; }
      set { amount = value; }
    }

    public bool? IsUnique 
    {
      get { return isUnique; }
      set { isUnique = value; }
    }

    public bool? IsItem 
    {
      get { return isItem; }
      set { isItem = value; }
    }

    public bool? IsCurrency 
    {
      get { return isCurrency; }
      set { isCurrency = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}