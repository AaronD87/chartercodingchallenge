import axios from 'axios';

export async function fetchRestaurantData(setRestaurantData, setLoading) {
  setLoading(true);
  const result = await axios({
    url: 'https://code-challenge.spectrumtoolbox.com/api/restaurants',
    headers: {'Authorization': 'Api-Key q3MNxtfep8Gt'}
  });
  setRestaurantData(result.data);
  setLoading(false);
}