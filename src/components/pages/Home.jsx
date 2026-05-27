import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import { HelpCircle } from "lucide-react";

const Home = () => {
  const [showStatus, setShowStatus] = useState(false);
  const popupRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowStatus(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="home-container">
      {/* TOP SECTION */}
      <div className="home-header">
        <p className="breadcrumb">
          Menu / <span>Home</span>
        </p>

        <div className="lidar-status-row">
          <h2>Lidar Status</h2>

          <div className="status-dot">
            <span className="green-dot"></span>
            Lidar 1
          </div>

          <div className="status-dot">
            <span className="red-dot"></span>
            Lidar 2
          </div>

          <div className="status-dropdown-wrapper" ref={popupRef}>
            <p
              className="check-status"
              onClick={() => setShowStatus(!showStatus)}
            >
              Check Status
            </p>

            {showStatus && (
              <div className="status-popup">
                <table>
                  <thead>
                    <tr>
                      <th>Time Stamp</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>10:40 AM</td>
                      <td>Active</td>
                    </tr>

                    <tr>
                      <td>10:25 AM</td>
                      <td>Inactive</td>
                    </tr>

                    <tr>
                      <td>10:10 AM</td>
                      <td>Active</td>
                    </tr>

                    <tr>
                      <td>09:55 AM</td>
                      <td>Active</td>
                    </tr>

                    <tr>
                      <td>09:40 AM</td>
                      <td>Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="stats-grid">
        <div className="stat-card purple-card">
          <div className="stat-top">
            <p>AVERAGE TROLLEY FILL TIME</p>

            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Average time required to completely fill one trolley.
              </div>
            </div>
          </div>

          <h1>4M 40s</h1>
        </div>

        <div className="stat-card peach-card">
          <div className="stat-top">
            <p>TODAY'S EFFICIENCY</p>
            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Overall filling achieved today.
              </div>
            </div>
          </div>
          <h1>97%</h1>
        </div>

        <div className="stat-card lavender-card">
          <div className="stat-top">
            <p>TOTAL TROLLEY'S PROCESSED</p>
            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Total number of trolleys completed today.
              </div>
            </div>
          </div>
          <h1>1201</h1>
        </div>
        <div className="stat-card pink-card">
          <div className="stat-top">
            <p>OVERFILL INCIDENTS</p>
            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Number of overfill thresholds violations detected.
              </div>
            </div>
          </div>
          <h1>12</h1>
        </div>
        <div className="stat-card green-card">
          <div className="stat-top">
            <p>UNDERFILL INCIDENTS</p>
            <div className="info-wrapper">
              <span className="info-circle">i</span>

              <div className="info-tooltip">
                Number of trolleys filled below target level.
              </div>
            </div>
          </div>
          <h1>11</h1>
        </div>
      </div>

      {/* CHARTS */}
      <div className="charts-grid">
        {/* ALERT TREND */}
        <div className="chart-wrapper">
          <h3 className="chart-title">Alert Trend by shift</h3>

          <div className="chart-card">
            <div className="chart-top-row">
              <div className="chart-legend">
                <span>
                  <i className="legend-gray"></i>
                  Underfill
                </span>

                <span>
                  <i className="legend-red"></i>
                  Overfill
                </span>
              </div>

              <div className="info-wrapper">
                <span className="info-circle">i</span>

                <div className="info-tooltip">
                  Shift-wise comparison of overfill and underfill alerts.
                </div>
              </div>
            </div>

            <div className="chart-main">
              {/* Y AXIS */}
              <div className="y-axis-section">
                <div className="y-axis-title">Alerts</div>

                <div className="y-axis-values">
                  <span>10</span>
                  <span>8</span>
                  <span>6</span>
                  <span>4</span>
                  <span>2</span>
                  <span>0</span>
                </div>
              </div>

              {/* GRAPH */}
              <div className="bar-chart">
                {[
                  { shift: "Shift A", underfill: 7, overfill: 3 },
                  { shift: "Shift B", underfill: 4, overfill: 2 },
                  { shift: "Shift C", underfill: 2, overfill: 5 },
                ].map((item, index) => (
                  <div className="chart-group" key={index}>
                    <div className="bar-stack">
                      {/* UNDERFILL */}
                      <div
                        className="gray-bar"
                        style={{
                          height: `${item.underfill * 14}px`,
                        }}
                      >
                        <span>{item.underfill}</span>
                      </div>

                      {/* OVERFILL */}
                      <div
                        className="red-bar"
                        style={{
                          height: `${item.overfill * 14}px`,
                        }}
                      >
                        <span>{item.overfill}</span>
                      </div>
                    </div>

                    <p>{item.shift}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="x-axis-title">Shifts</div>
          </div>
        </div>

        {/* EFFICIENCY TREND */}
        <div className="chart-wrapper">
          <h3 className="chart-title">Fill Efficiency Trend</h3>

          <div className="chart-card">
            <div className="chart-top-row">
              <div></div>

              <div className="info-wrapper">
                <span className="info-circle">i</span>

                <div className="info-tooltip">
                  Weekly improvement trend of trolley filling efficiency.
                </div>
              </div>
            </div>

            <div className="chart-main">
              {/* Y AXIS */}
              <div className="y-axis-section">
                <div className="y-axis-title">Alerts</div>

                <div className="y-axis-values">
                  <span>100%</span>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                  <span>0</span>
                </div>
              </div>

              {/* GRAPH */}
              <div className="efficiency-chart">
                {[76, 81, 84, 89, 92].map((item, index) => (
                  <div className="green-chart-group" key={index}>
                    <div className="green-bar-stack">
                      <div
                        className="green-bar"
                        style={{
                          height: `${(item / 100) * 150}px`,
                        }}
                      >
                        <span>{item}%</span>
                      </div>
                    </div>

                    <p>Week {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="x-axis-title">Time Stamp</div>
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="table-wrapper">
        {/* TITLE OUTSIDE CARD */}
        <div className="table-header">
          <h3>Last 5 trolley's analytics</h3>

          <div className="info-wrapper">
            <span className="info-circle">i</span>

            <div className="info-tooltip">
              Recent trolley filling records with operational metrics.
            </div>
          </div>
        </div>
        {/* CARD */}
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Trolley's</th>
                <th>Time Spent</th>
                <th>Last Updated</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Trolley1", "12 Min", "10:40 AM"],
                ["Trolley2", "15 Min", "10:25 AM"],
                ["Trolley3", "20 Min", "10:10 AM"],
                ["Trolley4", "18 Min", "09:55 AM"],
                ["Trolley5", "19 Min", "09:40 AM"],
              ].map((item, index) => (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
        <div className="help-button">
          <HelpCircle className="help-icon" strokeWidth={1.2} size={24} />
        </div>
      </div>
    </div>
  );
};

export default Home;
