namespace entities
{
  using System.Collections.Generic;

  public class Product
  {
    private string productId;
    private string sku;
    private string category;
    private string name;
    private string brand;
    private string variant;
    private double? quantity;
    private double? price;
    private string currency;
    private string imageUri;
    private string uri;
    private Dictionary<string, dynamic> additionalProperties;

    public string ProductId 
    {
      get { return productId; }
      set { productId = value; }
    }

    public string Sku 
    {
      get { return sku; }
      set { sku = value; }
    }

    public string Category 
    {
      get { return category; }
      set { category = value; }
    }

    public string Name 
    {
      get { return name; }
      set { name = value; }
    }

    public string Brand 
    {
      get { return brand; }
      set { brand = value; }
    }

    public string Variant 
    {
      get { return variant; }
      set { variant = value; }
    }

    public double? Quantity 
    {
      get { return quantity; }
      set { quantity = value; }
    }

    public double? Price 
    {
      get { return price; }
      set { price = value; }
    }

    public string Currency 
    {
      get { return currency; }
      set { currency = value; }
    }

    public string ImageUri 
    {
      get { return imageUri; }
      set { imageUri = value; }
    }

    public string Uri 
    {
      get { return uri; }
      set { uri = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}