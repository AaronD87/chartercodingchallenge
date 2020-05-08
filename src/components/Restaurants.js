import React from 'react';
import Restaurant from './Restaurant';
import '../App.css';

const Restaurants = ({ restaurants, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const headers = ['Name', 'Location', 'Telephone', 'Genres'];
  const headersList = headers.map((header, i) => {
    return (
      <th className={'table-header'} key={i}>
        {header}
      </th>
    )
  });

  const restaurantTableItems = restaurants
    .sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
      })
    .map(restaurant =>
      <Restaurant 
        key={restaurant.id}
        restaurantInformation={restaurant}
      />
    );
  
  const noRestaurantsFound = <tr><td align="center" colspan="4">No available Restaurants.</td></tr>
  
  
  return (
    <table className="restaurant-table">
      <thead>
        <tr>
          {headersList}
        </tr>
      </thead>
      <tbody>
          {restaurants.length <= 0 && noRestaurantsFound}
          {restaurantTableItems}
      </tbody>
    </table>
  )
};

export default Restaurants;