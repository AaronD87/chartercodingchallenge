import React from 'react';

const Restaurants = ({ restaurants, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
};

export default Restaurants;