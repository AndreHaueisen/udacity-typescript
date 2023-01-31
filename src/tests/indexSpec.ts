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
    'Mexico',
    'United States Minor Outlying Islands',
    'Bermuda',
    'Canada',
    'Saint Pierre and Miquelon',
    'United States',
    'Greenland'
  ]);
});

it('should get capitals of Central America countries', async () => {
  const data = await countries.getRegionCapitals('Central America');
  expect(data).toEqual([
    'Belmopan',
    'San Salvador',
    'Managua',
    'Panama City',
    'San José',
    'Tegucigalpa',
    'Guatemala City'
  ]);
});
