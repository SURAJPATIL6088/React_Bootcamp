import { useState, useEffect } from "react";

const useRestaurantData = (swiggy_api_URL) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  // // to get fetch data from the API
  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data?.json();
    //console.log(json);

    // set in the setRestaurant Function
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return [allRestaurants, filteredRestaurants];
};

