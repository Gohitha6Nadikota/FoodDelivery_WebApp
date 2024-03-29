import React, { useState } from "react";
import IndividualCategory from "./IndividualCategory";
function CategoriesMenu({ itemx, showItems, setShowIndex }) {
  //console.log(itemx);
  const pitem = itemx?.card?.card;
  const changeStatus = () => {
    setShowIndex();
    setToggle(!toggle);
  };
  const [toggle,setToggle] = useState(false);
  return (
    <div className="bg-gray-50">
      <div
        className=" flex justify-between px-2 py-3 my-3 shadow-md bg-white"
        onClick={changeStatus}
      >
        <h1 className="font-bold">
          {pitem.title} ({pitem.itemCards.length})
        </h1>
        <h1>⬇️</h1>
      </div>
      <div className="text-center">
        {toggle && showItems &&
          pitem.itemCards.map((iitem,index) => <IndividualCategory key={index} items={iitem} />)}
      </div>
    </div>
  );
}
export default CategoriesMenu;
