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
      <div className="flex justify-between shadow-md w-full">
        <div className="flex Logo-Container w-4/12 items-center align-middle">
          <Link to="/">
            <img className="w-20 shadow-md pl-1 pt-1" alt="Logo" src={Logo} />
          </Link>
        </div>
        <div className="flex items-center justify-end w-8/12 ">
          <ul className="flex p-4 items-center">
            <li className="px-1 hidden md:block">Online:{online ? "💚" : "😡"}</li>
            <li className="px-1">
              <Link to="/">Home</Link>
            </li>
            <li className="px-1">
              <Link to="/cart">
                Cart{cartItems.length != 0 && -cartItems.length}
              </Link>
            </li>
            <button
              className="stage px-1"
              onClick={() => {
                stageVariable === "Login"
                  ? setStageVariable("Logout")
                  : setStageVariable("Login");
              }}
            >
              {stageVariable}
            </button>
            {stageVariable === "Logout" && (
              <li className="px-4 font-bold">{loggedInUser}</li>
            )}
          </ul>
        </div>
      </div>
    );
}
export default Header;