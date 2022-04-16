import React from "react";

const FilterItem = ({ filter }) => {
  return (
    <div className="p-2 flex bg-white text-[#9c9c9c] items-center justify-center rounded-[8px] border-[1px] mr-2 mt-2 mb-2 ml-0 text-[14px] ">
      {filter.icon && filter.icon}
      <div className="filter-title ml-[5px]">{filter.title}</div>
    </div>
  );
};

export default FilterItem;
