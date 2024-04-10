import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import CategoriesMenu from "./CategoriesMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resMenu === null) return <ShimmerUI />;
  console.log(resMenu);
  const { name, cuisines, avgRating } = resMenu.cards[2]?.card?.card?.info;
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="m-4 w-9/12 mx-auto">
      <div className="flex justify-between mt-2 shadow-lg">
        <div className="justify-center text-center">
          <h1 className="font-bold m-1 px-4 py-2 text-lg">{name}</h1>
          <h2 className="font-bold  text-xs m-1 px-4 pb-3 text-left">
            {cuisines.join(" , ")}
          </h2>
        </div>
        <div className="m-2 p-6">
          <span>⭐ {avgRating}</span>
        </div>
      </div>
      <div className="text-center m-4 p-4 bg-gray-100">
        {categories.map((item, index) => (
          <CategoriesMenu
            key={index}
            itemx={item}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
