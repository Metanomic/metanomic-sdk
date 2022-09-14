/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { SocialTrackingEventType } from "../types";

const { ...properties } = EventSchema.properties

export const SocialTrackingEvent: typeof EventSchema = {
  title: 'SocialTrackingEvent',
  type: JsonSchemaType.OBJECT,
  description: 'SocialTrackingEvent Log record. The SocialTrackingEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: SocialTrackingEventType,
    ...omit(properties, 'type')
  }
}
