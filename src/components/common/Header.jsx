import React from "react";

const Header = () => {
  return (
    <div className="header max-width w-full flex mb-3 items-center">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato logo"
        className="header-logo h-[28px] max-w-[140px] mr-6"
      />
      <div className="header-right flex flex-1 justify-between items-center h-[72px] ">
        <div className="header-location-search-container h-14 flex items-center rounded-lg w-[70%] bg-white box">
          <div className="location-wrapper flex  justify-between px-[10px]">
            <div className="location-icon-name flex justify-center items-center text-[#828282]">
              <i className=" fa-solid fa-location-dot text-[#ff7e8b] font-[20px] mr-2"></i>
              <div className="m-3 ">Hyderabad</div>
              <i class="fa-solid absolute-center text-black fa-caret-down"></i>
            </div>
          </div>
          <div className="location-search-separator h-5 border-[1px] border-solid border-[ rgb(207,207,207)]"></div>
          <div className="header-searchbar mr-2 flex-1 ">
            <i class="fa-solid fa-magnifying-glass text-[#828282] text-sm mx-3"></i>
            <input
              className="border-none outline-none w-[60%] text-[14px]"
              type="text"
              placeholder="Search for restaurant, cusine or a dish"
            />
          </div>
        </div>
        <div className="profile-wrapper flex justify-between w=[15%] items-center">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="header-profile-image h-10 w-10 rounded-[50%]"
          />
          <span className="header-username text-xs font-semibold m-2">
            Mohammed Obaid
          </span>
          <i class="fa-solid fa-angle-down absolute-center profile-options-icon text-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
