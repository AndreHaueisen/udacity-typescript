import { arrays } from '../../utilities/arrays';

describe('cut3', () => {
  it('it turns [1, 2, 3] into [1, 2]', () => {
    const result = arrays.cut3([1, 2, 3]);
    expect(result).toEqual([1, 2]);
  });

  it('turns [1,2,3,4] into [1,2,4]', () => {
    const result = arrays.cut3([1, 2, 3, 4]);
    expect(result).toEqual([1, 2, 4]);
  });

  it('does nothing to an empty array', () => {
    const result = arrays.cut3([]);
    expect(result).toEqual([]);
  });

  it('does nothing to an array with one item', () => {
    const result = arrays.cut3([1]);
    expect(result).toEqual([1]);
  });

  it('does nothing to an array with two items', () => {
    const result = arrays.cut3([1, 2]);
    expect(result).toEqual([1, 2]);
  });
});
