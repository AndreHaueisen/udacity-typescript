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
});
