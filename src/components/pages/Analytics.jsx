import React, { useState } from "react";
import "../styles/live.css";

import AnalyticsFilters from "../analytics/AnalyticsFilters";
import StatCards from "../analytics/StatCards";
import ShiftComplianceChart from "../analytics/ShiftComplianceChart";
import EfficiencyChart from "../analytics/EfficiencyChart";
import FillingTimeChart from "../analytics/FillingTimeChart";
import { getXAxisLabels } from "../utils/DateGrouping";

import useAnalytics from "../hooks/UseAnalytics";

const Analytics = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [shift, setShift] = useState("");

  const {
    analyticsData,
    efficiencyPoints,
    fillingTimePoints,
    efficiencyYAxis,
    fillingTimeYAxis,
    downloadReport,
  } = useAnalytics();

  const filteredEfficiencyData = getXAxisLabels(
    startDate,
    endDate,
    analyticsData.efficiencyTrend,
  );

  const filteredFillingData = getXAxisLabels(
    startDate,
    endDate,
    analyticsData.fillingTimeTrend,
  );

  return (
    <div className="dash-wrapper">
      {/* HEADER + FILTERS */}
      <AnalyticsFilters
        startDate={startDate}
        endDate={endDate}
        shift={shift}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setShift={setShift}
        downloadReport={downloadReport}
      />

      {/* STATS CARDS */}
      <StatCards stats={analyticsData.stats} />

      {/* TOP CHARTS */}
      <div className="chart-grid-layout">
        <ShiftComplianceChart data={analyticsData.shiftCompliance} />

        <EfficiencyChart
          data={filteredEfficiencyData}
          efficiencyYAxis={efficiencyYAxis}
        />
      </div>

      {/* BOTTOM FULL WIDTH CHART */}
      <FillingTimeChart
        data={filteredFillingData}
        fillingTimeYAxis={fillingTimeYAxis}
      />
    </div>
  );
};

export default Analytics;
