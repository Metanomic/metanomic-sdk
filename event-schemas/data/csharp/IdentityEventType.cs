namespace entities
{
  public enum IdentityEventType
  {
    Identity,
    DeviceInfo,
    NewUser,
    NewPlayer,
    DdnaDontTrack,
    Login,
    Register,
    KycPass,
    Validated,
    Alias
  }

  public static class IdentityEventTypeExtensions
  {
    public static dynamic GetValue(this IdentityEventType enumValue)
    {
      switch (enumValue)
      {
        case IdentityEventType.Identity: return "Identity";
        case IdentityEventType.DeviceInfo: return "DeviceInfo";
        case IdentityEventType.NewUser: return "NewUser";
        case IdentityEventType.NewPlayer: return "NewPlayer";
        case IdentityEventType.DdnaDontTrack: return "DDNADontTrack";
        case IdentityEventType.Login: return "Login";
        case IdentityEventType.Register: return "Register";
        case IdentityEventType.KycPass: return "KYCPass";
        case IdentityEventType.Validated: return "Validated";
        case IdentityEventType.Alias: return "Alias";
      }
      return null;
    }

    public static IdentityEventType? ToIdentityEventType(dynamic value)
    {
      switch (value)
      {
        case "Identity": return IdentityEventType.Identity;
        case "DeviceInfo": return IdentityEventType.DeviceInfo;
        case "NewUser": return IdentityEventType.NewUser;
        case "NewPlayer": return IdentityEventType.NewPlayer;
        case "DDNADontTrack": return IdentityEventType.DdnaDontTrack;
        case "Login": return IdentityEventType.Login;
        case "Register": return IdentityEventType.Register;
        case "KYCPass": return IdentityEventType.KycPass;
        case "Validated": return IdentityEventType.Validated;
        case "Alias": return IdentityEventType.Alias;
      }
      return null;
    }
  }

}