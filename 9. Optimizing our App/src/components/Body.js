import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "./constants";
import { Link } from "react-router-dom";
import filterData from "../utils/helper";
import useOnline from "../Hooks/useOnline";


const Body = () => {
  // create the hooks for storing the local variable

  // const[variable name, function to update the variable]
  const [SearchInput, setSearchInput] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  // to get fetch data from the API
  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data?.json();
    //console.log(json);

    // set in the setRestaurant Function
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // custom hook
  const isOnline = useOnline();

  if(!isOnline)
  {
    return <h1>🔴 Check Your Internet Connection 🔴 </h1>
  }

  // Early return
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={SearchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(SearchInput, allRestaurants);

            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="RestrauntCard-list">
          {/* have to write the logic if no restaurants are found */}

          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant.data.id}
              >
                <RestrauntCard {...restaurant?.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
