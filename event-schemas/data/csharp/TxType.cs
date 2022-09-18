namespace entities
{
  using System.Collections.Generic;

  public class TxType
  {
    private bool? isAchievementReward;
    private bool? isRedeem;
    private bool? isReward;
    private bool? isAdReward;
    private bool? isInappPurchase;
    private bool? isRenewal;
    private bool? isPurchase;
    private bool? isFxTrade;
    private bool? isSale;
    private bool? isTrade;
    private bool? isDrop;
    private bool? isLoot;
    private bool? isGained;
    private bool? isContract;
    private Dictionary<string, dynamic> additionalProperties;

    public bool? IsAchievementReward 
    {
      get { return isAchievementReward; }
      set { isAchievementReward = value; }
    }

    public bool? IsRedeem 
    {
      get { return isRedeem; }
      set { isRedeem = value; }
    }

    public bool? IsReward 
    {
      get { return isReward; }
      set { isReward = value; }
    }

    public bool? IsAdReward 
    {
      get { return isAdReward; }
      set { isAdReward = value; }
    }

    public bool? IsInappPurchase 
    {
      get { return isInappPurchase; }
      set { isInappPurchase = value; }
    }

    public bool? IsRenewal 
    {
      get { return isRenewal; }
      set { isRenewal = value; }
    }

    public bool? IsPurchase 
    {
      get { return isPurchase; }
      set { isPurchase = value; }
    }

    public bool? IsFxTrade 
    {
      get { return isFxTrade; }
      set { isFxTrade = value; }
    }

    public bool? IsSale 
    {
      get { return isSale; }
      set { isSale = value; }
    }

    public bool? IsTrade 
    {
      get { return isTrade; }
      set { isTrade = value; }
    }

    public bool? IsDrop 
    {
      get { return isDrop; }
      set { isDrop = value; }
    }

    public bool? IsLoot 
    {
      get { return isLoot; }
      set { isLoot = value; }
    }

    public bool? IsGained 
    {
      get { return isGained; }
      set { isGained = value; }
    }

    public bool? IsContract 
    {
      get { return isContract; }
      set { isContract = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}