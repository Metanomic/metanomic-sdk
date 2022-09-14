/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType, JsonSchemaVersion
} from './json-schema';

import { IDRef } from "./types";

export const Product: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Product payload',
  type: JsonSchemaType.OBJECT,
  description: 'The Product class describes the linked product reference',
  required: ['productId',],
  properties: {
    productId: IDRef,
    sku: { type: JsonSchemaType.STRING, },
    category: { type: JsonSchemaType.STRING, },
    name: { type: JsonSchemaType.STRING, },
    brand: { type: JsonSchemaType.STRING, },
    variant: { type: JsonSchemaType.STRING, },
    quantity: { type: JsonSchemaType.NUMBER, },
    price: { type: JsonSchemaType.NUMBER, },
    currency: { type: JsonSchemaType.STRING, },
    imageUri: { type: JsonSchemaType.STRING, },
    uri: { type: JsonSchemaType.STRING, },
  }
}