import { entities } from '@metanomic/event-schemas'

export class RecordSchema {
  appId!: string;
  events!: entities.Event[];
}
