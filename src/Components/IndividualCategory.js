import { ITEM_IMAGE_URL } from "../Utils/Constants";
import {useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const IndividualCategory = (props) => {
  //console.log(props);
  const iitem = props.items?.card?.info;
  //console.log(iitem);
  const dispatch =useDispatch();
  const handleItem =(iitem)=>{
    //console.log(iitem);
   dispatch(addItem(iitem));
  }
  return (
    <>
    <div className="bg-gray-100 m-2 p-2 flex justify-between">
      <div className=" w-9/12 text-left ">
        <h1 className="font-bold">{iitem.name}</h1>
        <h1>₹{iitem.price ? iitem.price/100 : iitem.defaultPrice/100}</h1>
        <h1>{iitem.description}</h1>
      </div>
      <div className="w-3/12 h-[100%] ">
        <div className="absolute">
          <button onClick={()=>{handleItem(iitem)}}className="absolute bg-black text-white shadow-xl p-3 text-sm rounded-md m-auto">
            Add+
          </button>
        </div>
        <img src={ITEM_IMAGE_URL + iitem.imageId} className="object-contain " />
      </div>
    </div>
    <div class="border-b border-solid border-1"></div>
    </>
  );
};
export default IndividualCategory;
