import Dollar from '../src/dollar';
import Franc from '../src/franc';

test('TestMultiplication', () => {
  const five = new Dollar(5);
  expect(new Dollar(10)).toEqual(five.times(2));
  expect(new Dollar(15)).toEqual(five.times(3));
});

test('TestFrancMultiplication', () => {
  const five = new Franc(5);
  expect(new Franc(10)).toEqual(five.times(2));
  expect(new Franc(15)).toEqual(five.times(3));
});

test('TestEquality', () => {
  expect(true).toEqual(new Dollar(5).equals(new Dollar(5)));
  expect(false).toEqual(new Dollar(5).equals(new Dollar(6)));
  expect(true).toEqual(new Franc(5).equals(new Franc(5)));
  expect(false).toEqual(new Franc(5).equals(new Franc(6)));
  expect(false).toEqual(new Dollar(5).equals(new Franc(5)));
});