/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef } from "../types";

export const Social: JsonSchema = {
  title: 'Social',
  type: JsonSchemaType.OBJECT,
  description: 'The price Value Payload. All the values for price-based asking, listing & biding interactions',
  properties: {
    recipient: StringRef,
    sender: StringRef,
    groupName: StringRef,
    via: StringRef,
    message: StringRef,
    rating: StringRef,
  }
}