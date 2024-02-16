import { IMAGE_URL } from "../Utils/Constants";
const Card=(props)=>
{
    const {pps}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=pps.info;
    return (
        <div className="MiniCard-Container">
            <img alt="Foodpic" className="Mini-Picture" src={IMAGE_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h6>{cuisines.join(',')}</h6>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}
export default Card;