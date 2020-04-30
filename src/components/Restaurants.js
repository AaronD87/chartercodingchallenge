import React from 'react';

const Restaurants = ({ restaurants, loading, search }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // const items = restaurants.filter((data) => {
  //   if(search === "")
  //     return data
  //   else if(data.name.toLowerCase().includes(search.toLowerCase()) || data.genre.toLowerCase().includes(search.toLowerCase()) || data.city.toLowerCase().includes(search.toLowerCase())){
  //     return data
  //   }
  //   return null;
  // }).map(restaurant => {
  //   return (
  //     <ul key={restaurant.id}>
  //       <li key={restaurant.id}>
  //         {restaurant.name}
  //         {restaurant.city}
  //         {restaurant.genre}
  //       </li>
  //     </ul>
  //   )
  // })

  return (
    <div>
      {restaurants.map(restaurant =>
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