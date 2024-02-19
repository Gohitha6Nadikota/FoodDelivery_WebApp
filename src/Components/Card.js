import { IMAGE_URL } from "../Utils/Constants";

const Card=(props)=>
{
    const {pps}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=pps.info;
    return (
        <div className="m-4 w-[273px] h-[500px] hover:bg-green-100 rounded-lg bg-gray-200 items-center">
            <img alt="Foodpic" className="Mini-Picture rounded-lg  h-[182px] w-[273px] object-cover" src={IMAGE_URL+cloudinaryImageId}/>
            <div className="m-4">
            <h2 className="font-bold py-4 text-lg">{name}</h2>
            <h6>{cuisines.slice(0,Math.min(4,cuisines.length)).join(',')}</h6>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            </div>
        </div>

    );
}

export const withSpecialFeature = (Card) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-4 p-2 rounded-lg">Promoted</label>
                <Card {...props}/>
            </div>
        );
    };
}; 
export default Card;