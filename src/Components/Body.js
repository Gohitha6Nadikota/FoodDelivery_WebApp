import data from "../Utils/Data";
import Card, { withSpecialFeature } from "./Card";
import { useState, useEffect } from "react";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../Utils/UseFetchData";
import useOnlineStatus from "../Utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
const Body = () => {
  const [filterlist, setfilterlist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const list = useFetchData();
  //console.log(list);
  useEffect(() => {
    setfilterlist(list);
  }, [list]);
  const NewCard =withSpecialFeature(Card);
  //console.log(filterlist);
  const online = useOnlineStatus();
  if (online === false) {
    return <OfflinePage />;
  }
  return list.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="Body-Container">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            name="Search-Bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredlist = list.filter((n) =>
                n.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterlist(filteredlist);
            }}
          />
          <button
            className="px-6 m-4 py-1 bg-green-100 rounded-xl"
            onClick={() => {
              const filteredlist = list.filter((n) =>
                n.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterlist(filteredlist);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="m-4 p-4 bg-green-400 py-1 rounded-md"
            onClick={() => {
              newData = list.filter((d) => d.info.avgRating > 4);
              setfilterlist(newData);
            }}
          >
            Check Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterlist.map((x) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={x.info.id}
            to={"/restaurants/" + x.info.id}
          >
            {x.info.avgRating > 4.5 ?<NewCard pps={x}/>:<Card pps={x} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
