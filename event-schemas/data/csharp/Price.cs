namespace entities
{
  using System.Collections.Generic;

  public class Price
  {
    private double? amount;
    private string currency;
    private string currencyType;
    private Dictionary<string, dynamic> additionalProperties;

    public double? Amount 
    {
      get { return amount; }
      set { amount = value; }
    }

    public string Currency 
    {
      get { return currency; }
      set { currency = value; }
    }

    public string CurrencyType 
    {
      get { return currencyType; }
      set { currencyType = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}