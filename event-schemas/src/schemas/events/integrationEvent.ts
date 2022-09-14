/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { IntegrationEventType } from "../types";

const { ...properties } = EventSchema.properties

export const IntegrationEvent: typeof EventSchema = {
  title: 'IntegrationEvent',
  type: JsonSchemaType.OBJECT,
  description: 'IntegrationEvent Log record. The IntegrationEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: IntegrationEventType,
    ...omit(properties, 'type')
  }
}
