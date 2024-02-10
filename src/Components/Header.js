import { CDN_URL } from "../Utils/Constants";
const Header=()=>{
    return (
        <div className="Header-Container">
            <div className="Logo-Container">
                <img className="Logo" alt="Logo" src={CDN_URL}/>
            </div>
            <div className="Nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;