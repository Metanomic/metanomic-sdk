

class SessionContext {
  private _id?: string;
  private _name?: string;
  private _theme?: string;
  private _genre?: string;
  private _level?: number;
  private _progress?: number;
  private _difficulty?: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: string,
    name?: string,
    theme?: string,
    genre?: string,
    level?: number,
    progress?: number,
    difficulty?: number,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._theme = input.theme;
    this._genre = input.genre;
    this._level = input.level;
    this._progress = input.progress;
    this._difficulty = input.difficulty;
  }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get theme(): string | undefined { return this._theme; }
  set theme(theme: string | undefined) { this._theme = theme; }

  get genre(): string | undefined { return this._genre; }
  set genre(genre: string | undefined) { this._genre = genre; }

  get level(): number | undefined { return this._level; }
  set level(level: number | undefined) { this._level = level; }

  get progress(): number | undefined { return this._progress; }
  set progress(progress: number | undefined) { this._progress = progress; }

  get difficulty(): number | undefined { return this._difficulty; }
  set difficulty(difficulty: number | undefined) { this._difficulty = difficulty; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default SessionContext;
