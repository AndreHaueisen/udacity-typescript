import { arrays } from '../../utilities/arrays';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

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

  it('should contain 3 items except rabbit', () => {
    expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
  });
  it('should not contain the third index rabbit', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
  });
});

describe('lgNum', () => {
  it('should have 6 be largest number', () => {
    expect(arrays.lgNum(numArr)).toEqual(6);
  });
  it('should not have a large number and be falsy', () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy();
  });
});

describe('addArr', () => {
  it('should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
  });
  it('should add numbers in array and be 18}', () => {
    expect(arrays.addArr(numArr)).toBe(18);
  });
});

describe('concatArr', () => {
  it('should concatinate 2 arrays to not equal the first', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
  });
  it('should concatinate 2 arrays to not equal the second', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
  });
});
