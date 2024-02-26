import { ITEM_IMAGE_URL } from "../Utils/Constants";
const CartCard =(props)=>{
    console.log(props.iitem);
    return (
        <div className="w-2/12 text-center border-black border-[1px] m-5 p-6">
            <h1 className="font-bold  p-4">{props.iitem.name}</h1>
            <img className="object-contain m-auto" src={ITEM_IMAGE_URL+props.iitem.imageId}/>
            <h1 className="mt-2">₹{props.iitem.price ? props.iitem.price/100 : props.iitem.defaultPrice/100}</h1>
        </div>
    );
}
export default CartCard;