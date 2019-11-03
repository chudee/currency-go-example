import { Money, Expression, Bank } from '../src/currency';

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
