import React from "react";
import { Info } from "lucide-react";
import "./operatorDashboard.css";

const OperatorDashboard = () => {
  const topRow = [
    { id: "A1", status: "good" },
    { id: "A2", status: "good" },
    { id: "A3", status: "good" },
    { id: "A4", status: "good" },
    { id: "A5", status: "good" },
    { id: "A6", status: "good" },
    { id: "A7", status: "good" },
    { id: "A8", status: "good" },
    { id: "A9", status: "overfill" },
    { id: "A10", status: "good" },
    { id: "A11", status: "good" },
    { id: "A12", status: "overfill" },
    { id: "A13", status: "low" },
    { id: "A14", status: "low" },
  ];

  const bottomRow = [
    { id: "B1", status: "good" },
    { id: "B2", status: "good" },
    { id: "B3", status: "good" },
    { id: "B4", status: "overfill" },
    { id: "B5", status: "good" },
    { id: "B6", status: "overfill" },
    { id: "B7", status: "good" },
    { id: "B8", status: "good" },
    { id: "B9", status: "good" },
    { id: "B10", status: "good" },
    { id: "B11", status: "good" },
    { id: "B12", status: "good" },
    { id: "B13", status: "low" },
    { id: "B14", status: "low" },
  ];

  return (
    <div className="operator-page">
      <div className="live-header">
        <h3>Live View</h3>
        <span className="live-dot"></span>
      </div>

      <div className="top-section">
        {/* CARD 1 */}
        <div className="tank-card">
          <div className="card-head">
            <div className="tank-title">
              <span className="green-circle"></span>
              <h2>A1</h2>
            </div>

            <Info size={14} />
          </div>

          <p>Filling Status</p>

          <div className="tank-content">
            <div>
              <div className="percent">62%</div>

              <div className="tank-visual">
                <div className="fill" style={{ height: "62%" }}></div>
              </div>
            </div>

            <div className="level-lines">
              <span className="level red"></span>
              <span className="level green"></span>
              <span className="level gray"></span>
            </div>
          </div>

          {/* <div className="percent">62%</div> */}
        </div>

        {/* CARD 2 */}
        <div className="tank-card">
          <div className="card-head">
            <div className="tank-title">
              <span className="green-circle"></span>
              <h2>A5</h2>
            </div>

            <Info size={14} />
          </div>

          <p>Filling Status</p>

          <div className="tank-content">
            <div>
              <div className="percent">62%</div>

              <div className="tank-visual">
                <div className="fill" style={{ height: "62%" }}></div>
              </div>
            </div>

            <div className="level-lines">
              <span className="level red"></span>
              <span className="level green"></span>
              <span className="level gray"></span>
            </div>
          </div>

          {/* <div className="percent">62%</div> */}
        </div>

        {/* LEGEND */}
        <div className="legend-card">
          <h4>Trolley filling Levels</h4>

          <div className="legend-row">
            <span className="legend-color red"></span>
            OVERFILL
          </div>

          <div className="legend-row">
            <span className="legend-color green"></span>
            GOOD
          </div>

          <div className="legend-row">
            <span className="legend-color gray"></span>
            LOW
          </div>
        </div>
      </div>

      <div className="tank-grid-wrapper">
        <div className="tank-grid">
          {topRow.map((tank) => (
            <div key={tank.id} className={`tank-box ${tank.status}`}>
              {tank.id}
            </div>
          ))}
        </div>

        <div className="tank-grid">
          {bottomRow.map((tank) => (
            <div key={tank.id} className={`tank-box ${tank.status}`}>
              {tank.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
