import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../constants";

const RestrutantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API_URL + resId);
      const json = await response.json();

      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5].card.card;
  console.log("itemCards",itemCards)
  //   const categories =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //       (c) =>
  //         c.card?.["card"]?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //     );

  //   const categories =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //       (c) =>
  //         c.card?.["card"]?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //     );
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestrutantMenu;
