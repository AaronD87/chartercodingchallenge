import axios from 'axios';

export async function fetchRestaurantData(setRestaurantData, setLoading) {
  setLoading(true);
  const result = await axios({
    url: 'https://code-challenge.spectrumtoolbox.com/api/restaurants',
    headers: {'Authorization': 'Api-Key q3MNxtfep8Gt'}
  });
  setRestaurantData(result.data.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  }));
  setLoading(false);
}

export async function fetchSearchedRestaurants(setRestaurants, setLoading, searchTerm, genre, state) {
  setLoading(true);
  const result = await axios({
    url: 'https://code-challenge.spectrumtoolbox.com/api/restaurants',
    headers: {'Authorization': 'Api-Key q3MNxtfep8Gt'}
  });

  console.log(genre)
  const items = result.data.filter((data) => {
    // if(searchTerm === "" && genre === "All") {
    //   console.log("hi")
    //   return data;
    // }
    // else if(data.name.toLowerCase().includes(searchTerm.toLowerCase()) || data.genre.toLowerCase().includes(searchTerm.toLowerCase()) || data.city.toLowerCase().includes(searchTerm.toLowerCase()) || data.genre.toLowerCase().includes(genre.toLowerCase())){
    //   return data
    // }
    if (data.genre.toLowerCase().includes(genre.toLowerCase())) {
      return data;
    }
    return null;
  })

  setRestaurants(items.sort());
  setLoading(false);
}