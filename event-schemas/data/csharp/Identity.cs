namespace entities
{
  using System.Collections.Generic;

  public class Identity
  {
    private string userId;
    private string profileId;
    private string wallet;
    private bool anonymous;
    private string username;
    private string email;
    private string plan;
    private Dictionary<string, dynamic> additionalProperties;

    public string UserId 
    {
      get { return userId; }
      set { userId = value; }
    }

    public string ProfileId 
    {
      get { return profileId; }
      set { profileId = value; }
    }

    public string Wallet 
    {
      get { return wallet; }
      set { wallet = value; }
    }

    public bool Anonymous 
    {
      get { return anonymous; }
      set { anonymous = value; }
    }

    public string Username 
    {
      get { return username; }
      set { username = value; }
    }

    public string Email 
    {
      get { return email; }
      set { email = value; }
    }

    public string Plan 
    {
      get { return plan; }
      set { plan = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}