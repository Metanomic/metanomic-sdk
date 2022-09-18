import Identity from './Identity';
import Content from './Content';
import Prize from './Prize';
import Gear from './Gear';
import TxType from './TxType';
import Transaction from './Transaction';
import Price from './Price';
import Social from './Social';
import Mission from './Mission';
import Advertisement from './Advertisement';
import AnonymousSchema_4398 from './AnonymousSchema_4398';

class TheValuePayload {
  private _identity?: Identity;
  private _content?: Content;
  private _linkedContent?: Content;
  private _prize?: Prize;
  private _gear?: Gear;
  private _txType?: TxType;
  private _transaction?: Transaction;
  private _price?: Price;
  private _social?: Social;
  private _mission?: Mission;
  private _ad?: Advertisement;
  private _customRef?: string;
  private _customValue?: number;
  private _customMeta?: AnonymousSchema_4398;
  private _additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;

  constructor(input: {
    identity?: Identity,
    content?: Content,
    linkedContent?: Content,
    prize?: Prize,
    gear?: Gear,
    txType?: TxType,
    transaction?: Transaction,
    price?: Price,
    social?: Social,
    mission?: Mission,
    ad?: Advertisement,
    customRef?: string,
    customValue?: number,
    customMeta?: AnonymousSchema_4398,
  }) {
    this._identity = input.identity;
    this._content = input.content;
    this._linkedContent = input.linkedContent;
    this._prize = input.prize;
    this._gear = input.gear;
    this._txType = input.txType;
    this._transaction = input.transaction;
    this._price = input.price;
    this._social = input.social;
    this._mission = input.mission;
    this._ad = input.ad;
    this._customRef = input.customRef;
    this._customValue = input.customValue;
    this._customMeta = input.customMeta;
  }

  get identity(): Identity | undefined { return this._identity; }
  set identity(identity: Identity | undefined) { this._identity = identity; }

  get content(): Content | undefined { return this._content; }
  set content(content: Content | undefined) { this._content = content; }

  get linkedContent(): Content | undefined { return this._linkedContent; }
  set linkedContent(linkedContent: Content | undefined) { this._linkedContent = linkedContent; }

  get prize(): Prize | undefined { return this._prize; }
  set prize(prize: Prize | undefined) { this._prize = prize; }

  get gear(): Gear | undefined { return this._gear; }
  set gear(gear: Gear | undefined) { this._gear = gear; }

  get txType(): TxType | undefined { return this._txType; }
  set txType(txType: TxType | undefined) { this._txType = txType; }

  get transaction(): Transaction | undefined { return this._transaction; }
  set transaction(transaction: Transaction | undefined) { this._transaction = transaction; }

  get price(): Price | undefined { return this._price; }
  set price(price: Price | undefined) { this._price = price; }

  get social(): Social | undefined { return this._social; }
  set social(social: Social | undefined) { this._social = social; }

  get mission(): Mission | undefined { return this._mission; }
  set mission(mission: Mission | undefined) { this._mission = mission; }

  get ad(): Advertisement | undefined { return this._ad; }
  set ad(ad: Advertisement | undefined) { this._ad = ad; }

  get customRef(): string | undefined { return this._customRef; }
  set customRef(customRef: string | undefined) { this._customRef = customRef; }

  get customValue(): number | undefined { return this._customValue; }
  set customValue(customValue: number | undefined) { this._customValue = customValue; }

  get customMeta(): AnonymousSchema_4398 | undefined { return this._customMeta; }
  set customMeta(customMeta: AnonymousSchema_4398 | undefined) { this._customMeta = customMeta; }

  get additionalProperties(): Map<String, object | string | number | Array<unknown> | boolean | null> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<String, object | string | number | Array<unknown> | boolean | null> | undefined) { this._additionalProperties = additionalProperties; }
}
export default TheValuePayload;
