import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'pink',
        '#17a2b8',
        '#ffc107',
        'rgb(87, 185, 96)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    let chartInstance = null;

    if (chartInstance) {
      chartInstance.destroy();
    }

 
    chartInstance = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="chart-container" style={{ position: 'relative', height: '40vh', width: '80vw' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PieChart;
