/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../json-schema';

import { Asset } from "./asset";
import { EventSourceContextSchema } from "./context";
import { EventValue } from "./eventValue";
import { Product } from "./product";
import { EventType, IDRef, VersionRef, BoolTrueRef } from "./types";

export const EventSchema: JsonSchema = {
  title: 'EventSchema',
  type: JsonSchemaType.OBJECT,
  description: 'Event Log record. The Eventing payload of the platform',
  required: ['type', 'value', 'appId'],
  properties: {
    type: EventType,
    version: VersionRef,
    eventId: IDRef,
    appId: IDRef,
    userId: IDRef,
    installationId: IDRef,
    playerId: IDRef,
    sessionId: IDRef,

    doTrack: BoolTrueRef,
    expiresAt: { type: JsonSchemaType.INTEGER },
    receivedAt: { type: JsonSchemaType.INTEGER },
    sentAt: { type: JsonSchemaType.INTEGER },
    timestamp: { type: JsonSchemaType.INTEGER },
    eventSinceAppstart: { type: JsonSchemaType.INTEGER, default: 0, description: 'event since app start, 0 if N/A' },

    sourceContext: EventSourceContextSchema,

    value: EventValue,

    linkedAssets: {
      title: 'linkedAssets',
      type: JsonSchemaType.ARRAY,
      description: 'Event Linked Assets. The list of linked assets that are associated with this event',
      items: Asset
    },

    linkedProduct: {
      title: 'linkedProduct',
      type: JsonSchemaType.ARRAY,
      description: 'Event Linked Product. The list of linked Product that are associated with this event',
      items: Product
    }
  }
}

