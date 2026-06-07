import React, { useState } from "react";
import "./operatorDashboard.css";

import analyticsKart from "../../assets/analyticskart.png";
import olamLogo from "../../assets/olam.png"; // your olam logo
import profileImg from "../../assets/olamclient.png"; // profile image
import resoluteLogo from "../../assets/resoluteai.png";
// import { Package, Info, LogOut, Menu } from "lucide-react";

import { Package, Info, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OperatorDashboard = () => {
  const navigate = useNavigate();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };
  const tankDataTop = [
    { id: "A1", color: "green" },
    { id: "A2", color: "green" },
    { id: "A3", color: "green" },
    { id: "A4", color: "green" },
    { id: "A5", color: "green" },
    { id: "A6", color: "green" },
    { id: "A7", color: "green" },
    { id: "A8", color: "green" },
    { id: "A9", color: "red" },
    { id: "A10", color: "green" },
    { id: "A11", color: "green" },
    { id: "A12", color: "red" },
    { id: "A13", color: "yellow" },
    { id: "A14", color: "gray" },
  ];

  const tankDataBottom = [
    { id: "B1", color: "green" },
    { id: "B2", color: "green" },
    { id: "B3", color: "green" },
    { id: "B4", color: "red" },
    { id: "B5", color: "green" },
    { id: "B6", color: "red" },
    { id: "B7", color: "green" },
    { id: "B8", color: "green" },
    { id: "B9", color: "green" },
    { id: "B10", color: "green" },
    { id: "B11", color: "green" },
    { id: "B12", color: "green" },
    { id: "B13", color: "yellow" },
    { id: "B14", color: "gray" },
  ];

  return (
    <div className="operator-dashboard">
      {/* HEADER */}
      <div className="operator-header">
        <div className="Operator-header-left">
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>

          {menuOpen ? (
            <>
              <img
                src={analyticsKart}
                alt="Analytics Kart"
                className="analytics-logo"
              />
              <span className="live-text">Live</span>
            </>
          ) : (
            <>
              <img
                src={resoluteLogo}
                alt="Resolute AI"
                className="analytics-logo"
              />
              <span className="live-text">Live</span>
            </>
          )}
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

        <div className="live-content">
          {/* CARDS */}
          <div className="card-wrapper">
            {/* CARD 1 */}
            <div className="tank-card">
              <div className="card-top">
                <div className="card-icon-title">
                  <div className="icon-box">
                    <Package size={18} />
                  </div>

                  <h2>A1</h2>
                </div>

                <div className="info-wrapper">
                  <Info size={15} className="info-icon" />

                  <div className="info-tooltip">
                    Live filling status of the current compartment.
                  </div>
                </div>
              </div>

              <p>Filling Status</p>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <span className="percent">75%</span>
            </div>

            {/* CARD 2 */}
            <div className="tank-card">
              <div className="card-top">
                <div className="card-icon-title">
                  <div className="icon-box">
                    <Package size={18} />
                  </div>

                  <h2>A4</h2>
                </div>

                <div className="info-wrapper">
                  <Info size={15} className="info-icon" />

                  <div className="info-tooltip">
                    Live filling status of the current compartment.
                  </div>
                </div>
              </div>

              <p>Filling Status</p>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <span className="percent">75%</span>
            </div>
          </div>

          {/* LEGEND */}
          <div className="Operator-legend-box">
            <div className="legend-item">
              <span className="legend-color green"></span>
              Desired Level
            </div>

            <div className="legend-item">
              <span className="legend-color yellow"></span>
              Before Level Detection
            </div>

            <div className="legend-item">
              <span className="legend-color red"></span>
              Over Filled
            </div>

            <div className="legend-item">
              <span className="legend-color gray"></span>
              Undesired Level
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="tank-grid-container">
          <div className="tank-grid">
            {tankDataTop.map((tank, index) => (
              <div key={index} className={`tank-box ${tank.color}`}>
                {tank.id}
              </div>
            ))}
          </div>

          <div className="tank-grid">
            {tankDataBottom.map((tank, index) => (
              <div key={index} className={`tank-box ${tank.color}`}>
                {tank.id}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="operator-footer">
        {menuOpen && (
          <>
            <p>Powered By</p>
            <img src={resoluteLogo} alt="Resolute" className="footer-logo" />
          </>
        )}
      </div>
    </div>
  );
};

export default OperatorDashboard;
