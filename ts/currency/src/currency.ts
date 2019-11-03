export abstract class Money {
  protected constructor(
    protected _amount: number,
    protected _currency: string) {}

  equals(money: Money): boolean {
    return this._amount === money._amount
        && this.constructor === money.constructor;
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
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.dollar( this._amount * multiplier);
  }
}

class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.franc( this._amount * multiplier);
  }
}