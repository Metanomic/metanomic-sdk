

class Identity {
  private _userId?: string;
  private _profileId: string;
  private _wallet?: string;
  private _anonymous: boolean;
  private _username?: string;
  private _email?: string;
  private _plan?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    userId?: string,
    profileId: string,
    wallet?: string,
    anonymous: boolean,
    username?: string,
    email?: string,
    plan?: string,
  }) {
    this._userId = input.userId;
    this._profileId = input.profileId;
    this._wallet = input.wallet;
    this._anonymous = input.anonymous;
    this._username = input.username;
    this._email = input.email;
    this._plan = input.plan;
  }

  get userId(): string | undefined { return this._userId; }
  set userId(userId: string | undefined) { this._userId = userId; }

  get profileId(): string { return this._profileId; }
  set profileId(profileId: string) { this._profileId = profileId; }

  get wallet(): string | undefined { return this._wallet; }
  set wallet(wallet: string | undefined) { this._wallet = wallet; }

  get anonymous(): boolean { return this._anonymous; }
  set anonymous(anonymous: boolean) { this._anonymous = anonymous; }

  get username(): string | undefined { return this._username; }
  set username(username: string | undefined) { this._username = username; }

  get email(): string | undefined { return this._email; }
  set email(email: string | undefined) { this._email = email; }

  get plan(): string | undefined { return this._plan; }
  set plan(plan: string | undefined) { this._plan = plan; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Identity;
