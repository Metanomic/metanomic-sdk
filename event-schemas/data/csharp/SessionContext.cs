namespace entities
{
  using System.Collections.Generic;

  public class SessionContext
  {
    private string id;
    private string name;
    private string theme;
    private string genre;
    private double? level;
    private double? progress;
    private double? difficulty;
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

    public string Theme 
    {
      get { return theme; }
      set { theme = value; }
    }

    public string Genre 
    {
      get { return genre; }
      set { genre = value; }
    }

    public double? Level 
    {
      get { return level; }
      set { level = value; }
    }

    public double? Progress 
    {
      get { return progress; }
      set { progress = value; }
    }

    public double? Difficulty 
    {
      get { return difficulty; }
      set { difficulty = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}