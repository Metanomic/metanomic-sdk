/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef, NumberRef, BoolFalseRef } from "../types";

export const Prize: JsonSchema = {
  title: 'Prize',
  type: JsonSchemaType.OBJECT,
  description: 'The prize/rewards Value Payload. All the values for prize/rewards-based interactions',
  properties: {
    id: StringRef,
    name: StringRef,
    value: NumberRef,
    level: NumberRef,
    amount: NumberRef,
    isUnique: BoolFalseRef,
    isItem: BoolFalseRef,
    isCurrency: BoolFalseRef,
  }
}