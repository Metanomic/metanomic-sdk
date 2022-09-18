namespace entities
{
  using System.Collections.Generic;

  public class Social
  {
    private string recipient;
    private string sender;
    private string groupName;
    private string via;
    private string message;
    private string rating;
    private Dictionary<string, dynamic> additionalProperties;

    public string Recipient 
    {
      get { return recipient; }
      set { recipient = value; }
    }

    public string Sender 
    {
      get { return sender; }
      set { sender = value; }
    }

    public string GroupName 
    {
      get { return groupName; }
      set { groupName = value; }
    }

    public string Via 
    {
      get { return via; }
      set { via = value; }
    }

    public string Message 
    {
      get { return message; }
      set { message = value; }
    }

    public string Rating 
    {
      get { return rating; }
      set { rating = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}