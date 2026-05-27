import React from "react";
import { HelpCircle } from "lucide-react";
import "../styles/config.css";

const Configuration = () => {
  return (
    <div className="config-wrapper">
      {/* PAGE PATH */}
      <p className="config-path">
        Menu / <span>Configuration</span>
      </p>

      {/* CONFIG CONTENT */}
      <div className="config-sections">
        {/* THRESHOLD */}
        <div className="config-box">
          <h3>Threshold</h3>

          {/* TARGET VALUE */}
          <input
            type="text"
            placeholder="Target Value"
            onFocus={(e) => {
              if (!e.target.value) {
                e.target.value = "31";
                e.target.classList.add("target-input");
              }
            }}
          />

          {/* MIN RANGE */}
          <input
            type="text"
            placeholder="Min Range"
            onFocus={(e) => {
              if (!e.target.value) {
                e.target.value = "28";
                e.target.classList.add("min-range-input");
              }
            }}
          />

          {/* MAX RANGE */}
          <input
            type="text"
            placeholder="Max Range"
            onFocus={(e) => {
              if (!e.target.value) {
                e.target.value = "32";
                e.target.classList.add("max-range-input");
              }
            }}
          />

          <button className="config-update-btn">Update</button>
        </div>

        {/* ALERT CONFIG */}
        <div className="config-box">
          <h3>Notification & Alert Configuration</h3>

          {/* SHIFT A */}
          <div className="alert-row">
            <button className="shift-btn">Shift A</button>

            <div className="custom-user-dropdown">
              <div className="dropdown-selected">
                Select User
                <span>⌄</span>
              </div>

              <div className="dropdown-menu">
                <label>
                  <span>Ravi Kumar</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Sita Patel</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Amit Sharma</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Neha Gupta</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Vikram Singh</span>
                  <input type="checkbox" />
                </label>
              </div>
            </div>
          </div>

          {/* SHIFT B */}
          <div className="alert-row">
            <button className="shift-btn">Shift B</button>

            <div className="custom-user-dropdown">
              <div className="dropdown-selected">
                Select User
                <span>⌄</span>
              </div>

              <div className="dropdown-menu">
                <label>
                  <span>Ravi Kumar</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Sita Patel</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Amit Sharma</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Neha Gupta</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Vikram Singh</span>
                  <input type="checkbox" />
                </label>
              </div>
            </div>
          </div>

          {/* SHIFT C */}
          <div className="alert-row">
            <button className="shift-btn">Shift C</button>

            <div className="custom-user-dropdown">
              <div className="dropdown-selected">
                Select User
                <span>⌄</span>
              </div>

              <div className="dropdown-menu">
                <label>
                  <span>Ravi Kumar</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Sita Patel</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Amit Sharma</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Neha Gupta</span>
                  <input type="checkbox" />
                </label>

                <label>
                  <span>Vikram Singh</span>
                  <input type="checkbox" />
                </label>
              </div>
            </div>
          </div>

          <button className="config-update-btn">Update</button>
        </div>
      </div>

      {/* HELP BUTTON */}
      <div className="config-help-btn">
        <HelpCircle className="help-icon" strokeWidth={1.5} size={24} />
      </div>
    </div>
  );
};

export default Configuration;
