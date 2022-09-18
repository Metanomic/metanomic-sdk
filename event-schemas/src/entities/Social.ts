

class Social {
  private _recipient?: string;
  private _sender?: string;
  private _groupName?: string;
  private _via?: string;
  private _message?: string;
  private _rating?: string;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    recipient?: string,
    sender?: string,
    groupName?: string,
    via?: string,
    message?: string,
    rating?: string,
  }) {
    this._recipient = input.recipient;
    this._sender = input.sender;
    this._groupName = input.groupName;
    this._via = input.via;
    this._message = input.message;
    this._rating = input.rating;
  }

  get recipient(): string | undefined { return this._recipient; }
  set recipient(recipient: string | undefined) { this._recipient = recipient; }

  get sender(): string | undefined { return this._sender; }
  set sender(sender: string | undefined) { this._sender = sender; }

  get groupName(): string | undefined { return this._groupName; }
  set groupName(groupName: string | undefined) { this._groupName = groupName; }

  get via(): string | undefined { return this._via; }
  set via(via: string | undefined) { this._via = via; }

  get message(): string | undefined { return this._message; }
  set message(message: string | undefined) { this._message = message; }

  get rating(): string | undefined { return this._rating; }
  set rating(rating: string | undefined) { this._rating = rating; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default Social;
