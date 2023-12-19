import { IMG_CDN_URL } from "../constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestroCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={IMG_CDN_URL} />

      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisnes.join(", ")}</h4>
      <h4>{resData.data.avgRating}</h4>
      <h4>{resData.data.costForTwo}</h4>
      <h4>{resData.data.deliveryTime}</h4>
    </div>
  );
};

export default RestroCard;
