import {
  AssetType, IDRef, VariableType, VariableVariationType
} from "./types";

export class AssetVariable {
  type: VariableType
  key: string
  value: number
  variations: [{
    type: VariableVariationType
    key: string
    value: number
  }]
}

export class Asset {
  assetId: IDRef
  typeList: [AssetType]
  inputs: [IDRef]
  outputs: [IDRef]
  classification: string // Type, eg is Weapon, is Potion
  categories: [string] // eg 1. Melee, 2. Sword
  variables: [AssetVariable]
}