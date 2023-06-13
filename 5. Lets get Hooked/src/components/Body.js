import {Restrauntlist} from "./constants";
import RestrauntCard from "./RestrauntCard";

const BodyComponent = () => {
    return (
      <div className="RestrauntCard-list">
        {Restrauntlist.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key = {...restaurant.data.id} />
        })}
      </div>
    );
  };

export default BodyComponent;