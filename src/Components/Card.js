import { IMAGE_URL } from "../Utils/Constants";

const Card = (props) => {
  //console.log(props);
  const { pps } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = pps.info;
  return (
    <div className="m-4 w-[273px] h-[400px] hover:bg-green-100 rounded-2xl items-center shadow-2xl">
      <img
        alt="Foodpic"
        className="Mini-Picture rounded-2xl  h-[186px] w-[277px] object-cover p-2 "
        src={IMAGE_URL + cloudinaryImageId}
      />
      <div className="m-4">
        <h2 className="font-bold py-4 truncate text-lg">{name}</h2>
        <h6>{cuisines.slice(0, Math.min(4, cuisines.length)).join(",")}</h6>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withSpecialFeature = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white text-xs bg-black  p-2 rounded-lg">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};
export default Card;
