import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/layout/Login";
import Dashboard from "./components/layout/Dashboard";
import Home from "./components/pages/Home";
import Analytics from "./components/pages/Analytics";
import Configuration from "./components/pages/Configuration";
import Users from "./components/pages/Users";
import OperatorDashboard from "./components/Operator/OperatorDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/live" element={<OperatorDashboard />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="config" element={<Configuration />} />
          <Route path="users" element={<Users />} />
          {/* <Route path="live" element={<OperatorDashboard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
