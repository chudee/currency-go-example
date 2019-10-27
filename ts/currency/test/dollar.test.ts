import Dollar from '../src/dollar';

test('TestMultiplication', () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(product.amount).toBe(10);
  product = five.times(3);
  expect(product.amount).toBe(15);
});

test('TestEquality', () => {
  const five = new Dollar(5);
  expect(true).toBe(five.equals(new Dollar(5)));
  expect(false).toBe(five.equals(new Dollar(6)));
});