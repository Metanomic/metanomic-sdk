
package entities

// AppLifecycleEventType represents an enum of string.
type AppLifecycleEventType string

const (
  AppLifecycleEventTypeAppOpenedEvent AppLifecycleEventType = "AppOpenedEvent"
  AppLifecycleEventTypeAppStart = "AppStart"
  AppLifecycleEventTypeAppRunning = "AppRunning"
  AppLifecycleEventTypeAppStop = "AppStop"
  AppLifecycleEventTypeAppUpdate = "AppUpdate"
  AppLifecycleEventTypeAppInstall = "AppInstall"
  AppLifecycleEventTypeGameStarted = "GameStarted"
  AppLifecycleEventTypeGameEnded = "GameEnded"
  AppLifecycleEventTypeGameRunning = "GameRunning"
)