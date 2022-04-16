import React from "react";

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover h-[190px] w-[260px] bg-white shadow-md rounded-lg ">
        <img
          src={item.cover}
          className="delivery-item-image object-cover h-full w-full rounded-lg"
          alt="item.image"
        />
      </div>
      <div className="delivery-item-title text-sm font-bold overflow-hidden text-overflow-ellipsis">
        {item.title}
      </div>
    </div>
  );
};

export default DeliveryItem;
