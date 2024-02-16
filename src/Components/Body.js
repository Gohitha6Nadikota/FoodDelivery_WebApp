import data from "../Utils/Data";
import Card from "./Card";
import {useState,useEffect} from 'react';
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../Utils/UseFetchData";
import useOnlineStatus from "../Utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
const Body=()=>
{
    const [filterlist,setfilterlist]=useState([]);
    const [searchText,setSearchText]=useState("");
    const list = useFetchData();
    useEffect(() => {
        setfilterlist(list);
    }, [list]);

    const online = useOnlineStatus();
    if(online===false)
    {
        return <OfflinePage/>;
    }
    return (list.length===0)?<ShimmerUI/>: (
        <div className="Body-Container">
            
            <div className="Filter-Container">
                <div className="Search-Container">
                    <input type="text" name="Search-Bar" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        
                        const filteredlist =list.filter((n)=>n.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilterlist(filteredlist);
                    }}>Search</button>
                </div>
                <button className="Filter-Button" onClick={()=>{
                    newData=list.filter((d)=>d.info.avgRating>4);
                    setfilterlist(newData);
                }}>
                    Check Top Rated
                </button>
            </div>
            <div className="Card-Container">
                {
                    filterlist.map((x)=><Link style={{ textDecoration: 'none',color:'black' }} key={x.info.id} to={"/restaurants/"+x.info.id}><Card  pps={x}/></Link>)
                }
            </div>
        </div>
    );
}
export default Body;