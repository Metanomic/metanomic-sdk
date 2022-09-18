
package entities

// IdentityEventType represents an enum of string.
type IdentityEventType string

const (
  IdentityEventTypeIdentity IdentityEventType = "Identity"
  IdentityEventTypeDeviceInfo = "DeviceInfo"
  IdentityEventTypeNewUser = "NewUser"
  IdentityEventTypeNewPlayer = "NewPlayer"
  IdentityEventTypeDdnaDontTrack = "DDNADontTrack"
  IdentityEventTypeLogin = "Login"
  IdentityEventTypeRegister = "Register"
  IdentityEventTypeKycPass = "KYCPass"
  IdentityEventTypeValidated = "Validated"
  IdentityEventTypeAlias = "Alias"
)