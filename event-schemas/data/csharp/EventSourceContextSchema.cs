namespace entities
{
  using System.Collections.Generic;

  public class EventSourceContextSchema
  {
    private AppContext app;
    private CampaignContext campaign;
    private DeviceContext device;
    private SourceContext source;
    private ExperimentContext experiment;
    private SessionContext session;
    private ProfileContext profile;
    private ProfileContext targetProfile;
    private MapContext map;
    private Dictionary<string, dynamic> additionalProperties;

    public AppContext App 
    {
      get { return app; }
      set { app = value; }
    }

    public CampaignContext Campaign 
    {
      get { return campaign; }
      set { campaign = value; }
    }

    public DeviceContext Device 
    {
      get { return device; }
      set { device = value; }
    }

    public SourceContext Source 
    {
      get { return source; }
      set { source = value; }
    }

    public ExperimentContext Experiment 
    {
      get { return experiment; }
      set { experiment = value; }
    }

    public SessionContext Session 
    {
      get { return session; }
      set { session = value; }
    }

    public ProfileContext Profile 
    {
      get { return profile; }
      set { profile = value; }
    }

    public ProfileContext TargetProfile 
    {
      get { return targetProfile; }
      set { targetProfile = value; }
    }

    public MapContext Map 
    {
      get { return map; }
      set { map = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}