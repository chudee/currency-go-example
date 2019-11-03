import { Money, Expression, Bank, Sum } from '../src/currency';

test('TestMultiplication', () => {
  const five = Money.dollar(5);
  expect(Money.dollar(10)).toEqual(five.times(2));
  expect(Money.dollar(15)).toEqual(five.times(3));
});

test('TestFrancMultiplication', () => {
  const five = Money.franc(5);
  expect(Money.franc(10)).toEqual(five.times(2));
  expect(Money.franc(15)).toEqual(five.times(3));
});

test('TestEquality', () => {
  expect(true).toEqual(Money.dollar(5).equals(Money.dollar(5)));
  expect(false).toEqual(Money.dollar(5).equals(Money.dollar(6)));
  expect(false).toEqual(Money.franc(5).equals(Money.dollar(5)));
});

test('TestCurrency', () => {
  expect('USD').toEqual(Money.dollar(1).currency());
  expect('CHF').toEqual(Money.franc(1).currency());
});

test('TestSimpleAddition', () => {
  const five = Money.dollar(5);
  const sum: Expression = five.plus(five);
  const bank: Bank = new Bank();
  const reduced: Money = bank.reduce(sum, 'USD');
  expect(Money.dollar(10)).toEqual(reduced);
});

test('TestPlusReturnsSum', () => {
  const five: Money = Money.dollar(5);
  const result: Expression = five.plus(five);
  const sum: Sum = result as Sum;
  expect(five).toEqual(sum._augend); // 덧셈의 첫 인자를 피가함수(augend)라고 한다.
  expect(five).toEqual(sum._addend);
});

test('TestReduceSum', () => {
  const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(sum, 'USD');
  expect(Money.dollar(7)).toEqual(result);
});

test('TestReduceMoney', () => {
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(Money.dollar(1), 'USD');
  expect(Money.dollar(1)).toEqual(result);
});
