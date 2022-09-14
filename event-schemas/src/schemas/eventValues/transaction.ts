/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef, NumberRef } from "../types";

export const Transaction: JsonSchema = {
  title: 'Transaction',
  type: JsonSchemaType.OBJECT,
  description: 'The Transaction Payload. All the values for Transaction interactions',
  properties: {
    id: StringRef,
    receipt: StringRef,
    receiptSignature: StringRef,
    transactorId: StringRef,
    transactorName: StringRef,
    transactorType: StringRef,
    receiverId: StringRef,
    receiverName: StringRef,
    receiverType: StringRef,
    network: StringRef,
    checkoutId: StringRef,
    orderId: StringRef,
    storeId: StringRef,
    storeSourceId: StringRef,
    renewalCount: { type: JsonSchemaType.NUMBER, default: 0 },
    feesTotal: NumberRef,
    priceTotal: NumberRef,
    discountTotal: NumberRef,
    quantity: NumberRef,
    amount: NumberRef,
    currency: StringRef,
    paymentMethod: StringRef,
    paymentProvider: StringRef,

    virtualAmount: NumberRef,
    virtualCurrency: StringRef,
    virtualCurrencyType: StringRef,

    blob: StringRef,
  }
}