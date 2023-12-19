import { reslistObj } from "../constants";
import RestroCard from "./RestrutantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {reslistObj.map((restaurtant) => (
          <RestroCard key={restaurtant.data.id} resData={restaurtant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
