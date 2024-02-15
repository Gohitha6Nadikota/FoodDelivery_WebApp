import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import { MENU_API } from "../Utils/Constants";
const RestaurantMenu =()=>{
    const [resMenu,setResMenu]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json= await data.json();
        //console.log(json);
        setResMenu(json.data);
    }
    if(resMenu===null)
    return <ShimmerUI/>
    const {name,cuisines,costForTwo}=resMenu?.cards[0]?.card?.card?.info;
    const resItems = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    //console.log(resItems);
    return (
        <div className="Menu-Container">
            <h2>{name}</h2>
            <p>{cuisines.join(',')}</p>
            <p>{costForTwo}</p>
            <ul>{resItems && resItems.map((item)=>{
                if(item?.card?.card?.hasOwnProperty("itemCards"))
                {
                    return item?.card?.card?.itemCards?.map((x)=><li>{x.card.info.name}</li>)
                }
            })}</ul>
        </div>
    )
}
export default RestaurantMenu;