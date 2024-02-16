import data from "../Utils/Data";
import Card from "./Card";
import {useState,useEffect} from 'react';
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
    const [list,setList]=useState([]);
    const [filterlist,setfilterlist]=useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        //console.log(json);
        setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilterlist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
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