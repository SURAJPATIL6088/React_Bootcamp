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
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{slaString}</h4>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestrauntCard;
