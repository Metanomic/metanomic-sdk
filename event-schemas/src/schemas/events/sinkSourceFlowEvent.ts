/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { SinkSourceEventType } from "../types";

const { ...properties } = EventSchema.properties

export const SinkSourceFlowEvent: typeof EventSchema = {
  title: 'SinkSourceFlowEvent',
  type: JsonSchemaType.OBJECT,
  description: 'SinkSourceFlowEvent Log record. The SinkSourceFlowEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: SinkSourceEventType,
    ...omit(properties, 'type')
  }
}
