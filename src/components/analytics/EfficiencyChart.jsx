import React from "react";
import "../styles/live.css";

const EfficiencyChart = ({ data, efficiencyYAxis }) => {
  const latestData = data.slice(-5);
  const efficiencyPoints = latestData
    .map((item, index) => {
      const x = 50 + index * 75;
      const y = 120 - item.value;

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
              {efficiencyYAxis.map((value) => (
                <span key={value}>{value}%</span>
              ))}
            </div>
          </div>

          <div className="line-chart-wrapper">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>

            <svg viewBox="0 0 400 140" className="svg-chart">
              <polyline
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="1.5"
                points={efficiencyPoints}
              />

              {latestData.map((item, index) => {
                const x = 50 + index * 75;
                const y = 120 - item.value;

                return (
                  <circle key={index} cx={x} cy={y} r="4" fill="#5b5bf7" />
                );
              })}

              <g fill="#777" fontSize="8" textAnchor="middle">
                {latestData.map((item, index) => {
                  const x = 50 + index * 75;

                  return (
                    <text key={index} x={x} y="130">
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
