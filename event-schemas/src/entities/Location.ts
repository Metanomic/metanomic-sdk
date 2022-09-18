

class Location {
  private _city?: string;
  private _country?: string;
  private _continent?: string;
  private _latitude?: number;
  private _longitude?: number;
  private _speed?: number;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    city?: string,
    country?: string,
    continent?: string,
    latitude?: number,
    longitude?: number,
    speed?: number,
  }) {
    this._city = input.city;
    this._country = input.country;
    this._continent = input.continent;
    this._latitude = input.latitude;
    this._longitude = input.longitude;
    this._speed = input.speed;
  }

  get city(): string | undefined { return this._city; }
  set city(city: string | undefined) { this._city = city; }

  get country(): string | undefined { return this._country; }
  set country(country: string | undefined) { this._country = country; }

  get continent(): string | undefined { return this._continent; }
  set continent(continent: string | undefined) { this._continent = continent; }

  get latitude(): number | undefined { return this._latitude; }
  set latitude(latitude: number | undefined) { this._latitude = latitude; }

  get longitude(): number | undefined { return this._longitude; }
  set longitude(longitude: number | undefined) { this._longitude = longitude; }

  get speed(): number | undefined { return this._speed; }
  set speed(speed: number | undefined) { this._speed = speed; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Location;
