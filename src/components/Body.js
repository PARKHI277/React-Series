import RestroCard from "./RestrutantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurtants) {
  const filterData = restaurtants.filter((restaurtant) =>
    restaurtant.info.name.includes(searchInput)
  );
  return filterData;
}
// Hooks are normal function. one of them is useStates
const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurrants();
  }, []);
  async function getRestaurrants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestraunt(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* <h1>{searchClicked}</h1> */}
          <button
            className="search-btn"
            onClick={() => {
              // filter data
              const data = filterData(searchText, listOfRestaurants);
              setFilteredRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurtant) => (
            <Link
              key={restaurtant.info.id}
              to={"/restaurants/" + restaurtant.info.id}
            >
              <RestroCard resData={restaurtant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
