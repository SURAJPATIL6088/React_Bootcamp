import { useContext } from "react";
import { IMG_CDN_URL } from "./constants";
import UserContext from "../Hooks/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  slaString,
  costForTwoString,
}) => {
  const {user} = useContext(UserContext);
  return (
    
    <div className="hover:bg-slate-400 w-56 p-3 m-3 shadow-lg bg-slate-200 rounded-md">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3 className="text-lg font-bold">{name}</h3>
      <h5 className="font-semibold">{cuisines.join(", ")}</h5>
      <h6 className="list-item ml-3">{slaString}</h6>
      <h6 className="list-item ml-3">{costForTwoString}</h6>
      <h6 className="font-bold list-none ml-1">{user.name}</h6>
      <h6 className="font-bold list-none ml-1">{user.email}</h6>
    </div>
  );
};

export default RestrauntCard;
