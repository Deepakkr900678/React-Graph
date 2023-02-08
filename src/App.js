import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const data = [
    { name: "Games", users: 9.28 },
    { name: "Producivity", users: 12.5 },
    { name: "Social Media", users: 37.5 },
    { name: "Texting", users: 40.63 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cell Phone Usage</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={110}
            fill="#009BFF"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#009BFF" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default App;
