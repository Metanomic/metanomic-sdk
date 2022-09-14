/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { IdentityEventType } from "../types";

const { ...properties } = EventSchema.properties

export const IdentityEvent: typeof EventSchema = {
  title: 'IdentityEvent',
  type: JsonSchemaType.OBJECT,
  description: 'IdentityEvent Log record. The IdentityEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: IdentityEventType,
    ...omit(properties, 'type')
  }
}
