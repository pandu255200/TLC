import React from "react";
import analyticsData from "../data/AnalyticData";
import '../styles/live.css'
const StatCards = ({ stats }) => {
  return (
    <div className="stats-layout">
      <div className="info-card violet-bg">
        <div className="card-top">
          <p>TOTAL TROLLEY'S PROCESSED</p>
          <div className="info-tooltip-wrapper">
            <span className="circle-info">i</span>

            <div className="info-tooltip">
              This card shows the total trolley's processed during selected
              duration
            </div>
          </div>
        </div>

        <h2>{analyticsData.stats.totalTrolleys}</h2>
      </div>

      <div className="info-card orange-bg">
        <div className="card-top">
          <p>AVG FILL ACCURACY</p>
          <div className="info-tooltip-wrapper">
            <span className="circle-info">i</span>

            <div className="info-tooltip">
              This card shows the number of trolley's filled without
              overfill/underfill incidents per 100 trolley fills.
            </div>
          </div>
        </div>

        <h2>{analyticsData.stats.avgFillAccuracy}</h2>
      </div>

      <div className="info-card soft-purple-bg">
        <div className="card-top">
          <p>ACTIVE ALERTS</p>
          <div className="info-tooltip-wrapper">
            <span className="circle-info">i</span>

            <div className="info-tooltip">
              This card determines the total number of alerts generated for the
              selected duration.
            </div>
          </div>
        </div>

        <h2>{analyticsData.stats.activeAlerts}</h2>
      </div>

      <div className="info-card green-bg-light">
        <div className="card-top">
          <p>TROLLEY'S PROCESSED PER HOUR</p>
          <div className="info-tooltip-wrapper">
            <span className="circle-info">i</span>

            <div className="info-tooltip">
              This card shows average number of trolley's filled per hour.
            </div>
          </div>
        </div>

        <h2>{analyticsData.stats.processedPerHour}</h2>
      </div>
    </div>
  );
};

export default StatCards;
