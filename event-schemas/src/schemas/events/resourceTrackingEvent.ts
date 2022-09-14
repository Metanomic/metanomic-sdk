/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { ResourceTrackingEventType } from "../types";

const { ...properties } = EventSchema.properties

export const ResourceTrackingEvent: typeof EventSchema = {
  title: 'ResourceTrackingEvent',
  type: JsonSchemaType.OBJECT,
  description: 'ResourceTrackingEvent Log record. The ResourceTrackingEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: ResourceTrackingEventType,
    ...omit(properties, 'type')
  }
}
