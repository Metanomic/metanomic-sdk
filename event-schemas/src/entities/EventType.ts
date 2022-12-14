

enum EventType {
  AD_STARTED = "AdStarted",
  AD_OPENED = "AdOpened",
  AD_PLAYING = "AdPlaying",
  AD_STOPED = "AdStoped",
  AD_SKIPPED = "AdSkipped",
  CONVERSION = "Conversion",
  AD_COMPLETED = "AdCompleted",
  AD_STOP = "AdStop",
  AD_CLOSED = "AdClosed",
  AD_IMPRESSION = "AdImpression",
  AD_EXPOSURE = "AdExposure",
  AD_REWARD = "AdReward",
  APP_OPENED_EVENT = "AppOpenedEvent",
  APP_START = "AppStart",
  APP_RUNNING = "AppRunning",
  APP_STOP = "AppStop",
  APP_UPDATE = "AppUpdate",
  APP_INSTALL = "AppInstall",
  GAME_STARTED = "GameStarted",
  GAME_ENDED = "GameEnded",
  GAME_RUNNING = "GameRunning",
  CHECKOUT = "Checkout",
  PURCHASE = "Purchase",
  PAYMENT = "Payment",
  ORDER = "Order",
  EXCHANGE = "Exchange",
  SUBSCRIPTION = "Subscription",
  REVENUE_RECORD = "RevenueRecord",
  REWARD = "Reward",
  DEBIT = "Debit",
  CREDIT = "Credit",
  SUBSCRIPTION_CANCEL = "SubscriptionCancel",
  PROGRESSION_START = "ProgressionStart",
  PROGRESSION_COMPLETE = "ProgressionComplete",
  PROGRESSION_FAIL = "ProgressionFail",
  IDENTITY = "Identity",
  DEVICE_INFO = "DeviceInfo",
  NEW_USER = "NewUser",
  NEW_PLAYER = "NewPlayer",
  DDNA_DONT_TRACK = "DDNADontTrack",
  LOGIN = "Login",
  REGISTER = "Register",
  KYC_PASS = "KYCPass",
  VALIDATED = "Validated",
  ALIAS = "Alias",
  ACHIEVEMENT = "Achievement",
  LEVEL_UP = "LevelUp",
  EXPERIENCE = "Experience",
  WIN = "Win",
  DRAW = "Draw",
  DEFEAT = "Defeat",
  KILL = "Kill",
  KILLED = "Killed",
  DROP = "Drop",
  LOOT = "Loot",
  HIGH_SCORE = "HighScore",
  BUILD = "Build",
  WAGING = "Waging",
  LOCK = "Lock",
  LOSE = "Lose",
  SUPPLY = "Supply",
  CRAFT = "Craft",
  RESPAWN = "Respawn",
  SPAWN = "Spawn",
  GATHERING = "Gathering",
  RESISTANCE = "Resistance",
  GEAR = "Gear",
  MAP_AREA_VISIT = "MapAreaVisit",
  MAP_AREA_LEAVE = "MapAreaLeave",
  SUMMON = "Summon",
  CAST = "Cast",
  EVOLVED = "Evolved",
  SESSION_NEW = "SessionNew",
  SESSION_START = "SessionStart",
  SESSION_STOP = "SessionStop",
  SESSION_RESULT = "SessionResult",
  SESSION_RANK = "SessionRank",
  SESSION_QUIT = "SessionQuit",
  SESSION_FAIL = "SessionFail",
  SESSION_SKIP = "SessionSkip",
  MISSION_NEW = "MissionNew",
  MISSION_START = "MissionStart",
  MISSION_STOP = "MissionStop",
  MISSION_RESULT = "MissionResult",
  MISSION_RANK = "MissionRank",
  MISSION_QUIT = "MissionQuit",
  MISSION_FAIL = "MissionFail",
  MISSION_SKIP = "MissionSkip",
  QUEST_NEW = "QuestNew",
  QUEST_START = "QuestStart",
  QUEST_STOP = "QuestStop",
  QUEST_RESULT = "QuestResult",
  QUEST_RANK = "QuestRank",
  QUEST_QUIT = "QuestQuit",
  QUEST_FAIL = "QuestFail",
  QUEST_SKIP = "QuestSkip",
  LEVEL_NEW = "LevelNew",
  LEVEL_START = "LevelStart",
  LEVEL_STOP = "LevelStop",
  LEVEL_RESULT = "LevelResult",
  LEVEL_RANK = "LevelRank",
  LEVEL_QUIT = "LevelQuit",
  LEVEL_FAIL = "LevelFail",
  LEVEL_SKIP = "LevelSkip",
  SEASON_NEW = "SeasonNew",
  SEASON_START = "SeasonStart",
  SEASON_STOP = "SeasonStop",
  SEASON_RESULT = "SeasonResult",
  SEASON_RANK = "SeasonRank",
  SEASON_QUIT = "SeasonQuit",
  SEASON_FAIL = "SeasonFail",
  SEASON_SKIP = "SeasonSkip",
  MATCHMAKING_NEW = "MatchmakingNew",
  MATCHMAKING_START = "MatchmakingStart",
  MATCHMAKING_STOP = "MatchmakingStop",
  MATCHMAKING_RESULT = "MatchmakingResult",
  MATCHMAKING_RANK = "MatchmakingRank",
  MATCHMAKING_QUIT = "MatchmakingQuit",
  MATCHMAKING_FAIL = "MatchmakingFail",
  MATCHMAKING_SKIP = "MatchmakingSkip",
  CONVERSATION_NEW = "ConversationNew",
  CONVERSATION_JOIN = "ConversationJoin",
  CONVERSATION_LEAVE = "ConversationLeave",
  CONVERSATION_MSG_SENT = "ConversationMsgSent",
  CHANNEL_NEW = "ChannelNew",
  CHANNEL_JOIN = "ChannelJoin",
  CHANNEL_LEAVE = "ChannelLeave",
  CHANNEL_MSG_SENT = "ChannelMsgSent",
  GUILD_NEW = "GuildNew",
  GUILD_JOIN = "GuildJoin",
  GUILD_LEAVE = "GuildLeave",
  GUILD_MSG_SENT = "GuildMsgSent",
  GROUP_NEW = "GroupNew",
  GROUP_JOIN = "GroupJoin",
  GROUP_LEAVE = "GroupLeave",
  GROUP_MSG_SENT = "GroupMsgSent",
  PARTY_NEW = "PartyNew",
  PARTY_JOIN = "PartyJoin",
  PARTY_LEAVE = "PartyLeave",
  PARTY_MSG_SENT = "PartyMsgSent",
  STORE_OPENED = "StoreOpened",
  STORE_ITEM_CLICK = "StoreItemClick",
  ITEM_ACQUIRED = "ItemAcquired",
  ITEM_SPENT = "ItemSpent",
  CHAMPION_ACQUIRED = "ChampionAcquired",
  SKIN_ACQUIRED = "SkinAcquired",
  VARIATION_ACQUIRED = "VariationAcquired",
  CONNECT = "Connect",
  DEPLOY = "Deploy",
  STREAM = "Stream",
  CAMPAIGN_NEW = "CampaignNew",
  CAMPAIGN_START = "CampaignStart",
  CAMPAIGN_STOP = "CampaignStop",
  CAMPAIGN_RESULT = "CampaignResult",
  CAMPAIGN_BOUNCED = "CampaignBounced",
  RESOURCE_SUPPLY = "ResourceSupply",
  RESOURCE_GENERATION = "ResourceGeneration",
  SINK_FLOW = "SinkFlow",
  SOURCE_FLOW = "SourceFlow",
  SEARCH = "Search",
  BOOKMARKED = "Bookmarked",
  REVIEWED = "Reviewed",
  LISTING = "Listing",
  BID = "Bid",
  FULFILLMENT = "Fulfillment",
  ENGAGEMENT = "Engagement",
  ACCESS = "Access",
  CLICK = "Click",
  VIEW = "View",
  ACQUIRE = "Acquire",
  DOWNLOAD = "Download",
  GRANT = "Grant",
  RETRACK = "Retrack",
  MINT = "Mint",
  BURN = "Burn",
  PLAY = "Play",
  PAUSE = "Pause",
  SKIP = "Skip",
  RESUME = "Resume",
  VOLUME_UP = "VolumeUp",
  VOLUME_DOWN = "VolumeDown",
  SKIP_FWD = "SkipFwd",
  SKIP_BWD = "SkipBwd",
  FOLLOW = "Follow",
  UNFOLLOW = "Unfollow",
  BLOCK = "Block",
  REPLY = "Reply",
  CREATE = "Create",
  LIKE = "Like",
  SPECTATE = "Spectate",
  SHARE = "Share",
  SCROLL = "Scroll",
  MESSAGE_SENT = "MessageSent",
  MESSAGE_ENGAGEMENT = "MessageEngagement",
  TRACK = "Track",
  ACTION = "Action",
  TRANSACTION = "Transaction",
  SPREAD = "Spread",
  TRAFFIC = "Traffic",
  RESOURCE = "Resource",
  ERROR = "Error",
  DEBUG = "Debug",
  CUSTOM = "Custom",
}
export default EventType;
