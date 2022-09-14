/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../../json-schema';

import { StringRef, NumberRef } from "../types";

export const Mission: JsonSchema = {
  title: 'Mission',
  type: JsonSchemaType.OBJECT,
  description: 'The mission Value Payload. All the values for Mission/Quest/Level/Session/Matchmaking/Season interactions',
  properties: {
    duration: NumberRef,
    rank: NumberRef,
    rankName: StringRef,
    score: NumberRef,
    moves: NumberRef,
    remaining: NumberRef,
  }
}