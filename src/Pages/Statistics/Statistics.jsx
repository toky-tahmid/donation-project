import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Statistics = () => {
  const pieChartRef = useRef(null);

  useEffect(() => {
    const xValues = ["Your Donation", "Total Donation"];
    const yValues = [12, 1];
    const barColors = ["#FF444A", "#00C49F"];
    const pieCtx = document.getElementById("pieChart");

    if (pieChartRef.current) {
      pieChartRef.current.destroy();
    }

    pieChartRef.current = new Chart(pieCtx, {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Donations chart",
          },
        },
      },
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <canvas id="pieChart" style={{ width: '100%' }}></canvas>
      </div>
    </div>
  );
};

export default Statistics;
