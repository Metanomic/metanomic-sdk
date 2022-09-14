/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef, NumberRef, BoolFalseRef } from "../types";

export const Gear: JsonSchema = {
  title: 'Gear',
  type: JsonSchemaType.OBJECT,
  description: 'The gear Value Payload. All the values for gear-based acquisition interactions',
  properties: {
    level: NumberRef,
    value: NumberRef,
    class: StringRef,
    isUnique: BoolFalseRef,
  }
}