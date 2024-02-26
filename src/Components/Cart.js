import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../Utils/cartSlice";

const Cart = ()=>{
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch =useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }
    //console.log(cartItems);
    return (
        <div className="w-12/12 p-4 m-auto">
            <h1 className="font-bold text-center font-lg ">Cart</h1>
            <div className="flex justify-end mb-2">
            <button className="bg-black text-white p-2 m-2 rounded " onClick={handleClearCart}> Clear Cart </button>
            </div>
            <div className="w-12/12 flex flex-wrap">
                {cartItems.length!==0 &&
                cartItems.map((item,index)=>(<CartCard key={item.id}iitem={item}/>))} 
            </div>
        </div>
    );
}
export default Cart;