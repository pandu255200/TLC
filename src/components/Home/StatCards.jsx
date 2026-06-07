import React from "react";
// import { homeData } from "../data/data";
import { homeData } from "../data/AnalyticData";

const StatCards = () => {
  return (
    <div className="stats-grid">
      {homeData.stats.map((card, index) => (
        <div key={index} className={`stat-card ${card.className}`}>
          <div className="stat-top">
            <p>{card.title}</p>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                {card.tooltip}
              </div>
            </div>
          </div>

          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default StatCards;