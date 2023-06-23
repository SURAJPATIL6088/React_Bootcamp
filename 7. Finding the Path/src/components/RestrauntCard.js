import { IMG_CDN_URL } from "./constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{slaString}</h6>
        <h6>{costForTwoString}</h6>

    </div>
  );
};

export default RestrauntCard;
