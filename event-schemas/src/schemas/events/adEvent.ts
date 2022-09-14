/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { AdEventType } from "../types";

const { ...properties } = EventSchema.properties

export const AdEvent: typeof EventSchema = {
  title: 'AdEvent',
  type: JsonSchemaType.OBJECT,
  description: 'AdEvent Log record. The AdEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: AdEventType,
    ...omit(properties, 'type')
  }
}
