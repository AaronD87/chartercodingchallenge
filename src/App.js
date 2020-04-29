import React, { useEffect, useState } from 'react';
import { fetchRestaurantData } from './utils/asyncHelpers';
import useDropdown from './components/useDropdown';
import { genresArray, states } from './utils/helpers'; 

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, GenreDropdown] = useDropdown("Genres", "All", genres);
  const [state, StateDropdown] = useDropdown("States", "All", states);

  useEffect(() => {
    fetchRestaurantData(setRestaurantData);
  }, []);

  useEffect(() => {
    genresArray(restaurantData, setGenres);
  }, [restaurantData]);

  console.log(restaurantData);

  return (
    <div className="App">
      <GenreDropdown />
      <StateDropdown />
    </div>
  );
}

export default App;
