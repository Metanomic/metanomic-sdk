import {
  JsonSchema, JsonSchemaType
} from '../json-schema';

export const IDRef: JsonSchema = {
  type: JsonSchemaType.STRING,
  description: 'The ID (UUID) reference type, The type that is used to refer to an id of another instance in the system'
}

export const StringRef: JsonSchema = {
  type: JsonSchemaType.STRING,
}

export const NumberRef: JsonSchema = {
  type: JsonSchemaType.NUMBER,
}

export const BooleanRef: JsonSchema = {
  type: JsonSchemaType.BOOLEAN,
}

export const BoolTrueRef: JsonSchema = {
  type: JsonSchemaType.BOOLEAN,
  default: true
}

export const BoolFalseRef: JsonSchema = {
  type: JsonSchemaType.BOOLEAN,
  default: true
}

export const VersionRef: JsonSchema = {
  type: JsonSchemaType.STRING,
  description: 'The Version reference type (Semver). The type that is used to refer to the eventing version',
  default: '$LATEST'
}

export const AdEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'AdEventType',
  description: 'Event TypeDescribes the body of the AdEventType',
  enum: [
    // Adnetwork specifics
    'AdStarted', 'AdOpened', 'AdPlaying', 'AdStoped', 'AdSkipped', 'Conversion',
    'AdCompleted', 'AdStop', 'AdClosed', 'AdImpression', 'AdExposure', 'AdReward',
  ],
  default: 'AdStarted'
}

export const AppLifecycleEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'AppLifecycleEventType',
  description: 'Event TypeDescribes the body of the AppLifecycleEventType',
  enum: [
    // App Lifecycle
    'AppOpenedEvent', 'AppStart', 'AppRunning', 'AppStop', 'AppUpdate', 'AppInstall',
    'GameStarted', 'GameEnded', 'GameRunning',
  ],
  default: 'AppOpenedEvent'
}

export const CommerceEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'CommerceEventType',
  description: 'Event TypeDescribes the body of the CommerceEventType',
  enum: [
    // Commerce and payments
    'Checkout', 'Purchase', 'Payment', 'Order', 'Exchange', 'Subscription', 'RevenueRecord',
    'Reward', 'Debit', 'Credit', 'SubscriptionCancel',
  ],
  default: 'Checkout'
}

export const GenericProgressEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'GenericProgressEventType',
  description: 'Event TypeDescribes the body of the GenericProgressEventType',
  enum: [
    // Generic Progress Tracking
    'ProgressionStart', 'ProgressionComplete', 'ProgressionFail',
  ],
  default: 'ProgressionStart'
}

export const IdentityEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'IdentityEventType',
  description: 'Event TypeDescribes the body of the IdentityEventType',
  enum: [
    // Identity & User specific
    'Identity', 'DeviceInfo', 'NewUser', 'NewPlayer', 'DDNADontTrack',
    'Login', 'Register', 'KYCPass', 'Validated', 'Alias',
  ],
  default: 'Identity'
}

export const InGameEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'InGameEventType',
  description: 'Event TypeDescribes the body of the InGameEventType',
  enum: [
    // in-Game Experience
    'Achievement', 'LevelUp', 'Experience', 'Win', 'Draw', 'Defeat', 'Kill', 'Killed', 'Drop', 'Loot',
    'HighScore', 'Build', 'Waging', 'Lock', 'Lose', 'Supply', 'Craft', 'Respawn', 'Spawn', 'Gathering',
    'Resistance', 'Gear', 'MapAreaVisit', 'MapAreaLeave', 'Summon', 'Cast', 'Evolved',
  ],
  default: 'Achievement'
}

export const InGameSessionEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'InGameSessionEventType',
  description: 'Event TypeDescribes the body of the InGameSessionEventType',
  enum: [
    // in-game Sessions (eg missions, quests, levels)
    'SessionNew', 'SessionStart', 'SessionStop', 'SessionResult', 'SessionRank', 'SessionQuit', 'SessionFail', 'SessionSkip',
    'MissionNew', 'MissionStart', 'MissionStop', 'MissionResult', 'MissionRank', 'MissionQuit', 'MissionFail', 'MissionSkip',
    'QuestNew', 'QuestStart', 'QuestStop', 'QuestResult', 'QuestRank', 'QuestQuit', 'QuestFail', 'QuestSkip',
    'LevelNew', 'LevelStart', 'LevelStop', 'LevelResult', 'LevelRank', 'LevelQuit', 'LevelFail', 'LevelSkip',
    'SeasonNew', 'SeasonStart', 'SeasonStop', 'SeasonResult', 'SeasonRank', 'SeasonQuit', 'SeasonFail', 'SeasonSkip',
    'MatchmakingNew', 'MatchmakingStart', 'MatchmakingStop', 'MatchmakingResult', 'MatchmakingRank', 'MatchmakingQuit', 'MatchmakingFail', 'MatchmakingSkip',
  ],
  default: 'SessionNew'
}

export const InGameSocialEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'InGameSocialEventType',
  description: 'Event TypeDescribes the body of the InGameSocialEventType',
  enum: [
    // In-Game Social & Groups
    'ConversationNew', 'ConversationJoin', 'ConversationLeave', 'ConversationMsgSent',
    'ChannelNew', 'ChannelJoin', 'ChannelLeave', 'ChannelMsgSent',
    'GuildNew', 'GuildJoin', 'GuildLeave', 'GuildMsgSent',
    'GroupNew', 'GroupJoin', 'GroupLeave', 'GroupMsgSent',
    'PartyNew', 'PartyJoin', 'PartyLeave', 'PartyMsgSent',
  ],
  default: 'ConversationNew'
}

export const InGameStoreEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'InGameStoreEventType',
  description: 'Event TypeDescribes the body of the InGameStoreEventType',
  enum: [
    // in-game store experience
    'StoreOpened', 'StoreItemClick', 'ItemAcquired', 'ItemSpent',
    'ChampionAcquired', 'SkinAcquired', 'VariationAcquired',
  ],
  default: 'StoreOpened'
}

export const IntegrationEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'IntegrationEventType',
  description: 'Event TypeDescribes the body of the IntegrationEventType',
  enum: [
    // 3rd party interactions
    'Connect', 'Deploy', 'Stream',
  ],
  default: 'Connect'
}

export const MarketingEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'MarketingEventType',
  description: 'Event TypeDescribes the body of the MarketingEventType',
  enum: [
    // marketing & Ad campaigns
    'CampaignNew', 'CampaignStart', 'CampaignStop', 'CampaignResult', 'CampaignBounced',
  ],
  default: 'CampaignNew'
}

export const ResourceTrackingEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'ResourceTrackingEventType',
  description: 'Event TypeDescribes the body of the ResourceTrackingEventType',
  enum: [
    // Resource tracking
    'ResourceSupply', 'ResourceGeneration',
  ],
  default: 'ResourceSupply'
}

export const SinkSourceEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'SinkSourceEventType',
  description: 'Event TypeDescribes the body of the SinkSourceEventType',
  enum: [
    // Sink/Source flow of currency
    'SinkFlow', 'SourceFlow',
  ],
  default: 'SinkFlow'
}

export const SocialTrackingEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'SocialTrackingEventType',
  description: 'Event TypeDescribes the body of the SocialTrackingEventType',
  enum: [
    // Social & in-app Tracking Events
    'Search', 'Bookmarked', 'Reviewed', 'Listing', 'Bid', 'Fulfillment', 'Engagement',
    'Access', 'Click', 'View', 'Acquire', 'Download', 'Grant', 'Retrack', 'Mint', 'Burn',
    'Play', 'Pause', 'Skip', 'Resume', 'VolumeUp', 'VolumeDown', 'SkipFwd', 'SkipBwd',
    'Follow', 'Unfollow', 'Block', 'Reply', 'Create', 'Like', 'Spectate', 'Share', 'Scroll',
    'MessageSent', 'MessageEngagement',
  ],
  default: 'Search'
}

export const TrackingEventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'TrackingEventType',
  description: 'Event TypeDescribes the body of the TrackingEventType',
  enum: [
    // Generic tracking Events for custom metrics
    'Track', 'Action', 'Transaction', 'Spread', 'Traffic', 'Resource', 'Error',
  ],
  default: 'Track'
}

export const EventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'EventType',
  description: 'Event TypeDescribes the body of the value',
  enum: [
    ...AdEventType.enum!,
    ...AppLifecycleEventType.enum!,
    ...CommerceEventType.enum!,
    ...GenericProgressEventType.enum!,
    ...IdentityEventType.enum!,
    ...InGameEventType.enum!,
    ...InGameSessionEventType.enum!,
    ...InGameSocialEventType.enum!,
    ...InGameStoreEventType.enum!,
    ...IntegrationEventType.enum!,
    ...MarketingEventType.enum!,
    ...ResourceTrackingEventType.enum!,
    ...SinkSourceEventType.enum!,
    ...SocialTrackingEventType.enum!,
    ...TrackingEventType.enum!,

    // For development
    'Debug', 'Custom',
  ],
  default: 'Custom'
}

export const AssetType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'AssetType',
  description: 'Asset Type Describes the type class of the asset',
  enum: [
    'Resource', // Atomic level of an input resource (eg Wooden Stick, herbs, or a coin)
    'Item', // eg a Sword; Unique, Rare or Supply Bounded
    'Craft', // eg a potion
    'Input', // Set of Resources, (Monsters/Entity??)
    'Modifier', // Player Stat, Stat that enriches craft
    'Profile', // a player Profile instance
    'Character', // a Profile character, eg warrior class
  ],
  default: 'Resource'
}

export const VariableType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'VariableType',
  description: 'Variable Type What kind of value the variable holds',
  enum: [
    'Probability',
    'Quantity',
    'Quality',
    'Rate',
    'Number',
    'Percentage',
    'Time',
  ],
  default: 'Number'
}

export const VariableVariationType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'VariableVariationType',
  description: 'Variable Variation Type Whether this is a variation variable',
  enum: [
    'Mapping',
    'Leveling',
    'Class',
    'Time',
    'Default',
  ],
  default: 'Default'
}