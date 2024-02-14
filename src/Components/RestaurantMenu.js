import { useEffect } from "react";
const RestaurantMenu =()=>{
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch("");
    }
    return (
        <div className="Menu-Container">
            <h2>Name</h2>
            <p>Menu</p>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;