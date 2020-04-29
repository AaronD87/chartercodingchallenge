import React, { useEffect, useState } from 'react';
import { fetchRestaurantData } from '../utils/asyncHelpers';
import useDropdown from './useDropdown';
import Pagination from './Pagination';
import { genresArray, states } from '../utils/helpers'; 
import Restaurants from './Restaurants';

const SearchParams = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, GenreDropdown] = useDropdown("Genres", "All", genres);
  const [state, StateDropdown] = useDropdown("States", "All", states);
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchRestaurantData(setRestaurantData, setLoading);
  }, []);

  useEffect(() => {
    genresArray(restaurantData, setGenres);
  }, [restaurantData]);

  const indexOfLastRestaurant = currentPage * itemsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - itemsPerPage;
  const currentRestaurants = restaurantData.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  console.log(indexOfFirstRestaurant, indexOfLastRestaurant)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        fetchRestaurantData(setRestaurantData, setLoading);
      }}>
        <label htmlFor="search">
          Search
          <input
            id="search"
            value={searchTerm}
            placeholder="Search..."
            onChange={e => setSearchTerm(e.target.value)}
          />
        </label>
        <GenreDropdown />
        <StateDropdown />
        <button>Submit</button>
      </form>
      { restaurantData && <Restaurants restaurants={currentRestaurants} loading={loading} />}
      <Pagination
        restaurantsPerPage={itemsPerPage}
        totalRestaurants={restaurantData.length}
        paginate={paginate}
      />

    </div>
  );
};

export default SearchParams;
