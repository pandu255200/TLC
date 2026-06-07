import React from "react";
import { HelpCircle } from "lucide-react";
import "../styles/live.css";

const FillingTimeChart = ({ data, fillingTimeYAxis }) => {
  const latestData = data.slice(-5);

  const fillingTimePoints = latestData
    .map((item, index) => {
      const x = 120 + index * 200;
      const y = 140 - item.value * 15;

      return `${x},${y}`;
    })
    .join(" ");
  return (
    <div className="graph-section full-width-graph">
      <h3>Average Trolley Filling Time</h3>

      <div className="graph-card">
        <div className="graph-header align-end">
          <div className="info-tooltip-wrapper">
            <span className="circle-info">i</span>

            <div className="info-tooltip">
              Daily trend of average trolley filling duration.
            </div>
          </div>
        </div>

        <div className="line-area-wrapper">
          <div className="line-axis-side">
            <div className="vertical-label">Time (Minutes)</div>

            <div className="scale-values">
              {fillingTimeYAxis.map((value) => (
                <span key={value}>{value}m</span>
              ))}
            </div>
          </div>

          <div className="line-chart-wrapper">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>

            <svg viewBox="0 0 1200 160" className="svg-chart">
              <polyline
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="2"
                points={fillingTimePoints}
              />

              {latestData.map((item, index) => {
                const x = 120 + index * 200;
                const y = 140 - item.value * 15;

                return (
                  <circle key={index} cx={x} cy={y} r="5" fill="#5b5bf7" />
                );
              })}

              <g fill="#777" fontSize="11" textAnchor="middle">
                {latestData.map((item, index) => {
                  const x = 120 + index * 200;

                  return (
                    <text key={index} x={x} y="150">
                      {item.date}
                    </text>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <div className="bottom-axis-title">Dates</div>

        <div className="help-button">
          <HelpCircle className="help-icon" strokeWidth={1.2} size={24} />
        </div>
      </div>
    </div>
  );
};

export default FillingTimeChart;
