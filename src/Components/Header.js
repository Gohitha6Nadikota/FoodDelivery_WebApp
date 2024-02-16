import { CDN_URL } from "../Utils/Constants";
import {useState} from "react";
import { Link } from "react-router-dom";
const Header=()=>
{
    const [stageVariable ,setStageVariable]=useState("Login");
    return (
        <div className="Header-Container">
            <div className="Logo-Container">
                <img className="Logo" alt="Logo" src={CDN_URL}/>
            </div>
            <div className="Nav-Items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="stage" onClick={()=>{
                        (stageVariable==="Login")?setStageVariable("Logout"):setStageVariable("Login");
                    }}>{stageVariable}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;