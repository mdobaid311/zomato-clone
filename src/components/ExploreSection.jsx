import React from "react";
import ExploreCard from "./ExploreCard";

const ExploreSection = ({ list, colletionName }) => {
  
  return (
    <div className="max-width explore-section mt-[16px]">
      <div className="collection-title flex flex-wrap justify-between">
        {colletionName}
      </div>
      <div className="explore-grid flex flex-wrap justify-center items-center">
        {list.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
