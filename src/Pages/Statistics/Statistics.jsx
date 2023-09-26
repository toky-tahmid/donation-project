/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [pie, setPie] = useState([]);
  const donationData = useLoaderData();

  useEffect(() => {
    const getDonation = JSON.parse(localStorage.getItem("donations"));

    if (getDonation) {
      setPie(getDonation);
    } 
  }, []);

  const data = [
    {
      name: "total data",
      value: donationData.length - pie.length, },
    { name: "donation data", value: pie.length },
  ];

  const RADIAN = Math.PI / 180;
  const pieChart = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  const COLORS = ["#FF444A", "#00C49F"];

  return (
    <div className="flex flex-col mt-40 md:mt-40 lg:mt-0  justify-center pointer-events-none items-center px-4 lg:px-0 h-[70vh] w-full">
      {pie.length > 0 ? (
        <PieChart width={500} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={pieChart}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      ) : (
        <PieChart width={500} height={400}>
          <Pie
            data={[{ name: "default", value: 100 }]}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={pieChart}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell fill={COLORS[0]} />
          </Pie>
        </PieChart>
      )}
      <div className="flex flex-col md:flex-row mt-6 items-center">
        <div className="my-4 flex gap-2 mr-6">
          <p className="text-[18px] font-semibold">Your Donation</p>
          <span className="px-16 lg:px-20 rounded-md bg-[#00C49F]"></span>
        </div>

        <div className="flex gap-2">
          <p className="text-[18px] font-semibold">Total Donation</p>
          <span className=" px-16 lg:px-20 rounded-md bg-[#FF444A]"></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
