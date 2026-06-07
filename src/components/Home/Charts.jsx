import React from "react";
// import { homeData } from "../data/data";
import { homeData } from "../data/AnalyticData";

const ChartsSection = () => {
  return (
    <div className="charts-grid">
      {/* ALERT TREND */}
      <div className="chart-wrapper">
        <h3 className="chart-title">Alert Trend by shift</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div className="chart-legend">
              <span>
                <i className="legend-gray"></i>
                Underfill
              </span>

              <span>
                <i className="legend-red"></i>
                Overfill
              </span>
            </div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Shift-wise comparison of overfill and underfill alerts.
              </div>
            </div>
          </div>

          <div className="chart-main">
            <div className="y-axis-section">
              <div className="y-axis-title">Alerts</div>

              <div className="y-axis-values">
                <span>10</span>
                <span>8</span>
                <span>6</span>
                <span>4</span>
                <span>2</span>
                <span>0</span>
              </div>
            </div>

            <div className="bar-chart">
              {homeData.alertTrend.map((item, index) => (
                <div className="chart-group" key={index}>
                  <div className="bar-stack">
                    <div
                      className="gray-bar"
                      style={{
                        height: `${item.underfill * 14}px`,
                      }}
                    >
                      <span>{item.underfill}</span>
                    </div>

                    <div
                      className="red-bar"
                      style={{
                        height: `${item.overfill * 14}px`,
                      }}
                    >
                      <span>{item.overfill}</span>
                    </div>
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
        <h3 className="chart-title">Fill Efficiency Trend</h3>

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
              <div className="y-axis-title">Efficiency</div>

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

                  <p>{item.week}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Time Stamp</div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
