import { ITEM_IMAGE_URL } from "../Utils/Constants";
const IndividualCategory = (props)=>{
   const iitem =props.items.card.info;
    //console.log(props);
    return (
        <div className="bg-gray-100 m-2 p-2 flex justify-between">
        <div className=" w-9/12 text-left ">
            <h1 className="font-bold">{iitem.name}</h1>
            <h1>₹{iitem.price?iitem.price:iitem.defaultPrice}</h1>
            <h1>{iitem.description}</h1>
        </div>
        <div className="w-3/12 h-[100%] ">
            <div className="absolute">
            <button className="absolute bg-black text-white shadow-xl p-3 text-sm rounded-md m-auto">Add+</button>
            </div>
            <img src={ITEM_IMAGE_URL+iitem.imageId} className="object-contain "/>
        </div>
        
        </div>
    )
}
export default IndividualCategory;