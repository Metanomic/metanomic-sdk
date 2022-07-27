/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType, JsonSchemaVersion
} from './json-schema';

import {
  AssetType, IDRef, VariableType, VariableVariationType
} from "./types";

export const AssetVariable: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The AssetVariable payload',
  type: JsonSchemaType.OBJECT,
  description: 'The Asset Variable class describes the attribute of the Asset value',
  required: ['type', 'key', 'value'],
  properties: {
    type: VariableType,
    key: { type: JsonSchemaType.STRING, },
    value: { type: JsonSchemaType.NUMBER, },
    variations: {
      type: JsonSchemaType.ARRAY,
      items: {
        schema: JsonSchemaVersion.DRAFT4,
        title: 'The Variable Variation',
        type: JsonSchemaType.OBJECT,
        description: 'The Asset Variable Variation describes Whether this variable needs to be different based on a key condition',
        required: ['type', 'key', 'value'],
        properties: {
          type: VariableVariationType,
          key: { type: JsonSchemaType.STRING, },
          value: { type: JsonSchemaType.NUMBER, }
        }
      }
    },
  }
}

export const Asset: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Asset payload',
  type: JsonSchemaType.OBJECT,
  description: 'The Asset class describes the in-game item payload',
  required: ['assetId', 'typeList'],
  properties: {
    assetId: IDRef,
    typeList: {
      type: JsonSchemaType.ARRAY,
      minimum: 1,
      uniqueItems: true,
      items: AssetType
    },
    inputs: {
      type: JsonSchemaType.ARRAY,
      items: IDRef
    },
    outputs: {
      type: JsonSchemaType.ARRAY,
      items: IDRef
    },
    classification: { type: JsonSchemaType.STRING, }, // Type, eg is Weapon, is Potion
    categories: {
      type: JsonSchemaType.ARRAY,
      items: { type: JsonSchemaType.STRING, }
    }, // eg 1. Melee, 2. Sword
    variables: {
      type: JsonSchemaType.ARRAY,
      items: AssetVariable
    }
  }
}