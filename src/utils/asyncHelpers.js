import axios from 'axios';

export async function fetchRestaurantData(setRestaurantData, setLoading, setRestaurants) {
  setLoading(true);
  const result = await axios({
    url: 'https://code-challenge.spectrumtoolbox.com/api/restaurants',
    headers: {'Authorization': 'Api-Key q3MNxtfep8Gt'}
  });
  const sortedData = result.data.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  });
  setRestaurantData(sortedData);
  setRestaurants(sortedData);
  setLoading(false);
}

export async function fetchSearchedRestaurants(setRestaurants, setLoading, searchTerm, genre, stateData, states) {
  setLoading(true);
  const result = await axios({
    url: 'https://code-challenge.spectrumtoolbox.com/api/restaurants',
    headers: {'Authorization': 'Api-Key q3MNxtfep8Gt'}
  });

  let results = result.data;

  const hasOwn = stateData === 'All' ? [{'state': 'All'}] : states.filter((state, i) => state.hasOwnProperty(stateData));
  const stateAbbreviation = Object.values(hasOwn[0]).toString();

  if (stateData !== "All") {
    results = results.filter(restaurant => restaurant.state === stateAbbreviation);
  }

  if (genre !== "All") {
    results = results.filter(restaurant => restaurant.genre.toLowerCase().includes(genre.toLowerCase()));
  }

  if (searchTerm !== "") {
    results = results.filter(restaurant => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) || restaurant.genre.toLowerCase().includes(searchTerm.toLowerCase()) || restaurant.city.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  setRestaurants(results.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  }));
  setLoading(false);
}