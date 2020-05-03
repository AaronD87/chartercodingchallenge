export const states = [{'Alabama': 'AL'},
                       {'Alaska': 'AK'},
                       {'Arizona': 'AZ'},
                      //  'Arkansas',
                      //  'California',
                      //  'Colorado',
                      //  'Connecticut',
                      //  'Delaware',
                      //  'District of Columbia',
                      //  'Florida',
                      //  'Georgia',
                      //  'Hawaii',
                      //  'Idaho',
                      //  'Illinois',
                      //  'Indiana',
                      //  'Iowa',
                      //  'Kansas',
                      //  'Kentucky',
                      //  'Louisiana',
                      //  'Maine',
                      //  'Maryland',
                      //  'Massachusetts',
                      //  'Michigan',
                      //  'Minnesota',
                      //  'Mississippi',
                      //  'Missouri',
                      //  'Montana',
                      //  'Nebraska',
                      //  'Nevada',
                      //  'New Hampshire',
                      //  'New Jersey',
                      //  'New Mexico',
                      //  'New York',
                      //  'North Carolina',
                      //  'North Dakota',
                      //  'Ohio',
                      //  'Oklahoma',
                      //  'Oregon',
                      //  'Pennsylvania',
                      //  'Rhode Island',
                      //  'South Carolina',
                      //  'South Dakota',
                      //  'Tennessee',
                      //  'Texas',
                      //  'Utah',
                      //  'Vermont',
                      //  'Virgin Island',
                      //  'Virginia',
                      //  'Washington',
                      //  'West Virginia',
                      //  'Wisconsin',
                      //  'Wyoming'
                      ]

export const stateNames = states.map((_,i) => Object.keys(states[i]));

export const stateAbbreviations = states.map((_,i) => Object.values(states[i]));

export const genresArray = (restaurantData, setGenres) => {
  const genres = restaurantData.map(({ genre }) => genre.split(","));
  const newGenres = [].concat.apply([], [...genres]);
  const genreSet = new Set(newGenres);
  const filteredGenres = [...genreSet];
  setGenres(filteredGenres.sort());
}