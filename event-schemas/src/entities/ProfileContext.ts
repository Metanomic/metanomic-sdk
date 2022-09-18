

class ProfileContext {
  private _id?: string;
  private _name?: string;
  private _xp?: number;
  private _champion?: string;
  private _skin?: string;
  private _isPremium?: boolean;
  private _reservedClass?: string;
  private _subclass?: string;
  private _race?: string;
  private _mastery?: string;
  private _groupId?: string;
  private _guildId?: string;
  private _teamId?: string;
  private _partyId?: string;
  private _factionId?: string;
  private _channelId?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    id?: string,
    name?: string,
    xp?: number,
    champion?: string,
    skin?: string,
    isPremium?: boolean,
    reservedClass?: string,
    subclass?: string,
    race?: string,
    mastery?: string,
    groupId?: string,
    guildId?: string,
    teamId?: string,
    partyId?: string,
    factionId?: string,
    channelId?: string,
  }) {
    this._id = input.id;
    this._name = input.name;
    this._xp = input.xp;
    this._champion = input.champion;
    this._skin = input.skin;
    this._isPremium = input.isPremium;
    this._reservedClass = input.reservedClass;
    this._subclass = input.subclass;
    this._race = input.race;
    this._mastery = input.mastery;
    this._groupId = input.groupId;
    this._guildId = input.guildId;
    this._teamId = input.teamId;
    this._partyId = input.partyId;
    this._factionId = input.factionId;
    this._channelId = input.channelId;
  }

  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  get name(): string | undefined { return this._name; }
  set name(name: string | undefined) { this._name = name; }

  get xp(): number | undefined { return this._xp; }
  set xp(xp: number | undefined) { this._xp = xp; }

  get champion(): string | undefined { return this._champion; }
  set champion(champion: string | undefined) { this._champion = champion; }

  get skin(): string | undefined { return this._skin; }
  set skin(skin: string | undefined) { this._skin = skin; }

  get isPremium(): boolean | undefined { return this._isPremium; }
  set isPremium(isPremium: boolean | undefined) { this._isPremium = isPremium; }

  get reservedClass(): string | undefined { return this._reservedClass; }
  set reservedClass(reservedClass: string | undefined) { this._reservedClass = reservedClass; }

  get subclass(): string | undefined { return this._subclass; }
  set subclass(subclass: string | undefined) { this._subclass = subclass; }

  get race(): string | undefined { return this._race; }
  set race(race: string | undefined) { this._race = race; }

  get mastery(): string | undefined { return this._mastery; }
  set mastery(mastery: string | undefined) { this._mastery = mastery; }

  get groupId(): string | undefined { return this._groupId; }
  set groupId(groupId: string | undefined) { this._groupId = groupId; }

  get guildId(): string | undefined { return this._guildId; }
  set guildId(guildId: string | undefined) { this._guildId = guildId; }

  get teamId(): string | undefined { return this._teamId; }
  set teamId(teamId: string | undefined) { this._teamId = teamId; }

  get partyId(): string | undefined { return this._partyId; }
  set partyId(partyId: string | undefined) { this._partyId = partyId; }

  get factionId(): string | undefined { return this._factionId; }
  set factionId(factionId: string | undefined) { this._factionId = factionId; }

  get channelId(): string | undefined { return this._channelId; }
  set channelId(channelId: string | undefined) { this._channelId = channelId; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default ProfileContext;
