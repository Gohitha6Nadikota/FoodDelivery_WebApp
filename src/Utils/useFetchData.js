import {useState,useEffect} from "react";
import { SWIGGY_API } from "../Utils/Constants";
const useFetchData =()=>
{
    const [list,setList] = useState([]);
    useEffect(()=>{
        FetchData();
    },[]);

    const FetchData = async ()=>{
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return list;
}
export default useFetchData; 
