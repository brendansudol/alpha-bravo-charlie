export const getParams = str =>
  str
    .slice(1)
    .split('&')
    .filter(d => d.length)
    .reduce((params, hash) => {
      const [key, val] = hash.split('=')
      const valGood = val === undefined ? null : decodeURIComponent(val)
      return Object.assign(params, { [key]: valGood })
    }, {})

export const sources = [
  { id: 'nato', label: 'NATO' },
  { id: 'west-union', label: 'Western Union' },
  { id: 'itu-1932', label: 'ITU (1932)' },
  { id: 'us-army-1916', label: 'US Army (1916)' },
  { id: 'uk-navy-1914', label: 'UK Navy (1914)' }
]

export const codeWords = {
  A: {
    nato: 'Alpha',
    'west-union': 'Adams',
    'itu-1932': 'Amsterdam',
    'us-army-1916': 'Able',
    'uk-navy-1914': 'Apples'
  },
  B: {
    nato: 'Bravo',
    'west-union': 'Boston',
    'itu-1932': 'Baltimore',
    'us-army-1916': 'Boy',
    'uk-navy-1914': 'Butter'
  },
  C: {
    nato: 'Charlie',
    'west-union': 'Chicago',
    'itu-1932': 'Casablanca',
    'us-army-1916': 'Cast',
    'uk-navy-1914': 'Charlie'
  },
  D: {
    nato: 'Delta',
    'west-union': 'Denver',
    'itu-1932': 'Denmark',
    'us-army-1916': 'Dock',
    'uk-navy-1914': 'Duff'
  },
  E: {
    nato: 'Echo',
    'west-union': 'Easy',
    'itu-1932': 'Edison',
    'us-army-1916': 'Easy',
    'uk-navy-1914': 'Edward'
  },
  F: {
    nato: 'Foxtrot',
    'west-union': 'Frank',
    'itu-1932': 'Florida',
    'us-army-1916': 'Fox',
    'uk-navy-1914': 'Freddy'
  },
  G: {
    nato: 'Golf',
    'west-union': 'George',
    'itu-1932': 'Gallipoli',
    'us-army-1916': 'George',
    'uk-navy-1914': 'George'
  },
  H: {
    nato: 'Hotel',
    'west-union': 'Henry',
    'itu-1932': 'Havana',
    'us-army-1916': 'Have',
    'uk-navy-1914': 'Harry'
  },
  I: {
    nato: 'India',
    'west-union': 'Ida',
    'itu-1932': 'Italia',
    'us-army-1916': 'Item',
    'uk-navy-1914': 'Ink'
  },
  J: {
    nato: 'Juliet',
    'west-union': 'John',
    'itu-1932': 'Jerusalem',
    'us-army-1916': 'Jig',
    'uk-navy-1914': 'Johnnie'
  },
  K: {
    nato: 'Kilo',
    'west-union': 'King',
    'itu-1932': 'Kilogramme',
    'us-army-1916': 'King',
    'uk-navy-1914': 'King'
  },
  L: {
    nato: 'Lima',
    'west-union': 'Lincoln',
    'itu-1932': 'Liverpool',
    'us-army-1916': 'Love',
    'uk-navy-1914': 'London'
  },
  M: {
    nato: 'Mike',
    'west-union': 'Mary',
    'itu-1932': 'Madagascar',
    'us-army-1916': 'Mike',
    'uk-navy-1914': 'Monkey'
  },
  N: {
    nato: 'November',
    'west-union': 'New York',
    'itu-1932': 'New York',
    'us-army-1916': 'Nan',
    'uk-navy-1914': 'Nuts'
  },
  O: {
    nato: 'Oscar',
    'west-union': 'Ocean',
    'itu-1932': 'Oslo',
    'us-army-1916': 'Opal',
    'uk-navy-1914': 'Orange'
  },
  P: {
    nato: 'Papa',
    'west-union': 'Peter',
    'itu-1932': 'Paris',
    'us-army-1916': 'Pup',
    'uk-navy-1914': 'Pudding'
  },
  Q: {
    nato: 'Quebec',
    'west-union': 'Queen',
    'itu-1932': 'Quebec',
    'us-army-1916': 'Quack',
    'uk-navy-1914': 'Queenie'
  },
  R: {
    nato: 'Romeo',
    'west-union': 'Roger',
    'itu-1932': 'Roma',
    'us-army-1916': 'Rush',
    'uk-navy-1914': 'Robert'
  },
  S: {
    nato: 'Sierra',
    'west-union': 'Sugar',
    'itu-1932': 'Santiago',
    'us-army-1916': 'Sail',
    'uk-navy-1914': 'Sugar'
  },
  T: {
    nato: 'Tango',
    'west-union': 'Thomas',
    'itu-1932': 'Tripoli',
    'us-army-1916': 'Tare',
    'uk-navy-1914': 'Tommy'
  },
  U: {
    nato: 'Uniform',
    'west-union': 'Union',
    'itu-1932': 'Uppsala',
    'us-army-1916': 'Unit',
    'uk-navy-1914': 'Uncle'
  },
  V: {
    nato: 'Victor',
    'west-union': 'Victor',
    'itu-1932': 'Valencia',
    'us-army-1916': 'Vice',
    'uk-navy-1914': 'Vinegar'
  },
  W: {
    nato: 'Whiskey',
    'west-union': 'William',
    'itu-1932': 'Washington',
    'us-army-1916': 'Watch',
    'uk-navy-1914': 'William'
  },
  X: {
    nato: 'X-ray',
    'west-union': 'X-ray',
    'itu-1932': 'Xanthippe',
    'us-army-1916': 'X-ray',
    'uk-navy-1914': 'Xerxes'
  },
  Y: {
    nato: 'Yankee',
    'west-union': 'Young',
    'itu-1932': 'Yokohama',
    'us-army-1916': 'Yoke',
    'uk-navy-1914': 'Yellow'
  },
  Z: {
    nato: 'Zulu',
    'west-union': 'Zero',
    'itu-1932': 'Zurich',
    'us-army-1916': 'Zed',
    'uk-navy-1914': 'Zebra'
  }
}
