import { IDRef } from "./types";

export class AppContext {
  name!: string;
  version!: string;
  build!: string;
  namespace!: string;
}

export class SessionContext {
  id!: IDRef;
  name!: string;
  theme!: string;
  genre!: string;
  level!: number;
  progress!: number;
  difficulty!: number;
}

export class ProfileContext {
  id!: IDRef;
  name!: string;
  xp!: number;
  champion!: string;
  skin!: string;
  isPremium!: boolean;

  class!: string;
  subclass!: string;
  race!: string;
  mastery!: string;

  groupId!: string;
  guildId!: string;
  teamId!: string;
  partyId!: string;
  factionId!: string;
  channelId!: string;
}

export class MapContext {
  id!: IDRef;
  name!: string;
  level!: number;
  position!: number;
}

export class CampaignContext {
  name!: string;
  affiliate!: string;
  provider!: string;
  source!: string;
  medium!: string;
  term!: string;
  contentId!: string;
  contentType!: string;
  creativeUri!: string;
  marketingTactic!: string;
  group!: string;
  uri!: string;
  eCPM!: number; // Expected Cost per Mille
  idfv!: string; // ID for vendor (3rd party)
}

export class ExperimentContext {
  id!: IDRef;
  name!: string;
  group!: string;
  variation!: string;
  uri!: string;
}

export class DeviceContext {
  installationId!: IDRef;
  id!: IDRef;
  fullScreen!: boolean;
  adTrackingEnabled!: boolean;
  manufacturer!: string;
  model!: string;
  name!: string;
  osName!: string;
  osType!: string;
  osVersion!: string;
  jailbroken!: boolean;
  token!: string;
  ip!: string;
  userAgent!: string;
  engine!: string;
  engineVersion!: string;
  client!: string;
  locale!: string;
  bluetooth!: boolean;
  carrier!: string;
  cellular!: boolean;
  wifi!: boolean;
  screen!: {
    width: number;
    height: number;
    density: number;
  };
  location!: {
    city: string;
    country: string;
    continent: string;
    latitude: number;
    longitude: number;
    speed: number;
  };
}

export class SourceContext {
  worldId!: IDRef;
  realmId!: IDRef;
  serverId!: IDRef;
  shardId!: IDRef;
  method!: string;
  path!: string;
  referrer!: string;
  search!: string;

  url!: string;
  environment!: string;
}

export class EventSourceContextSchema {
  app!: AppContext;
  campaign!: CampaignContext;
  device!: DeviceContext;
  source!: SourceContext;
  experiment!: ExperimentContext;
  session!: SessionContext;
  profile!: ProfileContext;
  targetProfile!: ProfileContext;
  map!: MapContext;
}

