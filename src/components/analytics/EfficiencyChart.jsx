import React from "react";
import "../styles/analytics.css";

const EfficiencyChart = ({ data, efficiencyYAxis }) => {
  const latestData = data.slice(-5);

  const MAX_VALUE = 100;
  const GRAPH_HEIGHT = 220;
  const TOP_PADDING = 0;

  const efficiencyPoints = latestData
    .map((item, index) => {
      const x = 15 + index * 100;

      const y =
        TOP_PADDING + ((MAX_VALUE - item.value) / MAX_VALUE) * GRAPH_HEIGHT;

      return `${x},${y}`;
    })
    .join(" ");
  return (
    <div className="graph-section">
      <h3>Daily Efficiency Metrics Trend</h3>

      <div className="graph-card">
        <div className="graph-header align-end">
          <div className="info-tooltip-wrapper">
            <span className="circle-info">i</span>

            <div className="info-tooltip">
              Day-wise operation filling efficiency performance.
            </div>
          </div>
        </div>

        <div className="line-area-wrapper">
          <div className="line-axis-side">
            <div className="vertical-label">Trolley Completion Target</div>

            <div className="scale-values">
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
              <span>0%</span>
            </div>
          </div>

          <div className="line-chart-wrapper">
            {[0, 20, 40, 60, 80].map((top) => (
              <div key={top} className="grid-line" style={{ top: `${top}%` }} />
            ))}

            <svg viewBox="0 0 400 220" className="svg-chart">
              <polyline
                fill="none"
                points={efficiencyPoints}
                className="efficiency-line"
              />

              {latestData.map((item, index) => {
                const x = 15 + index * 100;

                const y =
                  TOP_PADDING +
                  ((MAX_VALUE - item.value) / MAX_VALUE) * GRAPH_HEIGHT;

                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="5"
                    className="efficiency-point"
                  />
                );
              })}
              <g fill="#777" fontSize="12" textAnchor="middle">
                {latestData.map((item, index) => {
                  const x = 15 + index * 100;

                  return (
                    <text key={index} x={x} y="233">
                      {item.date}
                    </text>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <div className="bottom-axis-title">Dates</div>
      </div>
    </div>
  );
};

export default EfficiencyChart;
