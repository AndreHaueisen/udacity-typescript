import countries from '../index';

it('should get basic data on the country canada', async () => {
  const data = await countries.getCountry('canada');
  expect(data).toEqual({
    capital: 'Ottawa',
    region: 'Americas',
    numericCode: '124'
  });
});

it('should get the region countries of North Americas', async () => {
  const data = await countries.getRegionCountries('North America');
  expect(data).toEqual([
    'Canada',
    'Bermuda',
    'United States',
    'Mexico',
    'United States Minor Outlying Islands',
    'Greenland',
    'Saint Pierre and Miquelon'
  ]);
});

it('should get capitals of Central America countries', async () => {
  const data = await countries.getRegionCapitals('Central America');
  expect(data).toEqual([
    'San Salvador',
    'Panama City',
    'Guatemala City',
    'San José',
    'Belmopan',
    'Tegucigalpa',
    'Managua'
  ]);
});
