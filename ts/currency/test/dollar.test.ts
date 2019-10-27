import Dollar from '../src/dollar';

test('TestMultiplication', () => {
  const five = new Dollar(5);
  expect(new Dollar(10)).toEqual(five.times(2));
  expect(new Dollar(15)).toEqual(five.times(3));
});

test('TestEquality', () => {
  const five = new Dollar(5);
  expect(true).toBe(five.equals(new Dollar(5)));
  expect(false).toBe(five.equals(new Dollar(6)));
});