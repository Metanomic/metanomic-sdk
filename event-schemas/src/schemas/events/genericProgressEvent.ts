/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { GenericProgressEventType } from "../types";

const { ...properties } = EventSchema.properties

export const GenericProgressEvent: typeof EventSchema = {
  title: 'GenericProgressEvent',
  type: JsonSchemaType.OBJECT,
  description: 'GenericProgressEvent Log record. The GenericProgressEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: GenericProgressEventType,
    ...omit(properties, 'type')
  }
}
