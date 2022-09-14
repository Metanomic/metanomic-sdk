/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../json-schema';

import { IDRef, StringRef, NumberRef } from "./types";

export const Product: JsonSchema = {
  title: 'Product',
  type: JsonSchemaType.OBJECT,
  description: 'The Product payload The Product class describes the linked product reference',
  required: ['productId',],
  properties: {
    productId: IDRef,
    sku: StringRef,
    category: StringRef,
    name: StringRef,
    brand: StringRef,
    variant: StringRef,
    quantity: NumberRef,
    price: NumberRef,
    currency: StringRef,
    imageUri: StringRef,
    uri: StringRef,
  }
}