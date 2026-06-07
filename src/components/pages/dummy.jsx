import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../styles/live.css";
import StatCards from "../analytics/StatCards";
import ShiftComplianceChart from "../analytics/ShiftComplianceChart";
import LineChart from "../analytics/EfficiencyChart";

import useAnalytics from "../hooks/useAnalytics";

const Analytics = () => {
  const [startDate, setStartDate] = useState(null);

  const [endDate, setEndDate] = useState(null);

  const [shift, setShift] = useState("");

  const { analyticsData, downloadReport } = useAnalytics();

  return (
    <div className="dash-wrapper">
      <div className="dash-header">
        <p className="dash-path">
          Menu / <span>Analytics</span>
        </p>

        <button className="report-download-btn" onClick={downloadReport}>
          ↓ Download Report
        </button>
      </div>

      <StatCards stats={analyticsData.stats} />

      <div className="chart-grid-layout">
        <ShiftComplianceChart data={analyticsData.shiftCompliance} />

        <LineChart
          title="Daily Efficiency Metrics Trend"
          data={analyticsData.efficiencyTrend}
          yAxisLabel="Efficiency (%)"
          suffix="%"
          tooltipText="Daily efficiency trend"
        />
      </div>

      <LineChart
        title="Average Trolley Filling Time"
        data={analyticsData.fillingTimeTrend}
        yAxisLabel="Time (Minutes)"
        suffix="m"
        tooltipText="Average filling time"
      />
    </div>
  );
};
export default Analytics;
