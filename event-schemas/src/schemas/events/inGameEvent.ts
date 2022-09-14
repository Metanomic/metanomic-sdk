/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { InGameEventType } from "../types";

const { ...properties } = EventSchema.properties

export const InGameEvent: typeof EventSchema = {
  title: 'InGameEvent',
  type: JsonSchemaType.OBJECT,
  description: 'InGameEvent Log record. The InGameEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: InGameEventType,
    ...omit(properties, 'type')
  }
}
