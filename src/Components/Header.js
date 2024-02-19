import { CDN_URL } from "../Utils/Constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header=()=>
{
    const [stageVariable ,setStageVariable]=useState("Login");
    const online = useOnlineStatus();
    return (
        <div className="flex justify-between  bg-green-100 shadow-md">
            <div className="Logo-Container">
                <img className="w-40 shadow-md" alt="Logo" src={CDN_URL}/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status:{online?"💚":"😡"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="stage" onClick={()=>{
                        (stageVariable==="Login")?setStageVariable("Logout"):setStageVariable("Login");
                    }}>{stageVariable}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;