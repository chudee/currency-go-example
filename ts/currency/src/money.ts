export default class Money {
  constructor(protected amount: number) {}

  equals(money: Money): boolean {
    return this.amount === money.amount
        && this.constructor === money.constructor;
  }
}