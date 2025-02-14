import { CDN_URL } from "../utils/constants";
// import { styleCard } from "../App.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

const RestaurantCard = (props) => {
  // const {resName, cuisine, star, time, img} = props; //1924-1925
  const { resData } = props;
  console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info || {};
  const { deliveryTime } = resData?.info?.sla || {};

  // const {
  //     cloudinaryImageId,
  //     name,
  //     cuisines,
  //     avgRating,
  //     costForTwo
  // } = resData?.info;
  // const {
  //     deliveryTime
  // } = resData?.info.sla;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[220px] h-[350px] bg-white rounded-lg shadow-lg"
    >
      {" "}
      {/* Reduced width to make the card less bulky */}
      {/* <img className="res-logo" src= { CDN_URL + resData.info.cloudinaryImageId } alt={"image"} /> */}
      <img
        className="res-logo w-full h-32 object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={"image"}
      />
      <div className="p-2">
        <h3 className="text-lg font-semibold truncate">{name}</h3>{" "}
        {/* Truncated name to prevent overflow */}
        <h4 className="text-sm text-gray-500">
          {Array.isArray(cuisines)
            ? cuisines.join(", ")
            : "No cuisines available"}
        </h4>{" "}
        {/* Smaller text for cuisines */}
        <div className="flex justify-between items-center mt-2 text-sm">
          <h4 className="font-semibold">{avgRating}</h4>
          <h4 className="text-gray-500">{costForTwo}</h4>
        </div>
        <h4 className="text-sm text-gray-500">{deliveryTime} minutes</h4>
        <h5 className="text-sm text-gray-500">
          Current User :- {loggedInUser}{" "}
        </h5>
      </div>
    </div>
  );
};

// High Order components

// input- RestaurantCard => ResataurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-cyan-400 text-black m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
