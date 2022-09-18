namespace entities
{
  using System.Collections.Generic;

  public class Mission
  {
    private double? duration;
    private double? rank;
    private string rankName;
    private double? score;
    private double? moves;
    private double? remaining;
    private Dictionary<string, dynamic> additionalProperties;

    public double? Duration 
    {
      get { return duration; }
      set { duration = value; }
    }

    public double? Rank 
    {
      get { return rank; }
      set { rank = value; }
    }

    public string RankName 
    {
      get { return rankName; }
      set { rankName = value; }
    }

    public double? Score 
    {
      get { return score; }
      set { score = value; }
    }

    public double? Moves 
    {
      get { return moves; }
      set { moves = value; }
    }

    public double? Remaining 
    {
      get { return remaining; }
      set { remaining = value; }
    }

    public Dictionary<string, dynamic> AdditionalProperties 
    {
      get { return additionalProperties; }
      set { additionalProperties = value; }
    }
  }
}