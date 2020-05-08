import React from 'react'

const Restaurant = ({ restaurantInformation }) => {
  const { name, city, state, telephone, genre } = restaurantInformation;
  const genres = genre.split(',').join(', ')

  return (
    <tr className="table-row">
      <td className='table-data'>{name}</td>
      <td className='table-data'>{city}, {state}</td>
      <td className='table-data'>{telephone}</td>
      <td className='table-data'>{genres}</td>
    </tr>
  )
}

export default Restaurant;