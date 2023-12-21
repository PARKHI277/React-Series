import { reslistObj } from "../constants";
import RestroCard from "./RestrutantCard";
import { useState } from "react";

function filterData(searchInput, restaurtants) {
  const filterData = restaurtants.filter((restaurtant) =>
    restaurtant.data.name.includes(searchInput)
  );
  return filterData;
}
// Hooks are normal function. one of them is useStates
const Body = () => {
  const [restaurtants, setRestaurtants] = useState(reslistObj);
  const [searchInput, setSearchInput] = useState(""); //return array first name will be name of local variable
  // const [searchClicked, setSearchClicked] = useState("false");

  return (
    <>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          {/* <h1>{searchClicked}</h1> */}
          <button
            className="search-btn"
            onClick={() => {
              // filter data
              const data = filterData(searchInput, restaurtants);
              setRestaurtants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-container">
          {restaurtants.map((restaurtant) => (
            <RestroCard key={restaurtant.data.id} resData={restaurtant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
