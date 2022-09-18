namespace entities
{
  public enum EventType
  {
    AdStarted,
    AdOpened,
    AdPlaying,
    AdStoped,
    AdSkipped,
    Conversion,
    AdCompleted,
    AdStop,
    AdClosed,
    AdImpression,
    AdExposure,
    AdReward,
    AppOpenedEvent,
    AppStart,
    AppRunning,
    AppStop,
    AppUpdate,
    AppInstall,
    GameStarted,
    GameEnded,
    GameRunning,
    Checkout,
    Purchase,
    Payment,
    Order,
    Exchange,
    Subscription,
    RevenueRecord,
    Reward,
    Debit,
    Credit,
    SubscriptionCancel,
    ProgressionStart,
    ProgressionComplete,
    ProgressionFail,
    Identity,
    DeviceInfo,
    NewUser,
    NewPlayer,
    DdnaDontTrack,
    Login,
    Register,
    KycPass,
    Validated,
    Alias,
    Achievement,
    LevelUp,
    Experience,
    Win,
    Draw,
    Defeat,
    Kill,
    Killed,
    Drop,
    Loot,
    HighScore,
    Build,
    Waging,
    Lock,
    Lose,
    Supply,
    Craft,
    Respawn,
    Spawn,
    Gathering,
    Resistance,
    Gear,
    MapAreaVisit,
    MapAreaLeave,
    Summon,
    Cast,
    Evolved,
    SessionNew,
    SessionStart,
    SessionStop,
    SessionResult,
    SessionRank,
    SessionQuit,
    SessionFail,
    SessionSkip,
    MissionNew,
    MissionStart,
    MissionStop,
    MissionResult,
    MissionRank,
    MissionQuit,
    MissionFail,
    MissionSkip,
    QuestNew,
    QuestStart,
    QuestStop,
    QuestResult,
    QuestRank,
    QuestQuit,
    QuestFail,
    QuestSkip,
    LevelNew,
    LevelStart,
    LevelStop,
    LevelResult,
    LevelRank,
    LevelQuit,
    LevelFail,
    LevelSkip,
    SeasonNew,
    SeasonStart,
    SeasonStop,
    SeasonResult,
    SeasonRank,
    SeasonQuit,
    SeasonFail,
    SeasonSkip,
    MatchmakingNew,
    MatchmakingStart,
    MatchmakingStop,
    MatchmakingResult,
    MatchmakingRank,
    MatchmakingQuit,
    MatchmakingFail,
    MatchmakingSkip,
    ConversationNew,
    ConversationJoin,
    ConversationLeave,
    ConversationMsgSent,
    ChannelNew,
    ChannelJoin,
    ChannelLeave,
    ChannelMsgSent,
    GuildNew,
    GuildJoin,
    GuildLeave,
    GuildMsgSent,
    GroupNew,
    GroupJoin,
    GroupLeave,
    GroupMsgSent,
    PartyNew,
    PartyJoin,
    PartyLeave,
    PartyMsgSent,
    StoreOpened,
    StoreItemClick,
    ItemAcquired,
    ItemSpent,
    ChampionAcquired,
    SkinAcquired,
    VariationAcquired,
    Connect,
    Deploy,
    Stream,
    CampaignNew,
    CampaignStart,
    CampaignStop,
    CampaignResult,
    CampaignBounced,
    ResourceSupply,
    ResourceGeneration,
    SinkFlow,
    SourceFlow,
    Search,
    Bookmarked,
    Reviewed,
    Listing,
    Bid,
    Fulfillment,
    Engagement,
    Access,
    Click,
    View,
    Acquire,
    Download,
    Grant,
    Retrack,
    Mint,
    Burn,
    Play,
    Pause,
    Skip,
    Resume,
    VolumeUp,
    VolumeDown,
    SkipFwd,
    SkipBwd,
    Follow,
    Unfollow,
    Block,
    Reply,
    Create,
    Like,
    Spectate,
    Share,
    Scroll,
    MessageSent,
    MessageEngagement,
    Track,
    Action,
    Transaction,
    Spread,
    Traffic,
    Resource,
    Error,
    Debug,
    Custom
  }

  public static class EventTypeExtensions
  {
    public static dynamic GetValue(this EventType enumValue)
    {
      switch (enumValue)
      {
        case EventType.AdStarted: return "AdStarted";
        case EventType.AdOpened: return "AdOpened";
        case EventType.AdPlaying: return "AdPlaying";
        case EventType.AdStoped: return "AdStoped";
        case EventType.AdSkipped: return "AdSkipped";
        case EventType.Conversion: return "Conversion";
        case EventType.AdCompleted: return "AdCompleted";
        case EventType.AdStop: return "AdStop";
        case EventType.AdClosed: return "AdClosed";
        case EventType.AdImpression: return "AdImpression";
        case EventType.AdExposure: return "AdExposure";
        case EventType.AdReward: return "AdReward";
        case EventType.AppOpenedEvent: return "AppOpenedEvent";
        case EventType.AppStart: return "AppStart";
        case EventType.AppRunning: return "AppRunning";
        case EventType.AppStop: return "AppStop";
        case EventType.AppUpdate: return "AppUpdate";
        case EventType.AppInstall: return "AppInstall";
        case EventType.GameStarted: return "GameStarted";
        case EventType.GameEnded: return "GameEnded";
        case EventType.GameRunning: return "GameRunning";
        case EventType.Checkout: return "Checkout";
        case EventType.Purchase: return "Purchase";
        case EventType.Payment: return "Payment";
        case EventType.Order: return "Order";
        case EventType.Exchange: return "Exchange";
        case EventType.Subscription: return "Subscription";
        case EventType.RevenueRecord: return "RevenueRecord";
        case EventType.Reward: return "Reward";
        case EventType.Debit: return "Debit";
        case EventType.Credit: return "Credit";
        case EventType.SubscriptionCancel: return "SubscriptionCancel";
        case EventType.ProgressionStart: return "ProgressionStart";
        case EventType.ProgressionComplete: return "ProgressionComplete";
        case EventType.ProgressionFail: return "ProgressionFail";
        case EventType.Identity: return "Identity";
        case EventType.DeviceInfo: return "DeviceInfo";
        case EventType.NewUser: return "NewUser";
        case EventType.NewPlayer: return "NewPlayer";
        case EventType.DdnaDontTrack: return "DDNADontTrack";
        case EventType.Login: return "Login";
        case EventType.Register: return "Register";
        case EventType.KycPass: return "KYCPass";
        case EventType.Validated: return "Validated";
        case EventType.Alias: return "Alias";
        case EventType.Achievement: return "Achievement";
        case EventType.LevelUp: return "LevelUp";
        case EventType.Experience: return "Experience";
        case EventType.Win: return "Win";
        case EventType.Draw: return "Draw";
        case EventType.Defeat: return "Defeat";
        case EventType.Kill: return "Kill";
        case EventType.Killed: return "Killed";
        case EventType.Drop: return "Drop";
        case EventType.Loot: return "Loot";
        case EventType.HighScore: return "HighScore";
        case EventType.Build: return "Build";
        case EventType.Waging: return "Waging";
        case EventType.Lock: return "Lock";
        case EventType.Lose: return "Lose";
        case EventType.Supply: return "Supply";
        case EventType.Craft: return "Craft";
        case EventType.Respawn: return "Respawn";
        case EventType.Spawn: return "Spawn";
        case EventType.Gathering: return "Gathering";
        case EventType.Resistance: return "Resistance";
        case EventType.Gear: return "Gear";
        case EventType.MapAreaVisit: return "MapAreaVisit";
        case EventType.MapAreaLeave: return "MapAreaLeave";
        case EventType.Summon: return "Summon";
        case EventType.Cast: return "Cast";
        case EventType.Evolved: return "Evolved";
        case EventType.SessionNew: return "SessionNew";
        case EventType.SessionStart: return "SessionStart";
        case EventType.SessionStop: return "SessionStop";
        case EventType.SessionResult: return "SessionResult";
        case EventType.SessionRank: return "SessionRank";
        case EventType.SessionQuit: return "SessionQuit";
        case EventType.SessionFail: return "SessionFail";
        case EventType.SessionSkip: return "SessionSkip";
        case EventType.MissionNew: return "MissionNew";
        case EventType.MissionStart: return "MissionStart";
        case EventType.MissionStop: return "MissionStop";
        case EventType.MissionResult: return "MissionResult";
        case EventType.MissionRank: return "MissionRank";
        case EventType.MissionQuit: return "MissionQuit";
        case EventType.MissionFail: return "MissionFail";
        case EventType.MissionSkip: return "MissionSkip";
        case EventType.QuestNew: return "QuestNew";
        case EventType.QuestStart: return "QuestStart";
        case EventType.QuestStop: return "QuestStop";
        case EventType.QuestResult: return "QuestResult";
        case EventType.QuestRank: return "QuestRank";
        case EventType.QuestQuit: return "QuestQuit";
        case EventType.QuestFail: return "QuestFail";
        case EventType.QuestSkip: return "QuestSkip";
        case EventType.LevelNew: return "LevelNew";
        case EventType.LevelStart: return "LevelStart";
        case EventType.LevelStop: return "LevelStop";
        case EventType.LevelResult: return "LevelResult";
        case EventType.LevelRank: return "LevelRank";
        case EventType.LevelQuit: return "LevelQuit";
        case EventType.LevelFail: return "LevelFail";
        case EventType.LevelSkip: return "LevelSkip";
        case EventType.SeasonNew: return "SeasonNew";
        case EventType.SeasonStart: return "SeasonStart";
        case EventType.SeasonStop: return "SeasonStop";
        case EventType.SeasonResult: return "SeasonResult";
        case EventType.SeasonRank: return "SeasonRank";
        case EventType.SeasonQuit: return "SeasonQuit";
        case EventType.SeasonFail: return "SeasonFail";
        case EventType.SeasonSkip: return "SeasonSkip";
        case EventType.MatchmakingNew: return "MatchmakingNew";
        case EventType.MatchmakingStart: return "MatchmakingStart";
        case EventType.MatchmakingStop: return "MatchmakingStop";
        case EventType.MatchmakingResult: return "MatchmakingResult";
        case EventType.MatchmakingRank: return "MatchmakingRank";
        case EventType.MatchmakingQuit: return "MatchmakingQuit";
        case EventType.MatchmakingFail: return "MatchmakingFail";
        case EventType.MatchmakingSkip: return "MatchmakingSkip";
        case EventType.ConversationNew: return "ConversationNew";
        case EventType.ConversationJoin: return "ConversationJoin";
        case EventType.ConversationLeave: return "ConversationLeave";
        case EventType.ConversationMsgSent: return "ConversationMsgSent";
        case EventType.ChannelNew: return "ChannelNew";
        case EventType.ChannelJoin: return "ChannelJoin";
        case EventType.ChannelLeave: return "ChannelLeave";
        case EventType.ChannelMsgSent: return "ChannelMsgSent";
        case EventType.GuildNew: return "GuildNew";
        case EventType.GuildJoin: return "GuildJoin";
        case EventType.GuildLeave: return "GuildLeave";
        case EventType.GuildMsgSent: return "GuildMsgSent";
        case EventType.GroupNew: return "GroupNew";
        case EventType.GroupJoin: return "GroupJoin";
        case EventType.GroupLeave: return "GroupLeave";
        case EventType.GroupMsgSent: return "GroupMsgSent";
        case EventType.PartyNew: return "PartyNew";
        case EventType.PartyJoin: return "PartyJoin";
        case EventType.PartyLeave: return "PartyLeave";
        case EventType.PartyMsgSent: return "PartyMsgSent";
        case EventType.StoreOpened: return "StoreOpened";
        case EventType.StoreItemClick: return "StoreItemClick";
        case EventType.ItemAcquired: return "ItemAcquired";
        case EventType.ItemSpent: return "ItemSpent";
        case EventType.ChampionAcquired: return "ChampionAcquired";
        case EventType.SkinAcquired: return "SkinAcquired";
        case EventType.VariationAcquired: return "VariationAcquired";
        case EventType.Connect: return "Connect";
        case EventType.Deploy: return "Deploy";
        case EventType.Stream: return "Stream";
        case EventType.CampaignNew: return "CampaignNew";
        case EventType.CampaignStart: return "CampaignStart";
        case EventType.CampaignStop: return "CampaignStop";
        case EventType.CampaignResult: return "CampaignResult";
        case EventType.CampaignBounced: return "CampaignBounced";
        case EventType.ResourceSupply: return "ResourceSupply";
        case EventType.ResourceGeneration: return "ResourceGeneration";
        case EventType.SinkFlow: return "SinkFlow";
        case EventType.SourceFlow: return "SourceFlow";
        case EventType.Search: return "Search";
        case EventType.Bookmarked: return "Bookmarked";
        case EventType.Reviewed: return "Reviewed";
        case EventType.Listing: return "Listing";
        case EventType.Bid: return "Bid";
        case EventType.Fulfillment: return "Fulfillment";
        case EventType.Engagement: return "Engagement";
        case EventType.Access: return "Access";
        case EventType.Click: return "Click";
        case EventType.View: return "View";
        case EventType.Acquire: return "Acquire";
        case EventType.Download: return "Download";
        case EventType.Grant: return "Grant";
        case EventType.Retrack: return "Retrack";
        case EventType.Mint: return "Mint";
        case EventType.Burn: return "Burn";
        case EventType.Play: return "Play";
        case EventType.Pause: return "Pause";
        case EventType.Skip: return "Skip";
        case EventType.Resume: return "Resume";
        case EventType.VolumeUp: return "VolumeUp";
        case EventType.VolumeDown: return "VolumeDown";
        case EventType.SkipFwd: return "SkipFwd";
        case EventType.SkipBwd: return "SkipBwd";
        case EventType.Follow: return "Follow";
        case EventType.Unfollow: return "Unfollow";
        case EventType.Block: return "Block";
        case EventType.Reply: return "Reply";
        case EventType.Create: return "Create";
        case EventType.Like: return "Like";
        case EventType.Spectate: return "Spectate";
        case EventType.Share: return "Share";
        case EventType.Scroll: return "Scroll";
        case EventType.MessageSent: return "MessageSent";
        case EventType.MessageEngagement: return "MessageEngagement";
        case EventType.Track: return "Track";
        case EventType.Action: return "Action";
        case EventType.Transaction: return "Transaction";
        case EventType.Spread: return "Spread";
        case EventType.Traffic: return "Traffic";
        case EventType.Resource: return "Resource";
        case EventType.Error: return "Error";
        case EventType.Debug: return "Debug";
        case EventType.Custom: return "Custom";
      }
      return null;
    }

    public static EventType? ToEventType(dynamic value)
    {
      switch (value)
      {
        case "AdStarted": return EventType.AdStarted;
        case "AdOpened": return EventType.AdOpened;
        case "AdPlaying": return EventType.AdPlaying;
        case "AdStoped": return EventType.AdStoped;
        case "AdSkipped": return EventType.AdSkipped;
        case "Conversion": return EventType.Conversion;
        case "AdCompleted": return EventType.AdCompleted;
        case "AdStop": return EventType.AdStop;
        case "AdClosed": return EventType.AdClosed;
        case "AdImpression": return EventType.AdImpression;
        case "AdExposure": return EventType.AdExposure;
        case "AdReward": return EventType.AdReward;
        case "AppOpenedEvent": return EventType.AppOpenedEvent;
        case "AppStart": return EventType.AppStart;
        case "AppRunning": return EventType.AppRunning;
        case "AppStop": return EventType.AppStop;
        case "AppUpdate": return EventType.AppUpdate;
        case "AppInstall": return EventType.AppInstall;
        case "GameStarted": return EventType.GameStarted;
        case "GameEnded": return EventType.GameEnded;
        case "GameRunning": return EventType.GameRunning;
        case "Checkout": return EventType.Checkout;
        case "Purchase": return EventType.Purchase;
        case "Payment": return EventType.Payment;
        case "Order": return EventType.Order;
        case "Exchange": return EventType.Exchange;
        case "Subscription": return EventType.Subscription;
        case "RevenueRecord": return EventType.RevenueRecord;
        case "Reward": return EventType.Reward;
        case "Debit": return EventType.Debit;
        case "Credit": return EventType.Credit;
        case "SubscriptionCancel": return EventType.SubscriptionCancel;
        case "ProgressionStart": return EventType.ProgressionStart;
        case "ProgressionComplete": return EventType.ProgressionComplete;
        case "ProgressionFail": return EventType.ProgressionFail;
        case "Identity": return EventType.Identity;
        case "DeviceInfo": return EventType.DeviceInfo;
        case "NewUser": return EventType.NewUser;
        case "NewPlayer": return EventType.NewPlayer;
        case "DDNADontTrack": return EventType.DdnaDontTrack;
        case "Login": return EventType.Login;
        case "Register": return EventType.Register;
        case "KYCPass": return EventType.KycPass;
        case "Validated": return EventType.Validated;
        case "Alias": return EventType.Alias;
        case "Achievement": return EventType.Achievement;
        case "LevelUp": return EventType.LevelUp;
        case "Experience": return EventType.Experience;
        case "Win": return EventType.Win;
        case "Draw": return EventType.Draw;
        case "Defeat": return EventType.Defeat;
        case "Kill": return EventType.Kill;
        case "Killed": return EventType.Killed;
        case "Drop": return EventType.Drop;
        case "Loot": return EventType.Loot;
        case "HighScore": return EventType.HighScore;
        case "Build": return EventType.Build;
        case "Waging": return EventType.Waging;
        case "Lock": return EventType.Lock;
        case "Lose": return EventType.Lose;
        case "Supply": return EventType.Supply;
        case "Craft": return EventType.Craft;
        case "Respawn": return EventType.Respawn;
        case "Spawn": return EventType.Spawn;
        case "Gathering": return EventType.Gathering;
        case "Resistance": return EventType.Resistance;
        case "Gear": return EventType.Gear;
        case "MapAreaVisit": return EventType.MapAreaVisit;
        case "MapAreaLeave": return EventType.MapAreaLeave;
        case "Summon": return EventType.Summon;
        case "Cast": return EventType.Cast;
        case "Evolved": return EventType.Evolved;
        case "SessionNew": return EventType.SessionNew;
        case "SessionStart": return EventType.SessionStart;
        case "SessionStop": return EventType.SessionStop;
        case "SessionResult": return EventType.SessionResult;
        case "SessionRank": return EventType.SessionRank;
        case "SessionQuit": return EventType.SessionQuit;
        case "SessionFail": return EventType.SessionFail;
        case "SessionSkip": return EventType.SessionSkip;
        case "MissionNew": return EventType.MissionNew;
        case "MissionStart": return EventType.MissionStart;
        case "MissionStop": return EventType.MissionStop;
        case "MissionResult": return EventType.MissionResult;
        case "MissionRank": return EventType.MissionRank;
        case "MissionQuit": return EventType.MissionQuit;
        case "MissionFail": return EventType.MissionFail;
        case "MissionSkip": return EventType.MissionSkip;
        case "QuestNew": return EventType.QuestNew;
        case "QuestStart": return EventType.QuestStart;
        case "QuestStop": return EventType.QuestStop;
        case "QuestResult": return EventType.QuestResult;
        case "QuestRank": return EventType.QuestRank;
        case "QuestQuit": return EventType.QuestQuit;
        case "QuestFail": return EventType.QuestFail;
        case "QuestSkip": return EventType.QuestSkip;
        case "LevelNew": return EventType.LevelNew;
        case "LevelStart": return EventType.LevelStart;
        case "LevelStop": return EventType.LevelStop;
        case "LevelResult": return EventType.LevelResult;
        case "LevelRank": return EventType.LevelRank;
        case "LevelQuit": return EventType.LevelQuit;
        case "LevelFail": return EventType.LevelFail;
        case "LevelSkip": return EventType.LevelSkip;
        case "SeasonNew": return EventType.SeasonNew;
        case "SeasonStart": return EventType.SeasonStart;
        case "SeasonStop": return EventType.SeasonStop;
        case "SeasonResult": return EventType.SeasonResult;
        case "SeasonRank": return EventType.SeasonRank;
        case "SeasonQuit": return EventType.SeasonQuit;
        case "SeasonFail": return EventType.SeasonFail;
        case "SeasonSkip": return EventType.SeasonSkip;
        case "MatchmakingNew": return EventType.MatchmakingNew;
        case "MatchmakingStart": return EventType.MatchmakingStart;
        case "MatchmakingStop": return EventType.MatchmakingStop;
        case "MatchmakingResult": return EventType.MatchmakingResult;
        case "MatchmakingRank": return EventType.MatchmakingRank;
        case "MatchmakingQuit": return EventType.MatchmakingQuit;
        case "MatchmakingFail": return EventType.MatchmakingFail;
        case "MatchmakingSkip": return EventType.MatchmakingSkip;
        case "ConversationNew": return EventType.ConversationNew;
        case "ConversationJoin": return EventType.ConversationJoin;
        case "ConversationLeave": return EventType.ConversationLeave;
        case "ConversationMsgSent": return EventType.ConversationMsgSent;
        case "ChannelNew": return EventType.ChannelNew;
        case "ChannelJoin": return EventType.ChannelJoin;
        case "ChannelLeave": return EventType.ChannelLeave;
        case "ChannelMsgSent": return EventType.ChannelMsgSent;
        case "GuildNew": return EventType.GuildNew;
        case "GuildJoin": return EventType.GuildJoin;
        case "GuildLeave": return EventType.GuildLeave;
        case "GuildMsgSent": return EventType.GuildMsgSent;
        case "GroupNew": return EventType.GroupNew;
        case "GroupJoin": return EventType.GroupJoin;
        case "GroupLeave": return EventType.GroupLeave;
        case "GroupMsgSent": return EventType.GroupMsgSent;
        case "PartyNew": return EventType.PartyNew;
        case "PartyJoin": return EventType.PartyJoin;
        case "PartyLeave": return EventType.PartyLeave;
        case "PartyMsgSent": return EventType.PartyMsgSent;
        case "StoreOpened": return EventType.StoreOpened;
        case "StoreItemClick": return EventType.StoreItemClick;
        case "ItemAcquired": return EventType.ItemAcquired;
        case "ItemSpent": return EventType.ItemSpent;
        case "ChampionAcquired": return EventType.ChampionAcquired;
        case "SkinAcquired": return EventType.SkinAcquired;
        case "VariationAcquired": return EventType.VariationAcquired;
        case "Connect": return EventType.Connect;
        case "Deploy": return EventType.Deploy;
        case "Stream": return EventType.Stream;
        case "CampaignNew": return EventType.CampaignNew;
        case "CampaignStart": return EventType.CampaignStart;
        case "CampaignStop": return EventType.CampaignStop;
        case "CampaignResult": return EventType.CampaignResult;
        case "CampaignBounced": return EventType.CampaignBounced;
        case "ResourceSupply": return EventType.ResourceSupply;
        case "ResourceGeneration": return EventType.ResourceGeneration;
        case "SinkFlow": return EventType.SinkFlow;
        case "SourceFlow": return EventType.SourceFlow;
        case "Search": return EventType.Search;
        case "Bookmarked": return EventType.Bookmarked;
        case "Reviewed": return EventType.Reviewed;
        case "Listing": return EventType.Listing;
        case "Bid": return EventType.Bid;
        case "Fulfillment": return EventType.Fulfillment;
        case "Engagement": return EventType.Engagement;
        case "Access": return EventType.Access;
        case "Click": return EventType.Click;
        case "View": return EventType.View;
        case "Acquire": return EventType.Acquire;
        case "Download": return EventType.Download;
        case "Grant": return EventType.Grant;
        case "Retrack": return EventType.Retrack;
        case "Mint": return EventType.Mint;
        case "Burn": return EventType.Burn;
        case "Play": return EventType.Play;
        case "Pause": return EventType.Pause;
        case "Skip": return EventType.Skip;
        case "Resume": return EventType.Resume;
        case "VolumeUp": return EventType.VolumeUp;
        case "VolumeDown": return EventType.VolumeDown;
        case "SkipFwd": return EventType.SkipFwd;
        case "SkipBwd": return EventType.SkipBwd;
        case "Follow": return EventType.Follow;
        case "Unfollow": return EventType.Unfollow;
        case "Block": return EventType.Block;
        case "Reply": return EventType.Reply;
        case "Create": return EventType.Create;
        case "Like": return EventType.Like;
        case "Spectate": return EventType.Spectate;
        case "Share": return EventType.Share;
        case "Scroll": return EventType.Scroll;
        case "MessageSent": return EventType.MessageSent;
        case "MessageEngagement": return EventType.MessageEngagement;
        case "Track": return EventType.Track;
        case "Action": return EventType.Action;
        case "Transaction": return EventType.Transaction;
        case "Spread": return EventType.Spread;
        case "Traffic": return EventType.Traffic;
        case "Resource": return EventType.Resource;
        case "Error": return EventType.Error;
        case "Debug": return EventType.Debug;
        case "Custom": return EventType.Custom;
      }
      return null;
    }
  }

}