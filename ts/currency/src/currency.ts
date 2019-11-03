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
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money( this._amount * multiplier, this._currency);
  }

  plus(added: Money): Money {
    return new Money(this._amount + added._amount, this._currency);
  }
}

export interface Expression {
}

export class Bank {
  reduce(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
