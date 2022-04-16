import React from "react";
import FilterItem from "./FilterItem";
;

const Filters = ({ filterList }) => {
  return (
    <div className="filters py-4 flex flex-wrap">
      {filterList.map((filter) => {
        return <FilterItem filter={filter} key={filter.id} />;
      })}
    </div>
  );
};

export default Filters;
