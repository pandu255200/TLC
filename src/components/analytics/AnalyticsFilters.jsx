import React from "react";
import "../styles/live.css";

import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AnalyticsFilters = ({
  startDate,
  endDate,
  shift,
  setStartDate,
  setEndDate,
  setShift,
  downloadReport,
}) => {
  return (
    <div className="dash-header">
      <p className="dash-path">
        Menu / <span>Analytics</span>
      </p>

      <div className="dash-filter-box">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                size: "small",
                sx: {
                  width: 140,
                },
              },
            }}
          />

          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                size: "small",
                sx: {
                  width: 140,
                },
              },
            }}
          />
        </LocalizationProvider>

        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          className="shift-select"
        >
          <option value="">Shift</option>
          <option value="Shift A">Shift A</option>
          <option value="Shift B">Shift B</option>
          <option value="Shift C">Shift C</option>
          <option value="Shift D">Shift D</option>
          <option value="Shift E">Shift E</option>
        </select>

        <button className="report-download-btn" onClick={downloadReport}>
          ↓ Download Report
        </button>
      </div>
    </div>
  );
};

export default AnalyticsFilters;
