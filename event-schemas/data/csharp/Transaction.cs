namespace entities
{
  using System.Collections.Generic;

  public class Transaction
  {
    private string id;
    private string receipt;
    private string receiptSignature;
    private string transactorId;
    private string transactorName;
    private string transactorType;
    private string receiverId;
    private string receiverName;
    private string receiverType;
    private string network;
    private string checkoutId;
    private string orderId;
    private string storeId;
    private string storeSourceId;
    private double? renewalCount;
    private double? feesTotal;
    private double? priceTotal;
    private double? discountTotal;
    private double? quantity;
    private double? amount;
    private string currency;
    private string paymentMethod;
    private string paymentProvider;
    private double? virtualAmount;
    private string virtualCurrency;
    private string virtualCurrencyType;
    private string blob;
    private Dictionary<string, dynamic> additionalProperties;

    public string Id 
    {
      get { return id; }
      set { id = value; }
    }

    public string Receipt 
    {
      get { return receipt; }
      set { receipt = value; }
    }

    public string ReceiptSignature 
    {
      get { return receiptSignature; }
      set { receiptSignature = value; }
    }

    public string TransactorId 
    {
      get { return transactorId; }
      set { transactorId = value; }
    }

    public string TransactorName 
    {
      get { return transactorName; }
      set { transactorName = value; }
    }

    public string TransactorType 
    {
      get { return transactorType; }
      set { transactorType = value; }
    }

    public string ReceiverId 
    {
      get { return receiverId; }
      set { receiverId = value; }
    }

    public string ReceiverName 
    {
      get { return receiverName; }
      set { receiverName = value; }
    }

    public string ReceiverType 
    {
      get { return receiverType; }
      set { receiverType = value; }
    }

    public string Network 
    {
      get { return network; }
      set { network = value; }
    }

    public string CheckoutId 
    {
      get { return checkoutId; }
      set { checkoutId = value; }
    }

    public string OrderId 
    {
      get { return orderId; }
      set { orderId = value; }
    }

    public string StoreId 
    {
      get { return storeId; }
      set { storeId = value; }
    }

    public string StoreSourceId 
    {
      get { return storeSourceId; }
      set { storeSourceId = value; }
    }

    public double? RenewalCount 
    {
      get { return renewalCount; }
      set { renewalCount = value; }
    }

    public double? FeesTotal 
    {
      get { return feesTotal; }
      set { feesTotal = value; }
    }

    public double? PriceTotal 
    {
      get { return priceTotal; }
      set { priceTotal = value; }
    }

    public double? DiscountTotal 
    {
      get { return discountTotal; }
      set { discountTotal = value; }
    }

    public double? Quantity 
    {
      get { return quantity; }
      set { quantity = value; }
    }

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

    public string PaymentMethod 
    {
      get { return paymentMethod; }
      set { paymentMethod = value; }
    }

    public string PaymentProvider 
    {
      get { return paymentProvider; }
      set { paymentProvider = value; }
    }

    public double? VirtualAmount 
    {
      get { return virtualAmount; }
      set { virtualAmount = value; }
    }

    public string VirtualCurrency 
    {
      get { return virtualCurrency; }
      set { virtualCurrency = value; }
    }

    public string VirtualCurrencyType 
    {
      get { return virtualCurrencyType; }
      set { virtualCurrencyType = value; }
    }

    public string Blob 
    {
      get { return blob; }
      set { blob = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}