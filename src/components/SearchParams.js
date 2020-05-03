import React, { useEffect, useState } from 'react';
import { fetchRestaurantData, fetchSearchedRestaurants } from '../utils/asyncHelpers';
import useDropdown from './useDropdown';
import Pagination from './Pagination';
import { genresArray, states, stateNames } from '../utils/helpers'; 
import Restaurants from './Restaurants';

const SearchParams = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, GenreDropdown] = useDropdown("Genres", "All", genres);
  const [stateData, StateDropdown] = useDropdown("States", "All", stateNames);
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchRestaurantData(setRestaurantData, setLoading, setRestaurants);
  }, []);

  useEffect(() => {
    genresArray(restaurantData, setGenres);
  }, [restaurantData]);

  useEffect(() => {
    if (searchTerm === "") {
      setCurrentPage(1)
    }
  }, [searchTerm])

  const indexOfLastRestaurant = currentPage * itemsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - itemsPerPage;
  const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
  const totalRestaurants = restaurants.length

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        setCurrentPage(1);
        fetchSearchedRestaurants(setRestaurants, setLoading, searchTerm, genre, stateData, states);
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
      { restaurantData && <Restaurants restaurants={currentRestaurants} loading={loading} search={searchTerm} />}
      <Pagination
        restaurantsPerPage={itemsPerPage}
        totalRestaurants={totalRestaurants}
        paginate={paginate}
      />

    </div>
  );
};

export default SearchParams;
