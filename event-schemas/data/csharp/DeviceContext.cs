namespace entities
{
  using System.Collections.Generic;

  public class DeviceContext
  {
    private string installationId;
    private string id;
    private bool? fullScreen;
    private bool? adTrackingEnabled;
    private string manufacturer;
    private string model;
    private string name;
    private string osName;
    private string osType;
    private string osVersion;
    private bool? jailbroken;
    private string token;
    private string ip;
    private string userAgent;
    private string engine;
    private string engineVersion;
    private string client;
    private string locale;
    private bool? bluetooth;
    private string carrier;
    private bool? cellular;
    private bool? wifi;
    private Screen screen;
    private Location location;
    private Dictionary<string, dynamic> additionalProperties;

    public string InstallationId 
    {
      get { return installationId; }
      set { installationId = value; }
    }

    public string Id 
    {
      get { return id; }
      set { id = value; }
    }

    public bool? FullScreen 
    {
      get { return fullScreen; }
      set { fullScreen = value; }
    }

    public bool? AdTrackingEnabled 
    {
      get { return adTrackingEnabled; }
      set { adTrackingEnabled = value; }
    }

    public string Manufacturer 
    {
      get { return manufacturer; }
      set { manufacturer = value; }
    }

    public string Model 
    {
      get { return model; }
      set { model = value; }
    }

    public string Name 
    {
      get { return name; }
      set { name = value; }
    }

    public string OsName 
    {
      get { return osName; }
      set { osName = value; }
    }

    public string OsType 
    {
      get { return osType; }
      set { osType = value; }
    }

    public string OsVersion 
    {
      get { return osVersion; }
      set { osVersion = value; }
    }

    public bool? Jailbroken 
    {
      get { return jailbroken; }
      set { jailbroken = value; }
    }

    public string Token 
    {
      get { return token; }
      set { token = value; }
    }

    public string Ip 
    {
      get { return ip; }
      set { ip = value; }
    }

    public string UserAgent 
    {
      get { return userAgent; }
      set { userAgent = value; }
    }

    public string Engine 
    {
      get { return engine; }
      set { engine = value; }
    }

    public string EngineVersion 
    {
      get { return engineVersion; }
      set { engineVersion = value; }
    }

    public string Client 
    {
      get { return client; }
      set { client = value; }
    }

    public string Locale 
    {
      get { return locale; }
      set { locale = value; }
    }

    public bool? Bluetooth 
    {
      get { return bluetooth; }
      set { bluetooth = value; }
    }

    public string Carrier 
    {
      get { return carrier; }
      set { carrier = value; }
    }

    public bool? Cellular 
    {
      get { return cellular; }
      set { cellular = value; }
    }

    public bool? Wifi 
    {
      get { return wifi; }
      set { wifi = value; }
    }

    public Screen Screen 
    {
      get { return screen; }
      set { screen = value; }
    }

    public Location Location 
    {
      get { return location; }
      set { location = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}