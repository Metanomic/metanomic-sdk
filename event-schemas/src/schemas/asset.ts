/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../json-schema';

import {
  AssetType, IDRef, VariableType, VariableVariationType,
  StringRef, NumberRef
} from "./types";

export const AssetVariable: JsonSchema = {
  title: 'AssetVariable',
  type: JsonSchemaType.OBJECT,
  description: 'The AssetVariable payload. The Asset Variable class describes the attribute of the Asset value',
  required: ['type', 'key', 'value'],
  properties: {
    type: VariableType,
    key: StringRef,
    value: NumberRef,
    variations: {
      title: 'variations',
      type: JsonSchemaType.ARRAY,
      description: 'The list of asset variations values',
      items: {
        title: 'assetVariation',
        type: JsonSchemaType.OBJECT,
        description: 'The Asset Variable Variation describes Whether this variable needs to be different based on a key condition',
        required: ['type', 'key', 'value'],
        properties: {
          type: VariableVariationType,
          key: StringRef,
          value: NumberRef,
        }
      }
    },
  }
}

export const Asset: JsonSchema = {
  title: 'Asset',
  type: JsonSchemaType.OBJECT,
  description: 'The Asset class describes the in-game item payload',
  required: ['assetId', 'typeList'],
  properties: {
    assetId: IDRef,
    typeList: {
      title: 'typeList',
      type: JsonSchemaType.ARRAY,
      description: 'The list of types that the asset is associated with',
      minimum: 1,
      uniqueItems: true,
      items: AssetType
    },
    inputs: {
      title: 'inputs',
      type: JsonSchemaType.ARRAY,
      description: 'The list of asset ids that this asset depends to, in order to be produced',
      items: IDRef
    },
    outputs: {
      title: 'outputs',
      type: JsonSchemaType.ARRAY,
      description: 'The list of asset ids that this asset can produce',
      items: IDRef
    },
    classification: {
      title: 'classification',
      type: JsonSchemaType.STRING,
      description: 'Type, eg is Weapon, is Potion'
    },
    categories: {
      title: 'categories',
      type: JsonSchemaType.ARRAY,
      description: 'eg 1. Melee, 2. Sword',
      items: StringRef
    },
    variables: {
      title: 'variables',
      type: JsonSchemaType.ARRAY,
      items: AssetVariable
    }
  }
}