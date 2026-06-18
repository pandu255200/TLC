import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import "../styles/config.css";
import { configurationData } from "../data/AnalyticData";

const Configuration = () => {
  const [complianceThreshold, setComplianceThreshold] = useState(
    configurationData.complianceThreshold,
  );
  const [targetValue, setTargetValue] = useState(
    configurationData.threshold.targetValue,
  );

  const [minRange, setMinRange] = useState(
    configurationData.threshold.minRange,
  );

  const [maxRange, setMaxRange] = useState(
    configurationData.threshold.maxRange,
  );
  const [openShift, setOpenShift] = useState(null);
  return (
    <div className="config-wrapper">
      
      <p className="config-path">
        Menu / <span>Configuration</span>
      </p>

      <div className="config-sections">
        {/* THRESHOLD */}
        <div className="config-section">
          <h3 className="config-title">Threshold</h3>

          <div className="config-box threshold-box">
            <div className="threshold-row">
              <input type="text" placeholder="Target Value" readOnly />
              <input
                type="text"
                value={targetValue}
                onChange={(e) => setTargetValue(e.target.value)}
              />
            </div>

            <div className="threshold-row">
              <input type="text" placeholder="Min Range" readOnly />
              <input
                type="text"
                value={minRange}
                onChange={(e) => setMinRange(e.target.value)}
              />
            </div>

            <div className="threshold-row">
              <input type="text" placeholder="Max Range" readOnly />
              <input
                type="text"
                value={maxRange}
                onChange={(e) => setMaxRange(e.target.value)}
              />
            </div>

            <button className="config-update-btn threshold-update-btn">
              Update
            </button>
          </div>
        </div>

        {/* NOTIFICATION CONFIG */}
        <div className="config-section">
          <h3 className="config-title">Notification & Alert Configuration</h3>

          <div className="config-box notification-box">
            {configurationData.shifts.map((shift) => (
              <div className="alert-row" key={shift.id}>
                <button className="shift-btn">{shift.name}</button>

                <div className="multi-select">
                  <div
                    className="multi-select-header"
                    onClick={() =>
                      setOpenShift(openShift === shift.id ? null : shift.id)
                    }
                  >
                    <span>Select User</span>

                    <ChevronDown
                      size={16}
                      className={openShift === shift.id ? "rotate-icon" : ""}
                    />
                  </div>

                  {openShift === shift.id && (
                    <div className="multi-select-options">
                      {configurationData.users.map((user, index) => (
                        <label key={index} className="user-option">
                          <span>{user}</span>
                          <input type="checkbox" />
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <button className="config-update-btn notification-update-btn">
              Update
            </button>
          </div>
        </div>

        {/* COMPLIANCE THRESHOLD */}
        <div className="config-section">
          <h3 className="config-title">Compliance Threshold</h3>

          <div className="config-box compliance-box">
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="100"
                value={complianceThreshold}
                className="compliance-slider"
                onChange={(e) => setComplianceThreshold(Number(e.target.value))}
                style={{
                  background: `linear-gradient(
    to right,
    #FF7A00 0%,
    #FF7A00 ${complianceThreshold}%,
    #E9DED5 ${complianceThreshold}%,
    #E9DED5 100%
  )`,
                }}
              />

              <span className="slider-value">{complianceThreshold}%</span>
            </div>

            <input
              className="compliance-input"
              value={complianceThreshold}
              onChange={(e) => setComplianceThreshold(Number(e.target.value))}
            />

            <button className="config-update-btn compliance-update-btn">
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="help-button">
        <HelpCircle className="help-icon" strokeWidth={1.2} size={24} />
      </div>
    </div>
  );
};

export default Configuration;
