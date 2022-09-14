/* eslint-disable @typescript-eslint/no-unused-vars */
import { omit } from 'lodash'
import { JsonSchemaType } from '../../json-schema';

import { EventSchema } from "../event";
import { InGameSocialEventType } from "../types";

const { ...properties } = EventSchema.properties

export const InGameSocialEvent: typeof EventSchema = {
  title: 'InGameSocialEvent',
  type: JsonSchemaType.OBJECT,
  description: 'InGameSocialEvent Log record. The InGameSocialEvent payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: InGameSocialEventType,
    ...omit(properties, 'type')
  }
}
