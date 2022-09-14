import {
  JsonSchema, JsonSchemaType
} from './json-schema';

export const IDRef: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'The ID (UUID) reference type',
  description: 'The type that is used to refer to an id of another instance in the system',
}

export const VersionRef: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'The Version reference type (Semver)',
  description: 'The type that is used to refer to the eventing version',
  default: '$LATEST'
}

export const EventType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'Event Type',
  description: 'Describes the body of the value',
  enum: [
    // Identity & User specific
    'Identity', 'DeviceInfo', 'NewUser', 'NewPlayer', 'DDNADontTrack',
    'Login', 'Register', 'KYCPass', 'Validated', 'Alias',

    // Generic tracking Events for custom metrics
    'Track', 'Action', 'Transaction', 'Spread', 'Traffic', 'Resource', 'Error',
    // Sink/Source flow of currency
    'SinkFlow', 'SourceFlow',
    // Generic Progress Tracking
    'ProgressionStart', 'ProgressionComplete', 'ProgressionFail',

    // Resource tracking
    'ResourceSupply', // 'ResourceGeneration',

    // Social & in-app Tracking Events
    'Search', 'Bookmarked', 'Reviewed', 'Listing', 'Bid', 'Fulfillment', 'Engagement',
    'Access', 'Click', 'View', 'Acquire', 'Download', 'Grant', 'Retrack', 'Mint', 'Burn',
    'Play', 'Pause', 'Skip', 'Resume', 'VolumeUp', 'VolumeDown', 'SkipFwd', 'SkipBwd',
    'Follow', 'Unfollow', 'Block', 'Reply', 'Create', 'Like', 'Spectate', 'Share', 'Scroll',
    'MessageSent', 'MessageEngagement',

    // Commerce and payments
    'Checkout', 'Purchase', 'Payment', 'Order', 'Exchange', 'Subscription', 'RevenueRecord',
    'Reward', 'Debit', 'Credit', 'SubscriptionCancel',

    // App Lifecycle
    'AppOpenedEvent', 'AppStart', 'AppRunning', 'AppStop', 'AppUpdate', 'AppInstall',
    'GameStarted', 'GameEnded', 'GameRunning',

    // Adnetwork specifics
    'AdStarted', 'AdOpened', 'AdPlaying', 'AdStoped', 'AdSkipped', 'Conversion',
    'AdCompleted', 'AdStop', 'AdClosed', 'AdImpression', 'AdExposure', 'AdReward',

    // marketing & Ad campaigns
    'CampaignNew', 'CampaignStart', 'CampaignStop', 'CampaignResult', 'CampaignBounced',

    // in-Game Experience
    'Achievement', 'LevelUp', 'Experience', 'Win', 'Draw', 'Defeat', 'Kill', 'Killed', 'Drop', 'Loot',
    'HighScore', 'Build', 'Waging', 'Lock', 'Lose', 'Supply', 'Craft', 'Respawn', 'Spawn', 'Gathering',
    'Resistance', 'Gear', 'MapAreaVisit', 'MapAreaLeave', 'Summon', 'Cast', 'Evolved',

    // in-game store experience
    'StoreOpened', 'StoreItemClick', 'ItemAcquired', 'ItemSpent',
    'ChampionAcquired', 'SkinAcquired', 'VariationAcquired',

    // in-game Sessions (eg missions, quests, levels)
    'SessionNew', 'SessionStart', 'SessionStop', 'SessionResult', 'SessionRank', 'SessionQuit', 'SessionFail', 'SessionSkip',
    'MissionNew', 'MissionStart', 'MissionStop', 'MissionResult', 'MissionRank', 'MissionQuit', 'MissionFail', 'MissionSkip',
    'QuestNew', 'QuestStart', 'QuestStop', 'QuestResult', 'QuestRank', 'QuestQuit', 'QuestFail', 'QuestSkip',
    'LevelNew', 'LevelStart', 'LevelStop', 'LevelResult', 'LevelRank', 'LevelQuit', 'LevelFail', 'LevelSkip',
    'SeasonNew', 'SeasonStart', 'SeasonStop', 'SeasonResult', 'SeasonRank', 'SeasonQuit', 'SeasonFail', 'SeasonSkip',
    'MatchmakingNew', 'MatchmakingStart', 'MatchmakingStop', 'MatchmakingResult', 'MatchmakingRank', 'MatchmakingQuit', 'MatchmakingFail', 'MatchmakingSkip',

    // In-Game Social & Groups
    'ConversationNew', 'ConversationJoin', 'ConversationLeave', 'ConversationMsgSent',
    'ChannelNew', 'ChannelJoin', 'ChannelLeave', 'ChannelMsgSent',
    'GuildNew', 'GuildJoin', 'GuildLeave', 'GuildMsgSent',
    'GroupNew', 'GroupJoin', 'GroupLeave', 'GroupMsgSent',
    'PartyNew', 'PartyJoin', 'PartyLeave', 'PartyMsgSent',

    // 3rd party interactions
    'Connect', 'Deploy', 'Stream',

    // For development
    'Debug', 'Custom',
  ],
  default: 'Custom'
}

export const AssetType: JsonSchema = {
  type: JsonSchemaType.STRING,
  title: 'Asset Type',
  description: 'Describes the type class of the asset',
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
  title: 'Variable Type',
  description: 'What kind of value the variable holds',
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
  title: 'Variable Variation Type',
  description: 'Whether this is a variation variable',
  enum: [
    'Mapping',
    'Leveling',
    'Class',
    'Time',
    'Default',
  ],
  default: 'Default'
}