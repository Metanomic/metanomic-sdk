/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { InGameStoreEventType } from "../types";

const { ...properties } = EventSchema.properties

export const InGameStoreEvent: typeof EventSchema = {
  title: 'InGameStoreEvent',
  type: JsonSchemaType.OBJECT,
  description: 'InGameStoreEvent Log record. The InGameStoreEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: InGameStoreEventType,
    ...omit(properties, 'type')
  }
}
