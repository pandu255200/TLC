import React from "react";
import { homeData } from "../data/AnalyticData";

const EfficiencyCards = () => {
  return (
    <div className="efficiency-grid">
      {/* Day Wise Efficiency */}
      <div className="chart-wrapper">
        <h3 className="chart-title">Month Wise Efficiency</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div></div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Recent trolley filling records with operational metrics.
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
                  <p>{item.Week}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Weeks</div>
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

              <div className="info-tooltip">
                Recent trolley filling records with operational metrics.
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

            <div className="year-chart">
              {homeData.yearWiseEfficiency.map((item, index) => (
                <div className="year-chart-group" key={index}>
                  <div
                    className="year-bar"
                    style={{
                      height: `${(item.value / 100) * 140}px`,
                    }}
                  />

                  <p className="month-label">{item.month}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Months</div>
        </div>
      </div>
      <div className="chart-wrapper">
        <h3 className="chart-title">Average Efficiency this Year</h3>

        <div className="chart-card">
          <div className="chart-top-row">
            <div></div>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Recent trolley filling records with operational metrics.
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

            <div className="year-chart">
              {homeData.avgEfficiencyPerYear.map((item, index) => (
                <div className="year-chart-group" key={index}>
                  <div
                    className="avg-bar"
                    style={{
                      height: `${(item.value / 100) * 140}px`,
                    }}
                  >
                    {item.value}%
                  </div>

                  <p className="year-label">{item.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="x-axis-title">Year</div>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyCards;
