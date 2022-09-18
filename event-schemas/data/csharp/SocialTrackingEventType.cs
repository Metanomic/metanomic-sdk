namespace entities
{
  public enum SocialTrackingEventType
  {
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
    MessageEngagement
  }

  public static class SocialTrackingEventTypeExtensions
  {
    public static dynamic GetValue(this SocialTrackingEventType enumValue)
    {
      switch (enumValue)
      {
        case SocialTrackingEventType.Search: return "Search";
        case SocialTrackingEventType.Bookmarked: return "Bookmarked";
        case SocialTrackingEventType.Reviewed: return "Reviewed";
        case SocialTrackingEventType.Listing: return "Listing";
        case SocialTrackingEventType.Bid: return "Bid";
        case SocialTrackingEventType.Fulfillment: return "Fulfillment";
        case SocialTrackingEventType.Engagement: return "Engagement";
        case SocialTrackingEventType.Access: return "Access";
        case SocialTrackingEventType.Click: return "Click";
        case SocialTrackingEventType.View: return "View";
        case SocialTrackingEventType.Acquire: return "Acquire";
        case SocialTrackingEventType.Download: return "Download";
        case SocialTrackingEventType.Grant: return "Grant";
        case SocialTrackingEventType.Retrack: return "Retrack";
        case SocialTrackingEventType.Mint: return "Mint";
        case SocialTrackingEventType.Burn: return "Burn";
        case SocialTrackingEventType.Play: return "Play";
        case SocialTrackingEventType.Pause: return "Pause";
        case SocialTrackingEventType.Skip: return "Skip";
        case SocialTrackingEventType.Resume: return "Resume";
        case SocialTrackingEventType.VolumeUp: return "VolumeUp";
        case SocialTrackingEventType.VolumeDown: return "VolumeDown";
        case SocialTrackingEventType.SkipFwd: return "SkipFwd";
        case SocialTrackingEventType.SkipBwd: return "SkipBwd";
        case SocialTrackingEventType.Follow: return "Follow";
        case SocialTrackingEventType.Unfollow: return "Unfollow";
        case SocialTrackingEventType.Block: return "Block";
        case SocialTrackingEventType.Reply: return "Reply";
        case SocialTrackingEventType.Create: return "Create";
        case SocialTrackingEventType.Like: return "Like";
        case SocialTrackingEventType.Spectate: return "Spectate";
        case SocialTrackingEventType.Share: return "Share";
        case SocialTrackingEventType.Scroll: return "Scroll";
        case SocialTrackingEventType.MessageSent: return "MessageSent";
        case SocialTrackingEventType.MessageEngagement: return "MessageEngagement";
      }
      return null;
    }

    public static SocialTrackingEventType? ToSocialTrackingEventType(dynamic value)
    {
      switch (value)
      {
        case "Search": return SocialTrackingEventType.Search;
        case "Bookmarked": return SocialTrackingEventType.Bookmarked;
        case "Reviewed": return SocialTrackingEventType.Reviewed;
        case "Listing": return SocialTrackingEventType.Listing;
        case "Bid": return SocialTrackingEventType.Bid;
        case "Fulfillment": return SocialTrackingEventType.Fulfillment;
        case "Engagement": return SocialTrackingEventType.Engagement;
        case "Access": return SocialTrackingEventType.Access;
        case "Click": return SocialTrackingEventType.Click;
        case "View": return SocialTrackingEventType.View;
        case "Acquire": return SocialTrackingEventType.Acquire;
        case "Download": return SocialTrackingEventType.Download;
        case "Grant": return SocialTrackingEventType.Grant;
        case "Retrack": return SocialTrackingEventType.Retrack;
        case "Mint": return SocialTrackingEventType.Mint;
        case "Burn": return SocialTrackingEventType.Burn;
        case "Play": return SocialTrackingEventType.Play;
        case "Pause": return SocialTrackingEventType.Pause;
        case "Skip": return SocialTrackingEventType.Skip;
        case "Resume": return SocialTrackingEventType.Resume;
        case "VolumeUp": return SocialTrackingEventType.VolumeUp;
        case "VolumeDown": return SocialTrackingEventType.VolumeDown;
        case "SkipFwd": return SocialTrackingEventType.SkipFwd;
        case "SkipBwd": return SocialTrackingEventType.SkipBwd;
        case "Follow": return SocialTrackingEventType.Follow;
        case "Unfollow": return SocialTrackingEventType.Unfollow;
        case "Block": return SocialTrackingEventType.Block;
        case "Reply": return SocialTrackingEventType.Reply;
        case "Create": return SocialTrackingEventType.Create;
        case "Like": return SocialTrackingEventType.Like;
        case "Spectate": return SocialTrackingEventType.Spectate;
        case "Share": return SocialTrackingEventType.Share;
        case "Scroll": return SocialTrackingEventType.Scroll;
        case "MessageSent": return SocialTrackingEventType.MessageSent;
        case "MessageEngagement": return SocialTrackingEventType.MessageEngagement;
      }
      return null;
    }
  }

}