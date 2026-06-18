import React from "react";
import "../styles/Home.css";

// import LidarStatus from "../components/LidarStatus";
import LidarStatus from "../Home/LidarStatus";
// import StatCards from "../components/StatCards";
import StatCards from "../Home/StatCards";
// import ChartsSection from "../components/ChartsSection";
import ChartsSection from "../Home/Charts";
import EfficiencyCards from "../Home/EfficiencyCards";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-top-section">
        <LidarStatus />
        <StatCards />
      </div>

      <div className="home-chart-section">
        <ChartsSection />
        <EfficiencyCards />
      </div>
    </div>
  );
};

// export default Home;

export default Home;
