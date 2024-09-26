import {chartsConfig} from '../configs'
const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    chart: {
      background: "#1e88e5", // Blue background
      foreColor: "#ffffff",  // White text and axis colors
    },
    colors: ["#ffffff"],  // White bar color for contrast
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      labels: {
        style: {
          colors: "#ffffff", // White labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff", // White labels
        },
      },
    },
    grid: {
      show: true,
     // To match a more minimal style
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      background: "#66bb6a", // Green background
      foreColor: "#ffffff",  // White text and axis colors
    },
    colors: ["#ffffff"],  // White line color for contrast
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    markers: {
      size: 5,
      colors: ["#ffffff"],
    },
    xaxis: {
      categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          colors: "#ffffff", // White labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff", // White labels
        },
      },
    },
    grid: {
      show: true,
    },
  },
};

const completedTasksChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
  options: {
    chart: {
      background: "#424242", // Dark background
      foreColor: "#ffffff",  // White text and axis colors
    },
    colors: ["#ffffff"],  // White line color for contrast
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    markers: {
      size: 5,
      colors: ["#ffffff"],
    },
    xaxis: {
      categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          colors: "#ffffff", // White labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff", // White labels
        },
      },
    },
    grid: {
      show: true,
    },
  },
};

// Export the charts data with the applied styles
export const statisticsChartsData = [
  {
    color: "white",
    title: "Website View",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Daily Sales",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
