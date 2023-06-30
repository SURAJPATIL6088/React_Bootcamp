import { IMG_CDN_URL } from "./constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="hover:bg-slate-400 w-56 p-3 m-3 shadow-lg bg-slate-200 rounded-md">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3 className="text-lg font-bold">{name}</h3>
      <h5 className="font-semibold">{cuisines.join(", ")}</h5>
      <h6>{slaString}</h6>
      <h6>{costForTwoString}</h6>
    </div>
  );
};

export default RestrauntCard;
