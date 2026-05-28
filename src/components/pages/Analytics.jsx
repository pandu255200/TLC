import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/live.css";
import { HelpCircle } from "lucide-react";

const Analytics = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [shift, setShift] = useState("");
  const [analyticsData, setAnalyticsData] = useState(null);

  const loadPCDData = async () => {
    try {
      const response = await fetch("/trolley.pcd");

      const text = await response.text();

      const lines = text.split("\n");

    
      const pointLines = lines.filter((line) => {
        const first = line.trim().split(" ")[0];

        return !isNaN(parseFloat(first));
      });

      
      const sampled = pointLines.filter((_, index) => index % 20 === 0);

      const points = sampled.map((line) => {
        const [x, y, z] = line.trim().split(" ").map(Number);

        return { x, y, z };
      });

      const totalPoints = points.length;

      const avgHeight = points.reduce((sum, p) => sum + p.z, 0) / totalPoints;

      const maxHeight = Math.max(...points.map((p) => p.z));

      const minHeight = Math.min(...points.map((p) => p.z));

      const fillAccuracy = Math.min(
        100,
        Math.round((avgHeight / maxHeight) * 100),
      );

  
      const generatedData = {
        stats: {
          totalTrolleys: totalPoints,
          avgFillAccuracy: `${fillAccuracy}%`,
          activeAlerts: Math.round(maxHeight * 10),
          processedPerHour: Math.round(avgHeight * 20),
        },

        shiftCompliance: [
          {
            shift: "Shift A",
            compliant: 100,
            nonCompliant: 20,
          },
          {
            shift: "Shift B",
            compliant: 120,
            nonCompliant: 15,
          },
          {
            shift: "Shift C",
            compliant: 151,
            nonCompliant: 10,
          },
        ],

        efficiencyTrend: [
          {
            date: "10/05/26",
            value: 30,
          },
          {
            date: "11/05/26",
            value: 20,
          },
          {
            date: "12/05/26",
            value: 25,
          },
          {
            date: "13/05/26",
            value: 40,
          },
          {
            date: "14/05/26",
            value: 30,
          },
        ],

        fillingTimeTrend: [
          {
            date: "10/05/26",
            value: 0.5,
          },
          {
            date: "11/05/26",
            value: 2,
          },
          {
            date: "12/05/26",
            value: 2.5,
          },
          {
            date: "13/05/26",
            value: 1,
          },
          {
            date: "14/05/26",
            value: 3,
          },
        ],
      };

      setAnalyticsData(generatedData);
      console.log("===== PCD ANALYTICS =====");

      console.log("Total Points:", totalPoints);

      console.log("Average Height:", avgHeight);

      console.log("Maximum Height:", maxHeight);

      console.log("Minimum Height:", minHeight);

      console.log("Fill Accuracy:", fillAccuracy);

      console.log("Generated Analytics:", generatedData);

      console.log("Sample PCD Points:", points.slice(0, 10));
    } catch (error) {
      console.error("PCD Load Error:", error);
    }
  };

  const fillingTimePoints = analyticsData?.fillingTimeTrend
    ?.map((item, index) => {
      const x = 80 + index * 250;

      const y = 140 - item.value * 15;

      return `${x},${y}`;
    })
    .join(" ");

  useEffect(() => {
    loadPCDData();
  }, []);

  if (!analyticsData) {
    return <div>Loading analytics...</div>;
  }

  const efficiencyPoints = analyticsData?.efficiencyTrend
    ?.map((item, index) => {
      const x = 50 + index * 75;
      const y = 120 - item.value;

      return `${x},${y}`;
    })
    .join(" ");

  const efficiencyValues = analyticsData.efficiencyTrend.map(
    (item) => item.value,
  );

  const efficiencyMax = Math.max(...efficiencyValues);

  const efficiencyMin = Math.min(...efficiencyValues);

  // round max to nearest 5
  const roundedEfficiencyMax = Math.ceil(efficiencyMax / 5) * 5;

  // create steps like 0,5,10,15,20
  const efficiencyYAxis = [];

  for (let i = roundedEfficiencyMax; i >= 0; i -= 5) {
    efficiencyYAxis.push(i);
  }

  const downloadReport = () => {
    let csvContent = "";


    csvContent += "ANALYTICS REPORT\n\n";

    csvContent += "SUMMARY\n";

    csvContent += "Property,Value\n";

    csvContent += `Total Trolleys Processed,${analyticsData.stats.totalTrolleys}\n`;

    csvContent += `Average Fill Accuracy,${analyticsData.stats.avgFillAccuracy}\n`;

    csvContent += `Active Alerts,${analyticsData.stats.activeAlerts}\n`;

    csvContent += `Trolleys Processed Per Hour,${analyticsData.stats.processedPerHour}\n`;

    csvContent += "\n\n";


    csvContent += "SHIFT WISE COMPLIANCE TREND\n";

    csvContent += "Shift,Compliant,Non-Compliant\n";

    analyticsData.shiftCompliance.forEach((item) => {
      csvContent += `${item.shift},${item.compliant},${item.nonCompliant}\n`;
    });

    csvContent += "\n\n";


    csvContent += "DAILY EFFICIENCY METRICS TREND\n";

    csvContent += "Date,Efficiency\n";

    analyticsData.efficiencyTrend.forEach((item) => {
      csvContent += `${item.date},${item.value}%\n`;
    });

    csvContent += "\n\n";


    csvContent += "AVERAGE TROLLEY FILLING TIME\n";

    csvContent += "Date,Time (Minutes)\n";

    analyticsData.fillingTimeTrend.forEach((item) => {
      csvContent += `${item.date},${item.value}\n`;
    });

 

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "Analytics_Report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };
  return (
    <div className="dash-wrapper">
      {/* HEADER */}
      <div className="dash-header">
        <p className="dash-path">
          Menu / <span>Analytics</span>
        </p>

        <div className="dash-filter-box">
          {/* START DATE */}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            className="custom-date-picker"
            dateFormat="dd/MM/yyyy"
          />

          {/* END DATE */}
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            className="custom-date-picker"
            dateFormat="dd/MM/yyyy"
          />

          {/* SHIFT */}
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

      {/* STATS */}
      <div className="stats-layout">
        <div className="info-card violet-bg">
          <div className="card-top">
            <p>TOTAL TROLLEY'S PROCESSED</p>
            <div className="info-tooltip-wrapper">
              <span className="circle-info">i</span>

              <div className="info-tooltip">
                This card shows the total trolley's processed during selected
                duration
              </div>
            </div>
          </div>

          <h2>{analyticsData.stats.totalTrolleys}</h2>
        </div>

        <div className="info-card orange-bg">
          <div className="card-top">
            <p>AVG FILL ACCURACY</p>
            <div className="info-tooltip-wrapper">
              <span className="circle-info">i</span>

              <div className="info-tooltip">
                This card shows the number of trolley's filled without
                overfill/underfill incidents per 100 trolley fills.
              </div>
            </div>
          </div>

          <h2>{analyticsData.stats.avgFillAccuracy}</h2>
        </div>

        <div className="info-card soft-purple-bg">
          <div className="card-top">
            <p>ACTIVE ALERTS</p>
            <div className="info-tooltip-wrapper">
              <span className="circle-info">i</span>

              <div className="info-tooltip">
                This card determines the total number of alerts generated for
                the selected duration.
              </div>
            </div>
          </div>

          <h2>{analyticsData.stats.activeAlerts}</h2>
        </div>

        <div className="info-card green-bg-light">
          <div className="card-top">
            <p>TROLLEY'S PROCESSED PER HOUR</p>
            <div className="info-tooltip-wrapper">
              <span className="circle-info">i</span>

              <div className="info-tooltip">
                This card shows average number of trolley's filled per hour.
              </div>
            </div>
          </div>

          <h2>{analyticsData.stats.processedPerHour}</h2>
        </div>
      </div>

      {/* CHARTS */}
      {/* TOP CHARTS */}
      <div className="chart-grid-layout">
        {/* BAR CHART */}
        <div className="graph-section">
          <h3>Shift Wise Compliance Trend</h3>

          <div className="graph-card">
            <div className="graph-header">
              <div className="legend-box">
                <span>
                  <i className="dot-green"></i>
                  Compliant
                </span>

                <span>
                  <i className="dot-gray"></i>
                  Non-Compliant
                </span>
              </div>

              <div className="info-tooltip-wrapper">
                <span className="circle-info">i</span>

                <div className="info-tooltip">
                  Shift-based count of successfully complaint and non-complaint
                  trolley fills.
                </div>
              </div>
            </div>

            <div className="graph-body">
              <div className="axis-side">
                <div className="vertical-label">Number of Events</div>

                <div className="scale-values">
                  <span>240</span>
                  <span>200</span>
                  <span>160</span>
                  <span>120</span>
                  <span>80</span>
                  <span>40</span>
                  <span>0</span>
                </div>
              </div>

              <div className="bars-wrapper">
                {analyticsData.shiftCompliance.map((item, index) => (
                  <div className="single-bar-group" key={index}>
                    <div className="bar-stack-wrapper">
                      {/* COMPLIANT */}
                      <div
                        className="bottom-green-bar"
                        style={{
                          height: `${(item.compliant / 240) * 120}px`,
                        }}
                      >
                        <span>{item.compliant}</span>
                      </div>

                      {/* NON COMPLIANT */}
                      <div
                        className="top-gray-bar"
                        style={{
                          height: `${Math.max(
                            (item.nonCompliant / 240) * 120,
                            12,
                          )}px`,
                        }}
                      >
                        <span>{item.nonCompliant}</span>
                      </div>
                    </div>
                    <p>{item.shift}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bottom-axis-title">Shifts</div>
          </div>
        </div>

        {/* TOP RIGHT LINE GRAPH */}
        <div className="graph-section">
          <h3>Daily Efficiency Metrics Trend</h3>

          <div className="graph-card">
            <div className="graph-header align-end">
              <div className="info-tooltip-wrapper">
                <span className="circle-info">i</span>

                <div className="info-tooltip">
                  Day-wise operation filling efficiency performance.
                </div>
              </div>
            </div>

            <div className="line-area-wrapper">
              <div className="line-axis-side">
                <div className="vertical-label">Trolley Completion Target</div>

                <div className="scale-values">
                  <span>100%</span>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                  <span>0</span>
                </div>
              </div>

              <div className="line-chart-wrapper">
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>

                <svg viewBox="0 0 400 140" className="svg-chart">
                  {/* LINE */}
                  <polyline
                    fill="none"
                    stroke="#6b6b6b"
                    strokeWidth="1.5"
                    points={efficiencyPoints}
                  />

                  {analyticsData.efficiencyTrend.map((item, index) => {
                    const x = 50 + index * 75;
                    const y = 120 - item.value;

                    return (
                      <circle key={index} cx={x} cy={y} r="4" fill="#5b5bf7" />
                    );
                  })}

                  {/* DATES */}
                  <g fill="#777" fontSize="8" textAnchor="middle">
                    {analyticsData.efficiencyTrend.map((item, index) => {
                      const x = 50 + index * 75;

                      return (
                        <text key={index} x={x} y="130">
                          {item.date}
                        </text>
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>

            <div className="bottom-axis-title">Dates</div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH BOTTOM GRAPH */}
      <div className="graph-section full-width-graph">
        <h3>Average Trolley Filling Time</h3>

        <div className="graph-card">
          <div className="graph-header align-end">
            <div className="info-tooltip-wrapper">
              <span className="circle-info">i</span>

              <div className="info-tooltip">
                Daily trend of average trolley filling duration.
              </div>
            </div>
          </div>

          <div className="line-area-wrapper">
            <div className="line-axis-side">
              <div className="vertical-label">Time (Minutes)</div>

              <div className="scale-values">
                <span>7m</span>
                <span>6m</span>
                <span>5m</span>
                <span>4m</span>
                <span>3m</span>
                <span>2m</span>
                <span>1m</span>
                <span>0m</span>
              </div>
            </div>

            <div className="line-chart-wrapper">
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>

              <svg viewBox="0 0 1200 160" className="svg-chart">
                {/* LINE */}
                <polyline
                  fill="none"
                  stroke="#6b6b6b"
                  strokeWidth="2"
                  points={fillingTimePoints}
                />

                {/* DOTS */}
                {analyticsData.fillingTimeTrend.map((item, index) => {
                  const x = 80 + index * 250;

                  const y = 140 - item.value * 15;

                  return (
                    <circle key={index} cx={x} cy={y} r="5" fill="#5b5bf7" />
                  );
                })}

                {/* DATES */}
                <g fill="#777" fontSize="11" textAnchor="middle">
                  {analyticsData.fillingTimeTrend.map((item, index) => {
                    const x = 80 + index * 250;

                    return (
                      <text key={index} x={x} y="150">
                        {item.date}
                      </text>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>

          <div className="bottom-axis-title">Dates</div>

          <div className="help-button">
            <HelpCircle className="help-icon" strokeWidth={1.2} size={24} />
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Analytics;
