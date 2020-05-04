import React from 'react';
import Restaurant from './Restaurant';

const Restaurants = ({ restaurants, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div className="restaurants-list">
      <h2>Restaurants</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th className="phone">Telephone</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
            {restaurants.length > 0 ? restaurants.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            }).map(restaurant =>
              <Restaurant 
                key={restaurant.id}
                restaurantInformation={restaurant}
              />
            ) : <tr><td align="center" colspan="4">No available Restaurants.</td></tr>}
        </tbody>
      </table>
    </div>
  )
};

export default Restaurants;