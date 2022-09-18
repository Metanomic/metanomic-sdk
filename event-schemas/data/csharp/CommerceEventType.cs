namespace entities
{
  public enum CommerceEventType
  {
    Checkout,
    Purchase,
    Payment,
    Order,
    Exchange,
    Subscription,
    RevenueRecord,
    Reward,
    Debit,
    Credit,
    SubscriptionCancel
  }

  public static class CommerceEventTypeExtensions
  {
    public static dynamic GetValue(this CommerceEventType enumValue)
    {
      switch (enumValue)
      {
        case CommerceEventType.Checkout: return "Checkout";
        case CommerceEventType.Purchase: return "Purchase";
        case CommerceEventType.Payment: return "Payment";
        case CommerceEventType.Order: return "Order";
        case CommerceEventType.Exchange: return "Exchange";
        case CommerceEventType.Subscription: return "Subscription";
        case CommerceEventType.RevenueRecord: return "RevenueRecord";
        case CommerceEventType.Reward: return "Reward";
        case CommerceEventType.Debit: return "Debit";
        case CommerceEventType.Credit: return "Credit";
        case CommerceEventType.SubscriptionCancel: return "SubscriptionCancel";
      }
      return null;
    }

    public static CommerceEventType? ToCommerceEventType(dynamic value)
    {
      switch (value)
      {
        case "Checkout": return CommerceEventType.Checkout;
        case "Purchase": return CommerceEventType.Purchase;
        case "Payment": return CommerceEventType.Payment;
        case "Order": return CommerceEventType.Order;
        case "Exchange": return CommerceEventType.Exchange;
        case "Subscription": return CommerceEventType.Subscription;
        case "RevenueRecord": return CommerceEventType.RevenueRecord;
        case "Reward": return CommerceEventType.Reward;
        case "Debit": return CommerceEventType.Debit;
        case "Credit": return CommerceEventType.Credit;
        case "SubscriptionCancel": return CommerceEventType.SubscriptionCancel;
      }
      return null;
    }
  }

}