import { CDN_URL } from "../Utils/Constants";
import {useState,useContext} from "react";
import { Link, useSearchParams } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector} from "react-redux";
import Logo from '../Images/Logo.jpeg';
const Header=()=>
{
    const [stageVariable ,setStageVariable]=useState("Login");
    const online = useOnlineStatus();
    const {loggedInUser} =useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between shadow-md">
            <div className="Logo-Container">
                <img className="w-20 shadow-md pl-1 pt-1" alt="Logo" src={Logo}/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status:{online?"💚":"😡"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/cart">Cart{cartItems.length!=0 && ( - cartItems.length)}</Link></li>
                    <button className="stage" onClick={()=>{
                        (stageVariable==="Login")?setStageVariable("Logout"):setStageVariable("Login");
                    }}>{stageVariable}</button>
                    { stageVariable==="Logout"  && <li className="px-4 font-bold">{loggedInUser}</li>}
                </ul>
            </div>
        </div>
    );
}
export default Header;