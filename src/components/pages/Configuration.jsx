import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import "../styles/config.css";
import { configurationData } from "../data/AnalyticData";

const Configuration = () => {
  return (
    <div className="config-wrapper">
      <p className="config-path">
        Menu / <span>Configuration</span>
      </p>

      <div className="config-sections">
        {/* THRESHOLD */}
        <div className="config-box threshold-box">
          <h3>Threshold</h3>

          <div className="threshold-row">
            <input type="text" placeholder="Target Value" readOnly />
            <input
              type="text"
              value={configurationData.threshold.targetValue}
              readOnly
            />
          </div>

          <div className="threshold-row">
            <input type="text" placeholder="Min Range" readOnly />
            <input
              type="text"
              value={configurationData.threshold.minRange}
              readOnly
            />
          </div>

          <div className="threshold-row">
            <input type="text" placeholder="Max Range" readOnly />
            <input
              type="text"
              value={configurationData.threshold.maxRange}
              readOnly
            />
          </div>

          <button className="config-update-btn">Update</button>
        </div>

        {/* NOTIFICATION CONFIG */}
        <div className="config-box notification-box">
          <h3>Notification & Alert Configuration</h3>

          {configurationData.shifts.map((shift) => (
            <div className="alert-row" key={shift.id}>
              <button className="shift-btn">{shift.name}</button>

              <select className="user-select">
                <option>Select User</option>

                {configurationData.users.map((user, index) => (
                  <option key={index}>{user}</option>
                ))}
              </select>
            </div>
          ))}

          <button className="config-update-btn">Update</button>
        </div>

        {/* COMPLIANCE THRESHOLD */}
        <div className="config-box compliance-box">
          <h3>Compliance Threshold</h3>

          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="100"
              value={configurationData.complianceThreshold}
              className="compliance-slider"
              readOnly
            />

            <span className="slider-value">
              {configurationData.complianceThreshold}%
            </span>
          </div>

          <button className="config-update-btn">Update</button>
        </div>
      </div>

      <div className="config-help-btn">
        <HelpCircle className="help-icon" strokeWidth={1.5} size={24} />
      </div>
    </div>
  );
};

export default Configuration;
