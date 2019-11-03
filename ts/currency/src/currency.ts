export class Money {
  constructor(
    protected _amount: number,
    protected _currency: string,
  ) {
    this._amount = _amount;
    this._currency = _currency;
  }

  equals(money: Money): boolean {
    return this._amount === money._amount
        && this.currency() === money.currency();
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money( this._amount * multiplier, this._currency);
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}