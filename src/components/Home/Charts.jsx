import React from "react";
// import { homeData } from "../data/data";
import { homeData } from "../data/AnalyticData";

const ChartsSection = () => {
  return (
    <div className="charts-grid">
      {/* ALERT TREND */}
      <div className="chart-wrapper">
        <h3 className="chart-title">Shift Wise Efficiency (Today)</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div></div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Shift-wise efficiency comparison.
              </div>
            </div>
          </div>

          <div className="chart-main">
            <div className="y-axis-section">
              <div className="y-axis-title">Efficiency (%)</div>

              <div className="y-axis-values">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>
            </div>

            <div className="bar-chart">
              {homeData.alertTrend.map((item, index) => (
                <div className="chart-group" key={index}>
                  <div
                    className="efficiency-bar"
                    style={{
                      height: `${item.value}%`,
                    }}
                  >
                    <span>{item.value}%</span>
                  </div>

                  <p>{item.shift}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Shifts</div>
        </div>
      </div>

      {/* EFFICIENCY TREND */}
      <div className="chart-wrapper">
        <h3 className="chart-title">Week Wise Efficiency (This Week)</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div></div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Weekly improvement trend of trolley filling efficiency.
              </div>
            </div>
          </div>

          <div className="chart-main">
            <div className="y-axis-section">
              <div className="y-axis-title">Efficiency (%)</div>

              <div className="y-axis-values">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0</span>
              </div>
            </div>

            <div className="efficiency-chart">
              {homeData.efficiencyTrend.map((item, index) => (
                <div className="green-chart-group" key={index}>
                  <div className="green-bar-stack">
                    <div
                      className={
                        index === homeData.efficiencyTrend.length - 1
                          ? "green-bar latest-bar"
                          : "green-bar previous-bar"
                      }
                      style={{
                        height: `${(item.value / 100) * 150}px`,
                      }}
                    >
                      <span>{item.value}%</span>
                    </div>
                  </div>

                  <p>{item.Day}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Days</div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
