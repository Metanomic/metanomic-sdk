import { Asset } from "./asset";
import { EventSourceContextSchema } from "./context";
import { EventValue } from "./eventValue";
import { Product } from "./product";
import { EventType, IDRef, VersionRef } from "./types";

export class EventSchema {
  type!: EventType;
  version!: VersionRef;
  eventId!: IDRef;
  appId!: IDRef;
  userId!: IDRef;
  installationId!: IDRef;
  playerId!: IDRef;
  sessionId!: IDRef;

  doTrack: boolean = true
  expiresAt!: number;
  receivedAt!: number;
  sentAt!: number;
  timestamp!: number;
  eventSinceAppstart: number = 0

  sourceContext!: EventSourceContextSchema;

  value!: EventValue;
  linkedAssets!: Asset[];
  linkedProduct!: Product[];
}

export class RecordSchema {
  appId!: IDRef;
  events!: EventSchema[];
}

