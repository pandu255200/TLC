import React, { useState, useEffect, useRef } from "react";
import { homeData } from "../data/AnalyticData";

const LidarStatus = () => {
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
    <div className="home-header">
      <p className="breadcrumb">
        Menu / <span>Home</span>
      </p>

      <div className="lidar-status-row">
        <h2>Lidar Status</h2>

        <div className="status-dot">
          <span className="green-dot"></span>
          <span className="Lidan-names">Lidar 1</span>
        </div>

        <div className="status-dot">
          <span className="red-dot"></span>
          <span className="Lidan-names">Lidar 2</span>
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
                    <th>Lidar</th>
                    <th>Time Stamp</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {homeData.lidarStatus.history.map((item, index) => (
                    <tr key={index}>
                      <td>{item.lidar}</td>
                      <td>{item.time}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LidarStatus;
