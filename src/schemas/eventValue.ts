/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType, JsonSchemaVersion
} from './json-schema';

import { IDRef } from "./types";

export const Identity: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The identity Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values to keep track of the profile and user',
  required: ['profileId', 'anonymous'],
  properties: {
    userId: IDRef,
    profileId: IDRef,
    wallet: IDRef,
    anonymous: { type: JsonSchemaType.BOOLEAN, default: true },
    username: { type: JsonSchemaType.STRING },
    email: { type: JsonSchemaType.STRING },
    plan: { type: JsonSchemaType.STRING },
  }
}
export const Content: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Content Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for content-based interactions',
  properties: {
    key: { type: JsonSchemaType.STRING },
    title: { type: JsonSchemaType.STRING },
    term: { type: JsonSchemaType.STRING },
    count: { type: JsonSchemaType.NUMBER },
    uri: { type: JsonSchemaType.STRING },
    isIPFS: { type: JsonSchemaType.BOOLEAN, default: false },
  }
}
export const Prize: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The prize/rewards Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for prize/rewards-based interactions',
  properties: {
    id: { type: JsonSchemaType.STRING },
    name: { type: JsonSchemaType.STRING },
    value: { type: JsonSchemaType.NUMBER },
    level: { type: JsonSchemaType.NUMBER },
    amount: { type: JsonSchemaType.NUMBER },
    isUnique: { type: JsonSchemaType.BOOLEAN, default: false },
    isItem: { type: JsonSchemaType.BOOLEAN, default: false },
    isCurrency: { type: JsonSchemaType.BOOLEAN, default: false },
  }
}
export const Gear: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The gear Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for gear-based acquisition interactions',
  properties: {
    level: { type: JsonSchemaType.NUMBER },
    value: { type: JsonSchemaType.NUMBER },
    class: { type: JsonSchemaType.STRING },
    isUnique: { type: JsonSchemaType.BOOLEAN, default: false },
  }
}
export const TxType: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The TransactionType',
  type: JsonSchemaType.OBJECT,
  description: 'All the values to set what kind of transaction is it',
  properties: {
    isAchievementReward: { type: JsonSchemaType.BOOLEAN, default: false },
    isRedeem: { type: JsonSchemaType.BOOLEAN, default: false },
    isReward: { type: JsonSchemaType.BOOLEAN, default: false },
    isAdReward: { type: JsonSchemaType.BOOLEAN, default: false },
    isInappPurchase: { type: JsonSchemaType.BOOLEAN, default: false },
    isRenewal: { type: JsonSchemaType.BOOLEAN, default: false },
    isPurchase: { type: JsonSchemaType.BOOLEAN, default: false },
    isFXTrade: { type: JsonSchemaType.BOOLEAN, default: false },
    isSale: { type: JsonSchemaType.BOOLEAN, default: false },
    isTrade: { type: JsonSchemaType.BOOLEAN, default: false },
    isDrop: { type: JsonSchemaType.BOOLEAN, default: false },
    isLoot: { type: JsonSchemaType.BOOLEAN, default: false },
    isGained: { type: JsonSchemaType.BOOLEAN, default: false },
    isContract: { type: JsonSchemaType.BOOLEAN, default: false },
  }
}
export const Transaction: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Transaction Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for Transaction interactions',
  properties: {
    id: { type: JsonSchemaType.STRING },
    receipt: { type: JsonSchemaType.STRING },
    receiptSignature: { type: JsonSchemaType.STRING },
    transactorId: { type: JsonSchemaType.STRING },
    transactorName: { type: JsonSchemaType.STRING },
    transactorType: { type: JsonSchemaType.STRING },
    receiverId: { type: JsonSchemaType.STRING },
    receiverName: { type: JsonSchemaType.STRING },
    receiverType: { type: JsonSchemaType.STRING },
    network: { type: JsonSchemaType.STRING },
    checkoutId: { type: JsonSchemaType.STRING },
    orderId: { type: JsonSchemaType.STRING },
    storeId: { type: JsonSchemaType.STRING },
    storeSourceId: { type: JsonSchemaType.STRING },
    renewalCount: { type: JsonSchemaType.NUMBER, default: 0 },
    feesTotal: { type: JsonSchemaType.NUMBER },
    priceTotal: { type: JsonSchemaType.NUMBER },
    discountTotal: { type: JsonSchemaType.NUMBER },
    quantity: { type: JsonSchemaType.NUMBER },
    amount: { type: JsonSchemaType.NUMBER },
    currency: { type: JsonSchemaType.STRING },
    paymentMethod: { type: JsonSchemaType.STRING },
    paymentProvider: { type: JsonSchemaType.STRING },

    virtualAmount: { type: JsonSchemaType.NUMBER },
    virtualCurrency: { type: JsonSchemaType.STRING },
    virtualCurrencyType: { type: JsonSchemaType.STRING },

    blob: { type: JsonSchemaType.STRING },
  }
}
export const Price: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The price Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for price-based asking, listing & biding interactions',
  properties: {
    amount: { type: JsonSchemaType.NUMBER, description: 'For either asking or bidding price' },
    currency: { type: JsonSchemaType.STRING },
    currencyType: { type: JsonSchemaType.STRING },
  }
}
export const Social: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The price Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for price-based asking, listing & biding interactions',
  properties: {
    recipient: { type: JsonSchemaType.STRING },
    sender: { type: JsonSchemaType.STRING },
    groupName: { type: JsonSchemaType.STRING },
    via: { type: JsonSchemaType.STRING },
    message: { type: JsonSchemaType.STRING },
    rating: { type: JsonSchemaType.STRING },
  }
}
export const Mission: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The mission Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for Mission/Quest/Level/Session/Matchmaking/Season interactions',
  properties: {
    duration: { type: JsonSchemaType.NUMBER },
    rank: { type: JsonSchemaType.NUMBER },
    rankName: { type: JsonSchemaType.STRING },
    score: { type: JsonSchemaType.NUMBER },
    moves: { type: JsonSchemaType.NUMBER },
    remaining: { type: JsonSchemaType.NUMBER },
  }
}
export const Advertisement: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Ad Value Payload',
  type: JsonSchemaType.OBJECT,
  description: 'All the values for Ad interactions',
  properties: {
    publisher: { type: JsonSchemaType.STRING },
    position: { type: JsonSchemaType.NUMBER },
    totalLength: { type: JsonSchemaType.NUMBER },
    quartile: { type: JsonSchemaType.NUMBER },
    placementId: { type: JsonSchemaType.STRING },
    placementName: { type: JsonSchemaType.STRING },
  }
}

export const EventValue: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Value payload',
  type: JsonSchemaType.OBJECT,
  description: 'The Value Event class',
  properties: {
    identity: Identity,
    content: Content,
    linkedContent: Content,
    prize: Prize,
    gear: Gear,
    txType: TxType,
    transaction: Transaction,
    price: Price,
    social: Social,
    mission: Mission,
    ad: Advertisement,

    customRef: { type: JsonSchemaType.STRING },
    customValue: { type: JsonSchemaType.NUMBER },
    customMeta: { type: JsonSchemaType.OBJECT },
  }
}
