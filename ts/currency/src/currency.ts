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

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  get amount() {
    return this._amount;
  }

  reduce(to: string): Money {
    return this;
  }
}

export interface Expression {
  reduce: (to: string) => Money
}

export class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}

export class Sum implements Expression {
  constructor(
    public _augend: Money,
    public _addend: Money
  ) {
    this._augend = _augend;
    this._addend = _addend;
  }

  reduce(to: string): Money {
    const amount: number = this._augend.amount + this._addend.amount;
    return new Money(amount, to);
  }
}
