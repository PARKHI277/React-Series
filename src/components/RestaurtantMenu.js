import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../constants";
import { IMG_CDN_URL } from "../constants";
import useRestaurtant from "../utils/useRestraunt";
import RestaurtantCategory from "./ResCategory";

const RestrutantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const dummy = "Dummy Data";
  const [showIndex, setShowIndex] = useState(null);

  const restaurant = useRestaurtant(resId);

  if (restaurant === null) {
    return <Shimmer />;
  }

  const { name } = restaurant?.cards[0]?.card?.card?.info;

  // console.log(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  console.log(restaurant);

  const categories =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        console.log(c.card.card?.["@type"]);
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(categories);

  console.log(
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
  );

  const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;
  return (
    <div className="text-center bg-lime-500">
      <img
        className="h-20"
        src={
          IMG_CDN_URL +
          restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
        }
      />
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>
      {/* categoried */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurtantCategory
          key={category?.card?.card.title}
          data={category?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}

      {/* <h2>Menu</h2>
      <ul className="items-center">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestrutantMenu;
