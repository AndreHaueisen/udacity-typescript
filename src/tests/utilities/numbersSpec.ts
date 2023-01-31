import { numbers } from '../../utilities/numbers';

describe('sum', () => {
  it('sums 1 and 2 to equal 3', () => {
    const result = numbers.sum(1, 2);
    expect(result).toEqual(3);
  });

  it('sums 0 and 0 to equal 0', () => {
    const result = numbers.sum(0, 0);
    expect(result).toEqual(0);
  });

  it('should be a sum greater than 10', () => {
    expect(numbers.sum(3, 10)).toBeGreaterThan(10);
  });
  it('should be a sum less than 10', () => {
    expect(numbers.sum(-3, 10)).toBeLessThan(10);
  });
});

describe('multiply', () => {
  it('multiplies 1 and 2 to equal 2', () => {
    const result = numbers.multiply(1, 2);
    expect(result).toEqual(2);
  });

  it('multiplies 0 and 0 to equal 0', () => {
    const result = numbers.multiply(0, 0);
    expect(result).toEqual(0);
  });

  it('should multiply 3 by 5 and be 15', () => {
    expect(numbers.multiply(3, 5)).toBe(15);
  });
  it('should multiply 0 by 5 to be falsy', () => {
    expect(numbers.multiply(0, 5)).toBeFalsy();
  });
});
