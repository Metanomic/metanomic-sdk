
package entities

// SocialTrackingEventType represents an enum of string.
type SocialTrackingEventType string

const (
  SocialTrackingEventTypeSearch SocialTrackingEventType = "Search"
  SocialTrackingEventTypeBookmarked = "Bookmarked"
  SocialTrackingEventTypeReviewed = "Reviewed"
  SocialTrackingEventTypeListing = "Listing"
  SocialTrackingEventTypeBid = "Bid"
  SocialTrackingEventTypeFulfillment = "Fulfillment"
  SocialTrackingEventTypeEngagement = "Engagement"
  SocialTrackingEventTypeAccess = "Access"
  SocialTrackingEventTypeClick = "Click"
  SocialTrackingEventTypeView = "View"
  SocialTrackingEventTypeAcquire = "Acquire"
  SocialTrackingEventTypeDownload = "Download"
  SocialTrackingEventTypeGrant = "Grant"
  SocialTrackingEventTypeRetrack = "Retrack"
  SocialTrackingEventTypeMint = "Mint"
  SocialTrackingEventTypeBurn = "Burn"
  SocialTrackingEventTypePlay = "Play"
  SocialTrackingEventTypePause = "Pause"
  SocialTrackingEventTypeSkip = "Skip"
  SocialTrackingEventTypeResume = "Resume"
  SocialTrackingEventTypeVolumeUp = "VolumeUp"
  SocialTrackingEventTypeVolumeDown = "VolumeDown"
  SocialTrackingEventTypeSkipFwd = "SkipFwd"
  SocialTrackingEventTypeSkipBwd = "SkipBwd"
  SocialTrackingEventTypeFollow = "Follow"
  SocialTrackingEventTypeUnfollow = "Unfollow"
  SocialTrackingEventTypeBlock = "Block"
  SocialTrackingEventTypeReply = "Reply"
  SocialTrackingEventTypeCreate = "Create"
  SocialTrackingEventTypeLike = "Like"
  SocialTrackingEventTypeSpectate = "Spectate"
  SocialTrackingEventTypeShare = "Share"
  SocialTrackingEventTypeScroll = "Scroll"
  SocialTrackingEventTypeMessageSent = "MessageSent"
  SocialTrackingEventTypeMessageEngagement = "MessageEngagement"
)