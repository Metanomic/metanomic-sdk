/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef } from "../types";

export const Price: JsonSchema = {
  title: 'Price',
  type: JsonSchemaType.OBJECT,
  description: 'The price Value Payload. All the values for price-based asking, listing & biding interactions',
  properties: {
    amount: { type: JsonSchemaType.NUMBER, description: 'For either asking or bidding price' },
    currency: StringRef,
    currencyType: StringRef,
  }
}