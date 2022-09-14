/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { TrackingEventType } from "../types";

const { ...properties } = EventSchema.properties

export const TrackingEvent: typeof EventSchema = {
  title: 'TrackingEvent',
  type: JsonSchemaType.OBJECT,
  description: 'TrackingEvent Log record. The TrackingEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: TrackingEventType,
    ...omit(properties, 'type')
  }
}
