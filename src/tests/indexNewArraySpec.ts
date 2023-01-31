import newArr from '../indexNewArray';

const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe('newArr', () => {
  it('should make a new array containing dog', () => {
    expect(newArr(3, wordArr)).toContain('dog');
  });
  it('make a new array containing 3', () => {
    expect(newArr(3, wordArr)).toContain(3);
  });
});
