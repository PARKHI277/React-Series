import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../constants";
import { IMG_CDN_URL } from "../constants";
import useRestaurtant from "../utils/useRestraunt";

const RestrutantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const restaurant = useRestaurtant(resId);

  if (restaurant === null) {
    return <Shimmer />;
  }

  console.log(restaurant);
  const { name, cuisines, costForTwoMessage } =
    restaurant?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8].card.card;

  return (
    <div className="menu">
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h1>{name}</h1>
      <p>
        {restaurant?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestrutantMenu;
