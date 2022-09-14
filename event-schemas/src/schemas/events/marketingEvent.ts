/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { MarketingEventType } from "../types";

const { ...properties } = EventSchema.properties

export const MarketingEvent: typeof EventSchema = {
  title: 'MarketingEvent',
  type: JsonSchemaType.OBJECT,
  description: 'MarketingEvent Log record. The MarketingEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: MarketingEventType,
    ...omit(properties, 'type')
  }
}
