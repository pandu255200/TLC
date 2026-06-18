import React from "react";
import { HelpCircle } from "lucide-react";
import "../styles/analytics.css";

const FillingTimeChart = ({ data, fillingTimeYAxis }) => {
  const latestData = data.slice(-5);

  const MAX_TIME = 4;
  const SVG_HEIGHT = 160;
  const TOP_PADDING = 10;
  const BOTTOM_PADDING = 20;
  const GRAPH_HEIGHT = SVG_HEIGHT - TOP_PADDING - BOTTOM_PADDING;
  const fillingTimePoints = latestData
    .map((item, index) => {
      const x = 120 + index * 205;

      const y =
        TOP_PADDING + ((MAX_TIME - item.value) / MAX_TIME) * GRAPH_HEIGHT;

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
            {[ 0,25,50, 75].map((top) => (
              <div key={top} className="grid-line" style={{ top: `${top}%` }} />
            ))}

            <svg viewBox="0 0 1200 160" className="svg-chart">
              <polyline
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="2"
                points={fillingTimePoints}
              />

              {latestData.map((item, index) => {
                const x = 120 + index * 205;

                const y =
                  TOP_PADDING +
                  ((MAX_TIME - item.value) / MAX_TIME) * GRAPH_HEIGHT;

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
                  const x = 120 + index * 205;

                  return (
                    <text key={index} x={x} y="210">
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
