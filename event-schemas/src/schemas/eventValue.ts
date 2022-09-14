/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../json-schema';

import { StringRef, NumberRef } from "./types";
import {
  Identity, Content, Prize, Gear,
  TxType, Transaction, Price, Social,
  Mission, Advertisement
} from './eventValues'


export const EventValue: JsonSchema = {
  title: 'The Value payload',
  type: JsonSchemaType.OBJECT,
  description: 'The Value Event class',
  properties: {
    identity: Identity,
    content: Content,
    linkedContent: Content,
    prize: Prize,
    gear: Gear,
    txType: TxType,
    transaction: Transaction,
    price: Price,
    social: Social,
    mission: Mission,
    ad: Advertisement,

    customRef: StringRef,
    customValue: NumberRef,
    customMeta: { type: JsonSchemaType.OBJECT },
  }
}
