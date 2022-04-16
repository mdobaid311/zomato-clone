import React, { useState } from "react";
import Header from "../components/common/Header";
import TabOptions from "../components/common/TabOptions";
import Footer from "../components/common/Footer";
import Delivery from "../components/Delivery";
import DiningOut from "../components/DiningOut";
import Nightlife from "../components/Nightlife";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;

      case "Dining Out":
        return <DiningOut />;

      case "Nightlife":
        return <Nightlife />;

      default:
        return <Delivery />;
    }
  };

  return (
    <div className="">
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default Home;
