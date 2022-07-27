import { IDRef } from "./types";

export class Identity {
  userId: IDRef
  profileId: IDRef
  wallet: IDRef
  anonymous: boolean = true
  username: string
  email: string
  plan: string
}

export class Content {
  key: string
  title: string
  term: string
  count: number
  uri: string
  isIPFS: boolean = false
}

export class Prize {
  id: string
  name: string
  value: number
  level: number
  amount: number
  isUnique: boolean = false
  isItem: boolean = false
  isCurrency: boolean = false
}

export class Gear {
  level: number
  value: number
  class: string
  isUnique: boolean = false
}

export class TxType {
  isAchievementReward: boolean = false
  isRedeem: boolean = false
  isReward: boolean = false
  isAdReward: boolean = false
  isInappPurchase: boolean = false
  isRenewal: boolean = false
  isPurchase: boolean = false
  isFXTrade: boolean = false
  isSale: boolean = false
  isTrade: boolean = false
  isDrop: boolean = false
  isLoot: boolean = false
  isGained: boolean = false
  isContract: boolean = false
}

export class Transaction {
  id: string
  receipt: string
  receiptSignature: string
  transactorId: string
  transactorName: string
  transactorType: string
  receiverId: string
  receiverName: string
  receiverType: string
  network: string
  checkoutId: string
  orderId: string
  storeId: string
  storeSourceId: string
  renewalCount: number = 0
  feesTotal: number
  priceTotal: number
  discountTotal: number
  quantity: number
  amount: number
  currency: string
  paymentMethod: string
  paymentProvider: string

  virtualAmount: number
  virtualCurrency: string
  virtualCurrencyType: string

  blob: string
}

export class Price {
  amount: number
  currency: string
  currencyType: string
}

export class Social {
  recipient: string
  sender: string
  groupName: string
  via: string
  message: string
  rating: string
}

export class Mission {
  duration: number
  rank: number
  rankName: string
  score: number
  moves: number
  remaining: number
}

export class Advertisement {
  publisher: string
  position: number
  totalLength: number
  quartile: number
  placementId: string
  placementName: string
}


export class EventValue {
  identity: Identity
  content: Content
  linkedContent: Content
  prize: Prize
  gear: Gear
  txType: TxType
  transaction: Transaction
  price: Price
  social: Social
  mission: Mission
  ad: Advertisement

  customRef: string
  customValue: number
  customMeta: any
}

