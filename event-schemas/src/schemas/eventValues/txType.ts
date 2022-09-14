/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { BoolFalseRef } from "../types";

export const TxType: JsonSchema = {
  title: 'TxType',
  type: JsonSchemaType.OBJECT,
  description: 'The TransactionType. All the values to set what kind of transaction is it',
  properties: {
    isAchievementReward: BoolFalseRef,
    isRedeem: BoolFalseRef,
    isReward: BoolFalseRef,
    isAdReward: BoolFalseRef,
    isInappPurchase: BoolFalseRef,
    isRenewal: BoolFalseRef,
    isPurchase: BoolFalseRef,
    isFXTrade: BoolFalseRef,
    isSale: BoolFalseRef,
    isTrade: BoolFalseRef,
    isDrop: BoolFalseRef,
    isLoot: BoolFalseRef,
    isGained: BoolFalseRef,
    isContract: BoolFalseRef,
  }
}