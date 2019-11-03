export abstract class Money {
  protected constructor(protected amount: number) {}

  equals(money: Money): boolean {
    return this.amount === money.amount
        && this.constructor === money.constructor;
  }

  static dollar(amount: number) {
    return new Dollar(amount);
  }

  static franc(amount: number) {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Dollar( this.amount * multiplier);
  }
}

class Franc extends Money {
  constructor(protected amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Franc( this.amount * multiplier);
  }
}