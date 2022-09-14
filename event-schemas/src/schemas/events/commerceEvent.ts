/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { CommerceEventType } from "../types";

const { ...properties } = EventSchema.properties

export const CommerceEvent: typeof EventSchema = {
  title: 'CommerceEvent',
  type: JsonSchemaType.OBJECT,
  description: 'CommerceEvent Log record. The CommerceEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: CommerceEventType,
    ...omit(properties, 'type')
  }
}
