import { strings } from '../../utilities/strings';

describe('Captillize', () => {
  it('expects "the quick brown fox" to equal "The Quick Brown Fox"', () => {
    expect(strings.capitalize('the quick brown fox')).toEqual(
      'The Quick Brown Fox'
    );
  });

  it('expects "THE QUICK BROWN" to equal "THE QUICK BROWN"', () => {
    const result = strings.capitalize('THE QUICK BROWN');
    expect(result).toEqual('THE QUICK BROWN');
  });

  it('does nothing to an empty string', () => {
    const result = strings.capitalize('');
    expect(result).toEqual('');
  });

  it('does nothing if the string has no letters', () => {
    const result1 = strings.capitalize('123');
    expect(result1).toEqual('123');

    const result2 = strings.capitalize(' ');
    expect(result2).toEqual(' ');
  });
});
