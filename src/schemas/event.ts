/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType, JsonSchemaVersion
} from './json-schema';

import { Asset } from "./asset";
import { EventSourceContextSchema } from "./context";
import { EventValue } from "./eventValue";
import { Product } from "./product";
import { EventType, IDRef, VersionRef } from "./types";

export const EventSchema: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'Event Log record',
  type: JsonSchemaType.OBJECT,
  description: 'The Eventing payload of the platform',
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

    doTrack: { type: JsonSchemaType.BOOLEAN, default: true },
    expiresAt: { type: JsonSchemaType.INTEGER },
    receivedAt: { type: JsonSchemaType.INTEGER },
    sentAt: { type: JsonSchemaType.INTEGER },
    timestamp: { type: JsonSchemaType.INTEGER },
    eventSinceAppstart: { type: JsonSchemaType.INTEGER, default: 0, description: 'event since app start, 0 if N/A' },

    sourceContext: EventSourceContextSchema,

    value: EventValue,

    linkedAssets: {
      title: 'Event Linked Assets',
      type: JsonSchemaType.ARRAY,
      description: 'The list of linked assets that are associated with this event',
      items: Asset
    },

    linkedProduct: {
      title: 'Event Linked Product',
      type: JsonSchemaType.ARRAY,
      description: 'The list of linked Product that are associated with this event',
      items: Product
    }
  }
}

export const RecordSchema: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'PutRecords proxy Events payload data',
  description: 'The inbound list of events payload',
  type: JsonSchemaType.OBJECT,
  required: ['appId', 'events'],
  properties: {
    appId: IDRef,
    events: {
      type: JsonSchemaType.ARRAY,
      items: EventSchema
    }
  }
}

