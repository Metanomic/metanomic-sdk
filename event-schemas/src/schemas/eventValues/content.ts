/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef, NumberRef, BoolFalseRef } from "../types";

export const Content: JsonSchema = {
  title: 'Content',
  type: JsonSchemaType.OBJECT,
  description: 'The Content Value Payload. All the values for content-based interactions',
  properties: {
    key: StringRef,
    title: StringRef,
    term: StringRef,
    count: NumberRef,
    uri: StringRef,
    isIPFS: BoolFalseRef,
  }
}