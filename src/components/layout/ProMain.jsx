import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

import "../styles/MainTemplate.css";

import leftBanner from "../../assets/logos.png";
import analyticsKart from "../../assets/analyticskart.png";
import logo from "../../assets/resoluteai.png";

const ProMain = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ADMIN
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/dashboard/home");
    }

    // OPERATOR
    else if (email === "operator@example.com" && password === "operator123") {
      navigate("/operator-dashboard");
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="main-template-container">
      {/* LEFT IMAGE SECTION */}
      <div className="template-content-box">
        <img src={leftBanner} alt="Banner" className="left-banner-image" />
      </div>

      {/* LOGIN SECTION */}
      <div className="template-login-box">
        {/* LOGO */}
        <div className="template-logo">
          <img
            src={analyticsKart}
            alt="Analytics Kart"
            className="analytics-logo"
          />
        </div>

        {/* FORM */}
        <form className="template-form" onSubmit={handleSubmit}>
          <label>Email Id</label>

          <div className="input-box">
            <MdEmail className="input-icon" />

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Password</label>

          <div className="input-box">
            <MdLock className="input-icon" />

            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit">Sign In</button>
        </form>

        {/* POWERED BY */}
        <div className="template-powered-by">
          <p className="powered-text">Powered By</p>

          <img src={logo} alt="ResoluteAI" className="powered-logo" />
        </div>
      </div>
    </div>
  );
};

export default ProMain;
