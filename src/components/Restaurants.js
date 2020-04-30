import React from 'react';

const Restaurants = ({ restaurants, loading, search }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div>
      {restaurants.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      }).map(restaurant =>
        <ul key={restaurant.id}>
          <li key={restaurant.id}>
            {restaurant.name}
            {restaurant.city}
            {restaurant.genre}
          </li>
        </ul>
      )}
    </div>
  )
};

export default Restaurants;