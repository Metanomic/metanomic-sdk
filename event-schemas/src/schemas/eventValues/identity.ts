/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { IDRef, StringRef, BoolTrueRef } from "../types";

export const Identity: JsonSchema = {
  title: 'Identity',
  type: JsonSchemaType.OBJECT,
  description: 'The identity Value Payload. All the values to keep track of the profile and user',
  required: ['profileId', 'anonymous'],
  properties: {
    userId: IDRef,
    profileId: IDRef,
    wallet: IDRef,
    anonymous: BoolTrueRef,
    username: StringRef,
    email: StringRef,
    plan: StringRef,
  }
}