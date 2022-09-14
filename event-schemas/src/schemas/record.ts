/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../json-schema';

import { EventSchema } from "./event";
import { IDRef, } from "./types";

export const RecordSchema: JsonSchema = {
  title: 'RecordSchema',
  description: 'PutRecords proxy Events payload data. The inbound list of events payload',
  type: JsonSchemaType.OBJECT,
  required: ['appId', 'events'],
  properties: {
    appId: IDRef,
    events: {
      title: 'events',
      type: JsonSchemaType.ARRAY,
      items: EventSchema
    }
  }
}

