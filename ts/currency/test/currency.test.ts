import { Money } from '../src/currency';

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
  expect(true).toEqual(Money.franc(5).equals(Money.franc(5)));
  expect(false).toEqual(Money.franc(5).equals(Money.franc(6)));
  expect(false).toEqual(Money.dollar(5).equals(Money.franc(5)));
});