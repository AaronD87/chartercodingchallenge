import React, { useEffect, useState } from 'react';
import { fetchRestaurantData } from './utils/asyncHelpers';

function App() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchRestaurantData(setRestaurantData);
  }, []);

  console.table(restaurantData);

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
