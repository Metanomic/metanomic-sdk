/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { AppLifecycleEventType } from "../types";

const { ...properties } = EventSchema.properties

export const AppLifecycleEvent: typeof EventSchema = {
  title: 'AppLifecycleEvent',
  type: JsonSchemaType.OBJECT,
  description: 'AppLifecycleEvent Log record. The AppLifecycleEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: AppLifecycleEventType,
    ...omit(properties, 'type')
  }
}
