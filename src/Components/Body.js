import data from "../Utils/Data";
import Card from "./Card";
import {useState} from 'react';
const Body=()=>{
    const [list,setList]=useState(data);
    return (
        <div className="Body-Container">
            <div className="Search-Container">
                Search
            </div>
            <div className="Filter-Container">
                <button className="Filter-Button" onClick={()=>{
                    newData=list.filter((d)=>d.info.avgRating>4);
                    setList(newData);
                }}>
                    Check Top Rated
                </button>
            </div>
            <div className="Card-Container">
                {
                    list.map((x)=><Card key={x.info.id} pps={x}/>)
                }
            </div>
        </div>
    );
}
export default Body;