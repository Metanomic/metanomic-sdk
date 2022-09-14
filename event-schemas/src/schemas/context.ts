/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType
} from '../json-schema';

import { IDRef, StringRef, NumberRef, BooleanRef } from "./types";

export const AppContext: JsonSchema = {
  title: 'AppContext',
  type: JsonSchemaType.OBJECT,
  description: 'The App Context. The App Specific Meta Context',
  properties: {
    name: StringRef,
    version: StringRef,
    build: StringRef,
    namespace: StringRef,
  }
}

export const SessionContext: JsonSchema = {
  title: 'SessionContext',
  type: JsonSchemaType.OBJECT,
  description: 'The Session Context. The Session Specific Meta Context that describes missions, challenges, levels and other session-based experiences',
  properties: {
    id: IDRef,
    name: StringRef,
    theme: StringRef,
    genre: StringRef,
    level: NumberRef,
    progress: NumberRef,
    difficulty: NumberRef,
  }
}

export const ProfileContext: JsonSchema = {
  title: 'ProfileContext',
  type: JsonSchemaType.OBJECT,
  description: 'The Profile Context. The Profile Specific Meta Context that describes the in-game avatar/profile',
  properties: {
    id: IDRef,
    name: StringRef,
    xp: NumberRef,
    champion: StringRef,
    skin: StringRef,
    isPremium: BooleanRef,

    class: StringRef,
    subclass: StringRef,
    race: StringRef,
    mastery: StringRef,

    groupId: StringRef,
    guildId: StringRef,
    teamId: StringRef,
    partyId: StringRef,
    factionId: StringRef,
    channelId: StringRef,
  }
}

export const MapContext: JsonSchema = {
  title: 'MapContext',
  type: JsonSchemaType.OBJECT,
  description: 'The Map Context. The Map Specific Meta Context that describes the in-game area and location',
  properties: {
    id: IDRef,
    name: StringRef,
    level: NumberRef,
    position: NumberRef,
  }
}

export const CampaignContext: JsonSchema = {
  title: 'CampaignContext',
  type: JsonSchemaType.OBJECT,
  description: 'The Campaign Context. The Campaign Specific Meta Context',
  properties: {
    name: StringRef,
    affiliate: StringRef,
    provider: StringRef,
    source: StringRef,
    medium: StringRef,
    term: StringRef,
    contentId: StringRef,
    contentType: StringRef,
    creativeUri: StringRef,
    marketingTactic: StringRef,
    group: StringRef,
    uri: StringRef,
    eCPM: NumberRef, // Expected Cost per Mille
    idfv: StringRef, // ID for vendor (3rd party)
  }
}

export const ExperimentContext: JsonSchema = {
  title: 'ExperimentContext',
  type: JsonSchemaType.OBJECT,
  description: 'The Experiment Context. The Experiment Specific Meta Context',
  properties: {
    id: IDRef,
    name: StringRef,
    group: StringRef,
    variation: StringRef,
    uri: StringRef,
  }
}

export const DeviceContext: JsonSchema = {
  title: 'DeviceContext',
  type: JsonSchemaType.OBJECT,
  description: 'The Device Context. The Device Specific Meta Context',
  properties: {
    installationId: IDRef,
    id: IDRef,
    fullScreen: BooleanRef,
    adTrackingEnabled: BooleanRef,
    manufacturer: StringRef,
    model: StringRef,
    name: StringRef,
    osName: StringRef,
    osType: StringRef,
    osVersion: StringRef,
    jailbroken: BooleanRef,
    token: StringRef,
    ip: StringRef,
    userAgent: StringRef,
    engine: StringRef,
    engineVersion: StringRef,
    client: StringRef,
    locale: StringRef,
    bluetooth: BooleanRef,
    carrier: StringRef,
    cellular: BooleanRef,
    wifi: BooleanRef,
    screen: {
      title: 'screen',
      type: JsonSchemaType.OBJECT,
      description: 'The Device Screen. The Device Specific Screen properties',
      properties: {
        width: NumberRef,
        height: NumberRef,
        density: NumberRef,
      }
    },
    location: {
      title: 'location',
      type: JsonSchemaType.OBJECT,
      description: 'The Device Location. The Device Location meta context',
      properties: {
        city: StringRef,
        country: StringRef,
        continent: StringRef,
        latitude: NumberRef,
        longitude: NumberRef,
        speed: NumberRef,
      }
    },
  }
}

export const SourceContext: JsonSchema = {
  title: 'SourceContext',
  type: JsonSchemaType.OBJECT,
  description: 'The Source Context. The Eventing Source Meta Context',
  properties: {
    worldId: IDRef,
    realmId: IDRef,
    serverId: IDRef,
    shardId: IDRef,
    method: StringRef,
    path: StringRef,
    referrer: StringRef,
    search: StringRef,
    title: StringRef,
    url: StringRef,
    environment: StringRef,
  }
}

export const EventSourceContextSchema: JsonSchema = {
  title: 'EventSourceContextSchema',
  type: JsonSchemaType.OBJECT,
  description: 'Event Source Context record. The Meta Context of the Source for the Eventing payload origins',
  properties: {
    app: AppContext,
    campaign: CampaignContext,
    device: DeviceContext,
    source: SourceContext,
    experiment: ExperimentContext,
    session: SessionContext,
    profile: ProfileContext,
    targetProfile: ProfileContext,
    map: MapContext,
  }
}

