export const getXAxisLabels = (
    startDate,
    endDate,
    data
) => {
    if (!startDate || !endDate) return data;

    const diffDays =
        Math.ceil(
            (endDate - startDate) /
            (1000 * 60 * 60 * 24)
        ) + 1;

    // 1-10 Days → show every day
    if (diffDays <= 10) {
        return data;
    }

    // 11-20 Days → show every 4th day
    if (diffDays <= 20) {
        return data.filter(
            (_, index) => index % 4 === 0
        );
    }

    // 21-60 Days → show weeks
    if (diffDays <= 60) {
        return [
            { date: "Week 1", value: data[0]?.value || 0 },
            { date: "Week 2", value: data[1]?.value || 0 },
            { date: "Week 3", value: data[2]?.value || 0 },
            { date: "Week 4", value: data[3]?.value || 0 },
        ];
    }

    // 61-365 Days → show months
    return [
        { date: "Jan", value: data[0]?.value || 0 },
        { date: "Feb", value: data[1]?.value || 0 },
        { date: "Mar", value: data[2]?.value || 0 },
        { date: "Apr", value: data[3]?.value || 0 },
        { date: "May", value: data[4]?.value || 0 },
        { date: "Jun", value: data[5]?.value || 0 },
        { date: "Jul", value: data[6]?.value || 0 },
        { date: "Aug", value: data[7]?.value || 0 },
        { date: "Sep", value: data[8]?.value || 0 },
        { date: "Oct", value: data[9]?.value || 0 },
        { date: "Nov", value: data[10]?.value || 0 },
        { date: "Dec", value: data[11]?.value || 0 },
    ];
};