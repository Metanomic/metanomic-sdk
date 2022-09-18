namespace entities
{
  using System.Collections.Generic;

  public class ProfileContext
  {
    private string id;
    private string name;
    private double? xp;
    private string champion;
    private string skin;
    private bool? isPremium;
    private string reservedClass;
    private string subclass;
    private string race;
    private string mastery;
    private string groupId;
    private string guildId;
    private string teamId;
    private string partyId;
    private string factionId;
    private string channelId;
    private Dictionary<string, dynamic> additionalProperties;

    public string Id 
    {
      get { return id; }
      set { id = value; }
    }

    public string Name 
    {
      get { return name; }
      set { name = value; }
    }

    public double? Xp 
    {
      get { return xp; }
      set { xp = value; }
    }

    public string Champion 
    {
      get { return champion; }
      set { champion = value; }
    }

    public string Skin 
    {
      get { return skin; }
      set { skin = value; }
    }

    public bool? IsPremium 
    {
      get { return isPremium; }
      set { isPremium = value; }
    }

    public string ReservedClass 
    {
      get { return reservedClass; }
      set { reservedClass = value; }
    }

    public string Subclass 
    {
      get { return subclass; }
      set { subclass = value; }
    }

    public string Race 
    {
      get { return race; }
      set { race = value; }
    }

    public string Mastery 
    {
      get { return mastery; }
      set { mastery = value; }
    }

    public string GroupId 
    {
      get { return groupId; }
      set { groupId = value; }
    }

    public string GuildId 
    {
      get { return guildId; }
      set { guildId = value; }
    }

    public string TeamId 
    {
      get { return teamId; }
      set { teamId = value; }
    }

    public string PartyId 
    {
      get { return partyId; }
      set { partyId = value; }
    }

    public string FactionId 
    {
      get { return factionId; }
      set { factionId = value; }
    }

    public string ChannelId 
    {
      get { return channelId; }
      set { channelId = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}