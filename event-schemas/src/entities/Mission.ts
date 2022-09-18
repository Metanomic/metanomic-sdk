

class Mission {
  private _duration?: number;
  private _rank?: number;
  private _rankName?: string;
  private _score?: number;
  private _moves?: number;
  private _remaining?: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    duration?: number,
    rank?: number,
    rankName?: string,
    score?: number,
    moves?: number,
    remaining?: number,
  }) {
    this._duration = input.duration;
    this._rank = input.rank;
    this._rankName = input.rankName;
    this._score = input.score;
    this._moves = input.moves;
    this._remaining = input.remaining;
  }

  get duration(): number | undefined { return this._duration; }
  set duration(duration: number | undefined) { this._duration = duration; }

  get rank(): number | undefined { return this._rank; }
  set rank(rank: number | undefined) { this._rank = rank; }

  get rankName(): string | undefined { return this._rankName; }
  set rankName(rankName: string | undefined) { this._rankName = rankName; }

  get score(): number | undefined { return this._score; }
  set score(score: number | undefined) { this._score = score; }

  get moves(): number | undefined { return this._moves; }
  set moves(moves: number | undefined) { this._moves = moves; }

  get remaining(): number | undefined { return this._remaining; }
  set remaining(remaining: number | undefined) { this._remaining = remaining; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Mission;
