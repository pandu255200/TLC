import React, { useState } from "react";
import "./operatorDashboard.css";

import analyticsKart from "../../assets/analyticskart.png";
import olamLogo from "../../assets/olam.png"; // your olam logo
import profileImg from "../../assets/olamclient.png"; // profile image
import resoluteLogo from "../../assets/resoluteai.png";

import { Package, Info, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OperatorDashboard = () => {
  const navigate = useNavigate();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

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
    <div className="operator-dashboard">
      {/* HEADER */}
      <div className="operator-header">
        <div className="Operator-header-left">
          <img
            src={analyticsKart}
            alt="Analytics Kart"
            className="analytics-logo"
          />

          <span className="live-text">Live</span>
        </div>

        <div className="header-right">
          <img src={olamLogo} alt="Olam" className="olam-logo" />

          <div className="profile-wrapper">
            <img
              src={profileImg}
              alt="Profile"
              className="profile-image"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />

            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="logout-item" onClick={handleLogout}>
                  <LogOut size={16} />
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LIVE VIEW */}
      <div className="live-section">
        <div className="live-title">
          Live View
          <span className="green-dot"></span>
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
        {/* </div> */}
      </div>

      {/* FOOTER */}
      <div className="operator-footer">
        <p>Powered By</p>

        <img src={resoluteLogo} alt="Resolute" className="footer-logo" />
      </div>
    </div>
  );
};

export default OperatorDashboard;
