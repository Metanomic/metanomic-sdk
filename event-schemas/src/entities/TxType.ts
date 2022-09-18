

class TxType {
  private _isAchievementReward?: boolean;
  private _isRedeem?: boolean;
  private _isReward?: boolean;
  private _isAdReward?: boolean;
  private _isInappPurchase?: boolean;
  private _isRenewal?: boolean;
  private _isPurchase?: boolean;
  private _isFxTrade?: boolean;
  private _isSale?: boolean;
  private _isTrade?: boolean;
  private _isDrop?: boolean;
  private _isLoot?: boolean;
  private _isGained?: boolean;
  private _isContract?: boolean;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    isAchievementReward?: boolean,
    isRedeem?: boolean,
    isReward?: boolean,
    isAdReward?: boolean,
    isInappPurchase?: boolean,
    isRenewal?: boolean,
    isPurchase?: boolean,
    isFxTrade?: boolean,
    isSale?: boolean,
    isTrade?: boolean,
    isDrop?: boolean,
    isLoot?: boolean,
    isGained?: boolean,
    isContract?: boolean,
  }) {
    this._isAchievementReward = input.isAchievementReward;
    this._isRedeem = input.isRedeem;
    this._isReward = input.isReward;
    this._isAdReward = input.isAdReward;
    this._isInappPurchase = input.isInappPurchase;
    this._isRenewal = input.isRenewal;
    this._isPurchase = input.isPurchase;
    this._isFxTrade = input.isFxTrade;
    this._isSale = input.isSale;
    this._isTrade = input.isTrade;
    this._isDrop = input.isDrop;
    this._isLoot = input.isLoot;
    this._isGained = input.isGained;
    this._isContract = input.isContract;
  }

  get isAchievementReward(): boolean | undefined { return this._isAchievementReward; }
  set isAchievementReward(isAchievementReward: boolean | undefined) { this._isAchievementReward = isAchievementReward; }

  get isRedeem(): boolean | undefined { return this._isRedeem; }
  set isRedeem(isRedeem: boolean | undefined) { this._isRedeem = isRedeem; }

  get isReward(): boolean | undefined { return this._isReward; }
  set isReward(isReward: boolean | undefined) { this._isReward = isReward; }

  get isAdReward(): boolean | undefined { return this._isAdReward; }
  set isAdReward(isAdReward: boolean | undefined) { this._isAdReward = isAdReward; }

  get isInappPurchase(): boolean | undefined { return this._isInappPurchase; }
  set isInappPurchase(isInappPurchase: boolean | undefined) { this._isInappPurchase = isInappPurchase; }

  get isRenewal(): boolean | undefined { return this._isRenewal; }
  set isRenewal(isRenewal: boolean | undefined) { this._isRenewal = isRenewal; }

  get isPurchase(): boolean | undefined { return this._isPurchase; }
  set isPurchase(isPurchase: boolean | undefined) { this._isPurchase = isPurchase; }

  get isFxTrade(): boolean | undefined { return this._isFxTrade; }
  set isFxTrade(isFxTrade: boolean | undefined) { this._isFxTrade = isFxTrade; }

  get isSale(): boolean | undefined { return this._isSale; }
  set isSale(isSale: boolean | undefined) { this._isSale = isSale; }

  get isTrade(): boolean | undefined { return this._isTrade; }
  set isTrade(isTrade: boolean | undefined) { this._isTrade = isTrade; }

  get isDrop(): boolean | undefined { return this._isDrop; }
  set isDrop(isDrop: boolean | undefined) { this._isDrop = isDrop; }

  get isLoot(): boolean | undefined { return this._isLoot; }
  set isLoot(isLoot: boolean | undefined) { this._isLoot = isLoot; }

  get isGained(): boolean | undefined { return this._isGained; }
  set isGained(isGained: boolean | undefined) { this._isGained = isGained; }

  get isContract(): boolean | undefined { return this._isContract; }
  set isContract(isContract: boolean | undefined) { this._isContract = isContract; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default TxType;
