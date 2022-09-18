
package entities

// DeviceContext represents a DeviceContext model.
type DeviceContext struct {
  InstallationId string
  Id string
  FullScreen bool
  AdTrackingEnabled bool
  Manufacturer string
  Model string
  Name string
  OsName string
  OsType string
  OsVersion string
  Jailbroken bool
  Token string
  Ip string
  UserAgent string
  Engine string
  EngineVersion string
  Client string
  Locale string
  Bluetooth bool
  Carrier string
  Cellular bool
  Wifi bool
  Screen *Screen
  Location *Location
  AdditionalProperties map[string][]interface{}
}