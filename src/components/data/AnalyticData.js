const analyticsData = {
    stats: {
        avgFillAccuracy: "94%",
        totalTrolleys: 200,
        activeAlerts: 12,
        processedPerHour: 48,
    },

    shiftCompliance: [
        {
            shift: "Shift 1",
            compliant: 188,
            nonCompliant: 20,
        },
        {
            shift: "Shift 2",
            compliant: 190,
            nonCompliant: 15,
        },
        {
            shift: "Shift 3",
            compliant: 200,
            nonCompliant: 10,
        },
    ],

    efficiencyTrend: [
        { date: "01/05/26", value: 28 },
        { date: "02/05/26", value: 30 },
        { date: "03/05/26", value: 32 },
        { date: "04/05/26", value: 29 },
        { date: "05/05/26", value: 35 },
        { date: "06/05/26", value: 38 },
        { date: "07/05/26", value: 40 },
        { date: "08/05/26", value: 42 },
        { date: "09/05/26", value: 37 },
        { date: "10/05/26", value: 30 },

        { date: "11/05/26", value: 20 },
        { date: "12/05/26", value: 25 },
        { date: "13/05/26", value: 40 },
        { date: "14/05/26", value: 30 },
        { date: "15/05/26", value: 34 },
        { date: "16/05/26", value: 36 },
        { date: "17/05/26", value: 41 },
        { date: "18/05/26", value: 44 },
        { date: "19/05/26", value: 39 },
        { date: "20/05/26", value: 35 },

        { date: "21/05/26", value: 33 },
        { date: "22/05/26", value: 31 },
        { date: "23/05/26", value: 38 },
        { date: "24/05/26", value: 42 },
        { date: "25/05/26", value: 45 },
        { date: "26/05/26", value: 43 },
        { date: "27/05/26", value: 40 },
        { date: "28/05/26", value: 36 },
        { date: "29/05/26", value: 34 },
        { date: "30/05/26", value: 32 },

        { date: "31/05/26", value: 30 },
        { date: "01/06/26", value: 35 },
        { date: "02/06/26", value: 37 },
        { date: "03/06/26", value: 40 },
        { date: "04/06/26", value: 44 },
        { date: "05/06/26", value: 42 },
        { date: "06/06/26", value: 39 },
        { date: "07/06/26", value: 36 },
        { date: "08/06/26", value: 34 },
        { date: "09/06/26", value: 33 },

        { date: "10/06/26", value: 88 },
        { date: "11/06/26", value: 70 },
        { date: "12/06/26", value: 75 },
        { date: "13/06/26", value: 82 },
        { date: "14/06/26", value: 88 },
        { date: "15/06/26", value: 92 },
    ],

    fillingTimeTrend: [
        { date: "01/05/26", value: 1.2 },
        { date: "02/05/26", value: 1.4 },
        { date: "03/05/26", value: 1.6 },
        { date: "04/05/26", value: 1.8 },
        { date: "05/05/26", value: 2.0 },
        { date: "06/05/26", value: 2.2 },
        { date: "07/05/26", value: 2.4 },
        { date: "08/05/26", value: 2.6 },
        { date: "09/05/26", value: 2.8 },
        { date: "10/05/26", value: 3.0 },

        { date: "11/05/26", value: 2.0 },
        { date: "12/05/26", value: 2.5 },
        { date: "13/05/26", value: 1.0 },
        { date: "14/05/26", value: 3.0 },
        { date: "15/05/26", value: 2.8 },
        { date: "16/05/26", value: 2.6 },
        { date: "17/05/26", value: 2.4 },
        { date: "18/05/26", value: 2.2 },
        { date: "19/05/26", value: 2.0 },
        { date: "20/05/26", value: 1.8 },

        { date: "21/05/26", value: 1.7 },
        { date: "22/05/26", value: 1.9 },
        { date: "23/05/26", value: 2.1 },
        { date: "24/05/26", value: 2.3 },
        { date: "25/05/26", value: 2.5 },
        { date: "26/05/26", value: 2.7 },
        { date: "27/05/26", value: 2.9 },
        { date: "28/05/26", value: 3.1 },
        { date: "29/05/26", value: 3.0 },
        { date: "30/05/26", value: 2.8 },

        { date: "31/05/26", value: 2.6 },
        { date: "01/06/26", value: 2.4 },
        { date: "02/06/26", value: 2.2 },
        { date: "03/06/26", value: 2.0 },
        { date: "04/06/26", value: 1.8 },
        { date: "05/06/26", value: 1.6 },
        { date: "06/06/26", value: 1.5 },
        { date: "07/06/26", value: 1.7 },
        { date: "08/06/26", value: 1.9 },
        { date: "09/06/26", value: 2.1 },

        { date: "10/06/26", value: 2.3 },
        { date: "11/06/26", value: 2.5 },
        { date: "12/06/26", value: 2.7 },
        { date: "13/06/26", value: 2.9 },
        { date: "14/06/26", value: 3.1 },
        { date: "15/06/26", value: 4.0 },
    ]
};
export const homeData = {
    lidarStatus: {
        lidar1: "active",
        lidar2: "inactive",

        history: [
            { lidar: "L1", time: "10:40 AM", status: "Active" },
            { lidar: "L2", time: "10:25 AM", status: "Inactive" },
            { lidar: "L2", time: "10:10 AM", status: "Active" },
            { lidar: "L1", time: "09:55 AM", status: "Active" },
            { lidar: "L2", time: "09:40 AM", status: "Active" },
        ],
    },

    stats: [
        {
            title: "YESTERDAY'S EFFICIENCY",
            value: "97%",
            className: "peach-card",
            tooltip:
                "Overall filling achieved today.",
        },
        {
            title: "COMPLIANCE",
            value: "20",
            className: "purple-card",
            tooltip: "Whenever a trolley filled properly 90% or above that trolley is recorded as compliance ",
        },
        {
            title: "NON COMPLIANCE",
            value: "6",
            className: "lavender-card",
            tooltip:
                "Whenever a trolley filled with less than 90% accuracy that trolley is recorded as non compliace",
        },
        {
            title: "OVERFILL INCIDENTS",
            value: "12",
            className: "pink-card",
            tooltip:
                "Number of overfill thresholds violations detected.",
        },
        {
            title: "UNDERFILL INCIDENTS",
            value: "11",
            className: "green-card",
            tooltip:
                "Number of trolleys filled below target level.",
        },
    ],

    alertTrend: [
        {
            shift: "Shift 1",
            value: "90",
        },
        {
            shift: "Shift 2",
             value: "95",
        },
        {
            shift: "Shift 3",
             value: "20",
        },
    ],

    efficiencyTrend: [
        {
            Day: "Mon",
            value: 76,
        },
        {
            Day: "Tue",
            value: 81,
        },
        {
            Day: "Wed ",
            value: 84,
        },
        {
            Day: "Thu",
            value: 89,
        },
        {
            Day: "Fri",
            value: 92,
        },
        {
            Day: "Sat",
            value: 10,
        },
        {
            Day: "Sun",
            value: 15,
        },
    ],
    // dayWiseEfficiency: [
    //     { label: "LB1", value: 7 },
    //     { label: "LB2", value: 4 },
    //     { label: "LB3", value: 2 },
    // ],

    monthWiseEfficiency: [
         {
            Week: "Week 1",
            value: 76,
        },
        {
            Week: "Week 2",
            value: 81,
        },
        {
            Week: "Week 3 ",
            value: 84,
        },
        {
            Week: "Week 4",
            value: 89,
        },
    ],

    yearWiseEfficiency: [
        { month: "Jan", value: 88 },
        { month: "Feb", value: 88 },
        { month: "Mar", value: 88 },
        { month: "Apr", value: 88 },
        { month: "May", value: 88 },
        { month: "Jun", value: 88 },
        { month: "Jul", value: 88 },
        { month: "Aug", value: 88 },
        { month: "Sep", value: 88 },
        { month: "Oct", value: 88 },
        { month: "Nov", value: 88 },
        { month: "Dec", value: 88 },
    ],

    avgEfficiencyPerYear: [
        {
            year: "2026",
            value: 85,
        }
        
    ],

};

export const configurationData = {
    threshold: {
        targetValue: "00",
        minRange: "00",
        maxRange: "00",
    },

    complianceThreshold: 85,

    users: [
        "Ravi Kumar",
        "Sita Patel",
        "Amit Sharma",
        "Neha Gupta",
        "Vikram Singh",
    ],

    shifts: [
        {
            id: "1",
            name: "Shift 1",
            selectedUsers: [],
        },
        {
            id: "2",
            name: "Shift 2",
            selectedUsers: [],
        },
        {
            id: "3",
            name: "Shift 3",
            selectedUsers: [],
        },
    ],
};




export default analyticsData;