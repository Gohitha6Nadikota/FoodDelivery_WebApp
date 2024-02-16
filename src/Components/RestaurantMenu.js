import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
const RestaurantMenu =()=>{
    const {resId}=useParams();
    const resMenu = useRestaurantMenu(resId);
    if(resMenu===null)
    return <ShimmerUI/>
    const {name,cuisines,costForTwo}=resMenu?.cards[0]?.card?.card?.info;
    const resItems = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
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