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
});
