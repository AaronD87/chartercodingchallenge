import React from 'react'

const Restaurant = ({ restaurantInformation }) => {
  const { name, city, state, telephone, genre } = restaurantInformation;
  let genres = genre.split(',').join(', ')

  return (
    <tr>
      <td>{name}</td>
      <td>{city}, {state}</td>
      <td>{telephone}</td>
      <td>{genres}</td>
    </tr>
  )
}

export default Restaurant;