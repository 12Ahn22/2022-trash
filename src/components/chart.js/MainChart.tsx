import React, { useEffect, useMemo, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

/**
 * @author 12ayo22
 * @description Chart.js 테스트용 컴포넌트
 */
const MainChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgb(6, 87, 209)',
      borderColor: 'rgb(6, 87, 209)',
      data: [30, 20, 15, 7, 25, 15, 10],
    }]
  };

  const config: ChartConfiguration = {
    type: 'line',
    data: data,
    options: {}
  };

  useEffect(() => {
    const ctx: any = chartRef.current && chartRef.current.getContext('2d');
    Chart.register(...registerables);
    new Chart(
      ctx,
      config
    );
  }, [chartRef.current]);

  return <div>
    <canvas ref={chartRef} id="myChart"></canvas>
  </div>;
};
export default MainChart;
