import React from "react";

const ShiftComplianceChart = ({ data }) => {
  const CHART_HEIGHT = 220;
  const MAX_VALUE = 240;
  return (
    <div className="graph-section">
      <h3>Shift Wise Compliance Trend</h3>

      <div className="graph-card">
        <div className="graph-header">
          <div className="legend-box">
            <span>
              <i className="dot-green"></i>
              Compliant
            </span>

            <span>
              <i className="dot-gray"></i>
              Non-Compliant
            </span>
          </div>

          <div className="info-tooltip-wrapper">
            <span className="circle-info">i</span>

            <div className="info-tooltip">
              Shift-based count of successfully complaint and non-complaint
              trolley fills.
            </div>
          </div>
        </div>

        <div className="graph-body">
          <div className="axis-side">
            <div className="vertical-label">Number of Events</div>

            <div className="scale-values">
              <span>240</span>
              <span>200</span>
              <span>160</span>
              <span>120</span>
              <span>80</span>
              <span>40</span>
              <span>0</span>
            </div>
          </div>

          <div className="bars-wrapper">
            {data.map((item, index) => (
              <div className="single-bar-group" key={index}>
                <div className="bar-stack-wrapper">
                  <div
                    className="bottom-green-bar"
                    style={{
                      height: `${(item.compliant / 240) * 220}px`,
                    }}
                  >
                    <span>{item.compliant}</span>
                  </div>

                  <div
                    className="top-gray-bar"
                    style={{
                      height: `${Math.max(
                        (item.nonCompliant / 240) * 220
                        
                      )}px`,
                    }}
                  >
                    <span>{item.nonCompliant}</span>
                  </div>
                </div>

                <p>{item.shift}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-axis-title">Shifts</div>
      </div>
    </div>
  );
};

export default ShiftComplianceChart;
