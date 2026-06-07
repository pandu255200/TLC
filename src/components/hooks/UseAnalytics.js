import analyticsData from "../data/AnalyticData";

const useAnalytics = () => {
    // Efficiency Graph Points
    const efficiencyPoints = analyticsData.efficiencyTrend
        .map((item, index) => {
            const x = 50 + index * 75;
            const y = 120 - item.value;

            return `${x},${y}`;
        })
        .join(" ");

    // Filling Time Graph Points
    const fillingTimePoints = analyticsData.fillingTimeTrend
        .map((item, index) => {
            const x = 80 + index * 250;
            const y = 140 - item.value * 15;

            return `${x},${y}`;
        })
        .join(" ");

    // Efficiency Y Axis
    const efficiencyValues =
        analyticsData.efficiencyTrend.map(
            (item) => item.value
        );

    const efficiencyMax =
        Math.max(...efficiencyValues);

    const roundedEfficiencyMax =
        Math.ceil(efficiencyMax / 10) * 10;

    const efficiencyYAxis = [];

    for (
        let i = roundedEfficiencyMax;
        i >= 0;
        i -= 10
    ) {
        efficiencyYAxis.push(i);
    }

    // Filling Time Y Axis
    const fillingValues =
        analyticsData.fillingTimeTrend.map(
            (item) => item.value
        );

    const fillingMax =
        Math.max(...fillingValues);

    const roundedFillingMax =
        Math.ceil(fillingMax);

    const fillingTimeYAxis = [];

    for (
        let i = roundedFillingMax;
        i >= 0;
        i--
    ) {
        fillingTimeYAxis.push(i);
    }

    // CSV Download
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

        analyticsData.shiftCompliance.forEach(
            (item) => {
                csvContent += `${item.shift},${item.compliant},${item.nonCompliant}\n`;
            }
        );

        csvContent += "\n\n";

        csvContent +=
            "DAILY EFFICIENCY METRICS TREND\n";
        csvContent += "Date,Efficiency\n";

        analyticsData.efficiencyTrend.forEach(
            (item) => {
                csvContent += `${item.date},${item.value}%\n`;
            }
        );

        csvContent += "\n\n";

        csvContent +=
            "AVERAGE TROLLEY FILLING TIME\n";
        csvContent += "Date,Time (Minutes)\n";

        analyticsData.fillingTimeTrend.forEach(
            (item) => {
                csvContent += `${item.date},${item.value}\n`;
            }
        );

        const blob = new Blob(
            [csvContent],
            {
                type: "text/csv;charset=utf-8;",
            }
        );

        const url =
            URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;
        link.download =
            "Analytics_Report.csv";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };

    return {
        analyticsData,
        efficiencyPoints,
        fillingTimePoints,
        efficiencyYAxis,
        fillingTimeYAxis,
        downloadReport,
    };
};

export default useAnalytics;