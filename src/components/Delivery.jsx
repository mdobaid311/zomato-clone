import React from "react";
import { restaurants } from "../data/restaurants";
import Filters from "./common/Filters";
import DeliveryCollections from "./DeliveryCollections";
import ExploreSection from "./ExploreSection";
import TopBrands from "./TopBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fa-solid fa-filter"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fa-solid fa-truck"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div className="">
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Hyderabad"
      />
    </div>
  );
};

export default Delivery;
