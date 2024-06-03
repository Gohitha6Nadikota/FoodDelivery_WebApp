import { useEffect,useState } from "react";
import { MENU_API } from "../Utils/Constants";
const useRestaurantMenu =(resId)=>
{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        FetchData();
    },[]);
    const FetchData = async()=>
    {
        const data = await fetch("http://localhost:1234/" + MENU_API + resId);
        const json= await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantMenu;