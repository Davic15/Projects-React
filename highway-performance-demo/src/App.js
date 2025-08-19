import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const getRandom = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

function generateData() {
  // Incident types: Accident, Breakdown, Debris, Other
  const incidentTypes = [
    getRandom(0, 3),
    getRandom(0, 2),
    getRandom(0, 2),
    getRandom(0, 2),
  ];
  // Travel time by segment (A, B, C, D)
  const travelSegments = [
    getRandom(8, 20),
    getRandom(10, 25),
    getRandom(12, 30),
    getRandom(9, 22),
  ];
  return {
    trafficVolume: getRandom(800, 2000), // vehicles/hour
    avgSpeed: getRandom(60, 120), // km/h
    pavementCondition: getRandom(60, 100), // PCI (0-100)
    incidents: incidentTypes.reduce((a, b) => a + b, 0),
    travelTime: getRandom(10, 30), // min
    trafficHistory: Array.from({ length: 12 }, () => getRandom(800, 2000)),
    pavementHistory: Array.from({ length: 12 }, () => getRandom(60, 100)),
    incidentTypes,
    travelSegments,
  };
}

function App() {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Chart data
  const trafficData = {
    labels: [
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
    ],
    datasets: [
      {
        label: "Traffic Volume (vehicles/hour)",
        data: data.trafficHistory,
        fill: false,
        backgroundColor: "#1976d2",
        borderColor: "#1976d2",
        tension: 0.3,
      },
    ],
  };

  const pavementData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Pavement Condition Index (PCI)",
        data: data.pavementHistory,
        backgroundColor: "#43a047",
      },
    ],
  };

  const incidentPieData = {
    labels: ["Accident", "Breakdown", "Debris", "Other"],
    datasets: [
      {
        data: data.incidentTypes,
        backgroundColor: ["#e53935", "#fbc02d", "#1976d2", "#8e24aa"],
        borderWidth: 1,
      },
    ],
  };

  const travelSegmentData = {
    labels: ["Segment A", "Segment B", "Segment C", "Segment D"],
    datasets: [
      {
        label: "Avg. Travel Time (min)",
        data: data.travelSegments,
        backgroundColor: "#0288d1",
      },
    ],
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f5f6fa", minHeight: "100vh", padding: 24 }}>
      <h1 style={{ color: "#1976d2" }}>Highway Performance Monitoring Dashboard</h1>
      <h3 style={{ color: "#555" }}>Integrated with Transportation Performance Management (TPM)</h3>
      <div style={{ display: "flex", gap: 24, margin: "32px 0" }}>
        <KPI title="Traffic Volume" value={data.trafficVolume} unit="veh/hr" color="#1976d2" />
        <KPI title="Avg. Speed" value={data.avgSpeed} unit="km/h" color="#0288d1" />
        <KPI title="Pavement Condition" value={data.pavementCondition} unit="PCI" color="#43a047" />
        <KPI title="Incidents" value={data.incidents} unit="today" color="#e53935" />
        <KPI title="Avg. Travel Time" value={data.travelTime} unit="min" color="#fbc02d" />
      </div>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #0001", flex: 1, minWidth: 350 }}>
          <h4>Traffic Volume (Last 12 hours)</h4>
          <Line data={trafficData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
        <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #0001", flex: 1, minWidth: 350 }}>
          <h4>Pavement Condition Index (Year)</h4>
          <Bar data={pavementData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginTop: 32 }}>
        <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #0001", flex: 1, minWidth: 350, maxWidth: 400 }}>
          <h4>Incident Reports by Type</h4>
          <Pie data={incidentPieData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
        </div>
        <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #0001", flex: 1, minWidth: 350, maxWidth: 500 }}>
          <h4>Avg. Travel Time by Segment</h4>
          <Bar
            data={travelSegmentData}
            options={{
              indexAxis: "y",
              responsive: true,
              plugins: { legend: { display: false } },
              scales: { x: { min: 0, max: 35 } },
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: 40, color: "#888" }}>
        <small>
          Demo: Highway Performance Monitoring System (HPMS) integrated with TPM. Data updates every 5 seconds.
        </small>
      </div>
    </div>
  );
}

function KPI({ title, value, unit, color }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 24,
        borderRadius: 12,
        minWidth: 160,
        boxShadow: "0 2px 8px #0001",
        flex: 1,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 18, color: "#555", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 32, fontWeight: "bold", color }}>{value}</div>
      <div style={{ fontSize: 14, color: "#888" }}>{unit}</div>
    </div>
  );
}

export default App;