/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  JsonSchema, JsonSchemaType, JsonSchemaVersion
} from './json-schema';

import { IDRef } from "./types";

export const AppContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The App Context',
  type: JsonSchemaType.OBJECT,
  description: 'The App Specific Meta Context',
  properties: {
    name: { type: JsonSchemaType.STRING },
    version: { type: JsonSchemaType.STRING },
    build: { type: JsonSchemaType.STRING },
    namespace: { type: JsonSchemaType.STRING },
  }
}

export const SessionContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Session Context',
  type: JsonSchemaType.OBJECT,
  description: 'The Session Specific Meta Context that describes missions, challenges, levels and other session-based experiences',
  properties: {
    id: IDRef,
    name: { type: JsonSchemaType.STRING },
    theme: { type: JsonSchemaType.STRING },
    genre: { type: JsonSchemaType.STRING },
    level: { type: JsonSchemaType.NUMBER },
    progress: { type: JsonSchemaType.NUMBER },
    difficulty: { type: JsonSchemaType.NUMBER },
  }
}

export const ProfileContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Profile Context',
  type: JsonSchemaType.OBJECT,
  description: 'The Profile Specific Meta Context that describes the in-game avatar/profile',
  properties: {
    id: IDRef,
    name: { type: JsonSchemaType.STRING },
    xp: { type: JsonSchemaType.NUMBER },
    champion: { type: JsonSchemaType.STRING },
    skin: { type: JsonSchemaType.STRING },
    isPremium: { type: JsonSchemaType.BOOLEAN },

    class: { type: JsonSchemaType.STRING },
    subclass: { type: JsonSchemaType.STRING },
    race: { type: JsonSchemaType.STRING },
    mastery: { type: JsonSchemaType.STRING },

    groupId: { type: JsonSchemaType.STRING },
    guildId: { type: JsonSchemaType.STRING },
    teamId: { type: JsonSchemaType.STRING },
    partyId: { type: JsonSchemaType.STRING },
    factionId: { type: JsonSchemaType.STRING },
    channelId: { type: JsonSchemaType.STRING },
  }
}

export const MapContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Map Context',
  type: JsonSchemaType.OBJECT,
  description: 'The Map Specific Meta Context that describes the in-game area and location',
  properties: {
    id: IDRef,
    name: { type: JsonSchemaType.STRING },
    level: { type: JsonSchemaType.NUMBER },
    position: { type: JsonSchemaType.NUMBER },
  }
}

export const CampaignContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Campaign Context',
  type: JsonSchemaType.OBJECT,
  description: 'The Campaign Specific Meta Context',
  properties: {
    name: { type: JsonSchemaType.STRING },
    affiliate: { type: JsonSchemaType.STRING },
    provider: { type: JsonSchemaType.STRING },
    source: { type: JsonSchemaType.STRING },
    medium: { type: JsonSchemaType.STRING },
    term: { type: JsonSchemaType.STRING },
    contentId: { type: JsonSchemaType.STRING },
    contentType: { type: JsonSchemaType.STRING },
    creativeUri: { type: JsonSchemaType.STRING },
    marketingTactic: { type: JsonSchemaType.STRING },
    group: { type: JsonSchemaType.STRING },
    uri: { type: JsonSchemaType.STRING },
    eCPM: { type: JsonSchemaType.NUMBER }, // Expected Cost per Mille
    idfv: { type: JsonSchemaType.STRING }, // ID for vendor (3rd party)
  }
}

export const ExperimentContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Experiment Context',
  type: JsonSchemaType.OBJECT,
  description: 'The Experiment Specific Meta Context',
  properties: {
    id: IDRef,
    name: { type: JsonSchemaType.STRING },
    group: { type: JsonSchemaType.STRING },
    variation: { type: JsonSchemaType.STRING },
    uri: { type: JsonSchemaType.STRING },
  }
}

export const DeviceContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Device Context',
  type: JsonSchemaType.OBJECT,
  description: 'The Device Specific Meta Context',
  properties: {
    installationId: IDRef,
    id: IDRef,
    fullScreen: { type: JsonSchemaType.BOOLEAN },
    adTrackingEnabled: { type: JsonSchemaType.BOOLEAN },
    manufacturer: { type: JsonSchemaType.STRING },
    model: { type: JsonSchemaType.STRING },
    name: { type: JsonSchemaType.STRING },
    osName: { type: JsonSchemaType.STRING },
    osType: { type: JsonSchemaType.STRING },
    osVersion: { type: JsonSchemaType.STRING },
    jailbroken: { type: JsonSchemaType.BOOLEAN },
    token: { type: JsonSchemaType.STRING },
    ip: { type: JsonSchemaType.STRING },
    userAgent: { type: JsonSchemaType.STRING },
    engine: { type: JsonSchemaType.STRING },
    engineVersion: { type: JsonSchemaType.STRING },
    client: { type: JsonSchemaType.STRING },
    locale: { type: JsonSchemaType.STRING },
    bluetooth: { type: JsonSchemaType.BOOLEAN },
    carrier: { type: JsonSchemaType.STRING },
    cellular: { type: JsonSchemaType.BOOLEAN },
    wifi: { type: JsonSchemaType.BOOLEAN },
    screen: {
      schema: JsonSchemaVersion.DRAFT4,
      title: 'The Device Screen',
      type: JsonSchemaType.OBJECT,
      description: 'The Device Specific Screen properties',
      properties: {
        width: { type: JsonSchemaType.NUMBER },
        height: { type: JsonSchemaType.NUMBER },
        density: { type: JsonSchemaType.NUMBER },
      }
    },
    location: {
      schema: JsonSchemaVersion.DRAFT4,
      title: 'The Device Location',
      type: JsonSchemaType.OBJECT,
      description: 'The Device Location meta context',
      properties: {
        city: { type: JsonSchemaType.STRING },
        country: { type: JsonSchemaType.STRING },
        continent: { type: JsonSchemaType.STRING },
        latitude: { type: JsonSchemaType.NUMBER },
        longitude: { type: JsonSchemaType.NUMBER },
        speed: { type: JsonSchemaType.NUMBER },
      }
    },
  }
}

export const SourceContext: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'The Source Context',
  type: JsonSchemaType.OBJECT,
  description: 'The Eventing Source Meta Context',
  properties: {
    worldId: IDRef,
    realmId: IDRef,
    serverId: IDRef,
    shardId: IDRef,
    method: { type: JsonSchemaType.STRING },
    path: { type: JsonSchemaType.STRING },
    referrer: { type: JsonSchemaType.STRING },
    search: { type: JsonSchemaType.STRING },
    title: { type: JsonSchemaType.STRING },
    url: { type: JsonSchemaType.STRING },
    environment: { type: JsonSchemaType.STRING },
  }
}

export const EventSourceContextSchema: JsonSchema = {
  schema: JsonSchemaVersion.DRAFT4,
  title: 'Event Source Context record',
  type: JsonSchemaType.OBJECT,
  description: 'The Meta Context of the Source for the Eventing payload origins',
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

