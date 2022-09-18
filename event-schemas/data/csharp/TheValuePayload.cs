namespace entities
{
  using System.Collections.Generic;

  public class TheValuePayload
  {
    private Identity identity;
    private Content content;
    private Content linkedContent;
    private Prize prize;
    private Gear gear;
    private TxType txType;
    private Transaction transaction;
    private Price price;
    private Social social;
    private Mission mission;
    private Advertisement ad;
    private string customRef;
    private double? customValue;
    private AnonymousSchema_4398 customMeta;
    private Dictionary<string, dynamic> additionalProperties;

    public Identity Identity 
    {
      get { return identity; }
      set { identity = value; }
    }

    public Content Content 
    {
      get { return content; }
      set { content = value; }
    }

    public Content LinkedContent 
    {
      get { return linkedContent; }
      set { linkedContent = value; }
    }

    public Prize Prize 
    {
      get { return prize; }
      set { prize = value; }
    }

    public Gear Gear 
    {
      get { return gear; }
      set { gear = value; }
    }

    public TxType TxType 
    {
      get { return txType; }
      set { txType = value; }
    }

    public Transaction Transaction 
    {
      get { return transaction; }
      set { transaction = value; }
    }

    public Price Price 
    {
      get { return price; }
      set { price = value; }
    }

    public Social Social 
    {
      get { return social; }
      set { social = value; }
    }

    public Mission Mission 
    {
      get { return mission; }
      set { mission = value; }
    }

    public Advertisement Ad 
    {
      get { return ad; }
      set { ad = value; }
    }

    public string CustomRef 
    {
      get { return customRef; }
      set { customRef = value; }
    }

    public double? CustomValue 
    {
      get { return customValue; }
      set { customValue = value; }
    }

    public AnonymousSchema_4398 CustomMeta 
    {
      get { return customMeta; }
      set { customMeta = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}