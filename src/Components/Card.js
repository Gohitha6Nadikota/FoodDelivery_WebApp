import { IMAGE_URL } from "../Utils/Constants";
const Card=(props)=>
{
    const {pps}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=pps.info;
    return (
        <div className="MiniCard-Container">
            <img alt="Foodpic" className="Mini-Picture" src={IMAGE_URL+pps.info.cloudinaryImageId}/>
            <h2>{pps.info.name}</h2>
            <h6>{pps.info.cuisines.join(',')}</h6>
            <h4>{pps.info.avgRating}</h4>
            <h4>{pps.info.costForTwo}</h4>
        </div>
    );
}
export default Card;