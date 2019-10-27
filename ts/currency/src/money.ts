export default class Money {
  protected amount: number;

  equals(money: Money): boolean {
    return this.amount === money.amount;
  }
}