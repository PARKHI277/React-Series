import RestroCard from "./RestrutantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
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

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>No internt connection</h1>;
  }
  const { loggedInUser, setUserName } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                // filter data
                const data = filterData(searchText, listOfRestaurants);
                setFilteredRestaurant(data);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 3
                );
                setListOfRestraunt(filteredList);
              }}
            >
              Top Rated Restaurtants
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <label>UserName : </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
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
