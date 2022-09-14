/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef, NumberRef } from "../types";

export const Advertisement: JsonSchema = {
  title: 'Advertisement',
  type: JsonSchemaType.OBJECT,
  description: 'The Ad Value Payload. All the values for Ad interactions',
  properties: {
    publisher: StringRef,
    position: NumberRef,
    totalLength: NumberRef,
    quartile: NumberRef,
    placementId: StringRef,
    placementName: StringRef,
  }
}
