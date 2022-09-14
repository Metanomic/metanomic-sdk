/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { InGameSessionEventType } from "../types";

const { ...properties } = EventSchema.properties

export const InGameSessionEvent: typeof EventSchema = {
  title: 'InGameSessionEvent',
  type: JsonSchemaType.OBJECT,
  description: 'InGameSessionEvent Log record. The InGameSessionEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: InGameSessionEventType,
    ...omit(properties, 'type')
  }
}
