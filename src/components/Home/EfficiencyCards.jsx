import React from "react";
import { homeData } from "../data/AnalyticData";

const EfficiencyCards = () => {
  return (
    <div className="efficiency-grid">
      {/* Day Wise Efficiency */}
      <div className="chart-wrapper">
        <h3 className="chart-title">Day Wise Efficiency</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div className="chart-legend">
              <span>
                <i className="legend-gray"></i>
                L1
              </span>

              <span>
                <i className="legend-red"></i>
                L2
              </span>
            </div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Day wise efficiency comparison.
              </div>
            </div>
          </div>

          <div className="chart-main">
            <div className="y-axis-section">
              <div className="y-axis-title">Axis Y</div>

              <div className="y-axis-values">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>
            </div>

            <div className="small-bar-chart">
              {homeData.dayWiseEfficiency.map((item, index) => (
                <div className="small-chart-group" key={index}>
                  <div
                    className="small-gray-bar"
                    style={{
                      height: `${((item.value * 10) / 100) * 140}px`,
                    }}
                  >
                    <span>{item.value}</span>
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Axis X</div>
        </div>
      </div>

      {/* Month Wise Efficiency */}
      <div className="chart-wrapper">
        <h3 className="chart-title">Month Wise Efficiency</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div className="chart-legend">
              <span>
                <i className="legend-gray"></i>
                L1
              </span>

              <span>
                <i className="legend-red"></i>
                L2
              </span>
            </div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Month wise efficiency comparison.
              </div>
            </div>
          </div>

          <div className="chart-main">
            <div className="y-axis-section">
              <div className="y-axis-title">Axis Y</div>

              <div className="y-axis-values">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>
            </div>

            <div className="small-bar-chart">
              {homeData.monthWiseEfficiency.map((item, index) => (
                <div className="small-chart-group" key={index}>
                  <div
                    className="small-gray-bar"
                    style={{
                      height: `${((item.value * 10) / 100) * 140}px`,
                    }}
                  >
                    <span>{item.value}</span>
                  </div>

                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Axis X</div>
        </div>
      </div>

      {/* Year-to-date Wise Efficiency */}
      <div className="chart-wrapper">
        <h3 className="chart-title">Year-to-date Wise Efficiency</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div></div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">Year-to-date efficiency trend.</div>
            </div>
          </div>

          <div className="chart-main">
            <div className="y-axis-section">
              <div className="y-axis-title">Axis Y</div>

              <div className="y-axis-values">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>
            </div>

            <div className="year-chart">
              {homeData.yearWiseEfficiency.map((item, index) => (
                <div className="year-chart-group" key={index}>
                  <div
                    className="year-bar"
                    style={{
                      height: `${(item.value / 100) * 140}px`,
                    }}
                  />

                  <p>{item.month}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Axis X</div>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyCards;
