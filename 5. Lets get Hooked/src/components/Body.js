import { Restrauntlist } from "./constants";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

function filterData(SearchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(SearchInput)
  );

  return filterData;
}

const BodyComponent = () => {
  // create the hooks for storing the local variable

  // const[variable name, function to update the variable]
  const [restaurants, setRestaurants] = useState(Restrauntlist);
  const [SearchInput, setSearchInput] = useState();

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
          className="search_btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(SearchInput, restaurants);

            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="RestrauntCard-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
