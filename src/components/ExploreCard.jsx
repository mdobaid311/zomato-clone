import React from "react";

const ExploreCard = ({ restaurant, i }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg =
    restaurant?.info?.image?.url ?? restaurant?.info?.o2FeaturedImage?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div
      className={`explore-card mt-3 mb-6 p-[10px] cursor-pointer  ${
        i < 3 ? "explore-card-first mt-3 " : ""
      }`}
    >
      <div className="explore-card-cover h-[248px] w-[328px] rounded-[15px] relative">
        <img
          src={coverImg}
          className="explore-card-image h-full w-full object-cover rounded-[15px]"
          alt={restaurant.info.name}
        />
        <div className="delivery-time absolute right-[10px] bottom-[10px] opacity-[0.8] bg-[color:var(--primary-bg)] backdrop-blur-sm font-semibold text-xs p-[2px 5px 3px] rounded-[4px]">
          {deliveryTime}
        </div>
        {proOff && (
          <div className="pro-off absolute left-0 bottom-0 bg-[color:var(--tag-red)] text-[color:var(--primary-bg)] text-[14px] px-[6px] rounded overflow-hidden ellipsis whitespace-nowrap leading-[18px] font-medium">
            {proOff}
          </div>
        )}
        {goldOff && (
          <div className="gold-off absolute-center  bg-[color:var(--tag-red)] text-[color:var(--primary-bg)] px-[6px] rounded text-ellipsis bottom-[14px] absolute font-medium text-sm overflow-hidden whitespace-no-wrap leading-4 left-0 ">
            {goldOff}
          </div>
        )}
        {discount && (
          <div className="discount bg-[color:var(--tag-blue)]  text-[color:var(--primary-bg)] font-medium text-sm leading-4 whitespace-nowrap ellipsis py-0 px-[6px] absolute left-0 truncate rounded bottom-[20px] absolute-center">
            {discount}
          </div>
        )}
      </div>
      <div className="res-row flex justify-between pt-2 px-0 pb-[6px]">
        <div className="res-name max-w-[200px] overflow-hidden text-ellipsis text-[18px] font-semibold text-[color:var(--heading-text)]">
          {name}
        </div>
        {rating && (
          <div className="res-rating px-2 text-[13px] font-semibold text-[color:var(--primary-bg)]  bg-[color:var(--tag-green)] rounded-md h-6  flex items-center justify-center">
            {rating}
            <i className="fa-solid fa-star text-[10px] ml-[2px]  " />
          </div>
        )}
      </div>
      <div className="res-row flex justify-between pt-2 px-0 pb-[6px]">
        {cuisines.length && (
          <div className="res-cuisine overflow-hidden whitespace-no-wrap text-sm max-w-[56%] text-ellipsis">
            {cuisines.map((item, i) => (
              <span className="res-cuisine-tag mr-1 text-[color:var(--inactive-text)]">
                {item}
                {i !== cuisines.length - 1 && ","}
              </span>
            ))}
          </div>
        )}
        {approxPrice && (
          <div className="res-price text-[14px] text-[color:var(--inactive-text)] ">
            {approxPrice}
          </div>
        )}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator h-[1px] mt-[10px] mb-[5px]"></div>
          <div className="explore-bottom flex items-center max-w-full">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="res-bottom-text text-[color:var(--inactive-text)] text-xs overflow-hidden ml-2 max-w-[200px] text-ellipsis">
              {bottomContainers[0]?.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
