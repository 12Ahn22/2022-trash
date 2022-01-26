import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, ChartTypeRegistry, registerables } from 'chart.js';


/**
 * @author 12ayo22
 * @description 도넛 형식 차트
 */
const Doughnut = () => {
  const labels = ['요청', '처리중', '완료', '닫힘', '재요청'];

  const data = {
    labels,
    weight: 0.3,
    datasets: [
      {
        label: '도넛 차트',
        data: [10, 10, 40, 60, 7],
        backgroundColor: ['#8C98A4', '#377DFF', '#28A745', '#000', '#71869D'],
        // circumference: 180, // 원 얼마나 쓸지
        // circumference : 1 * Math.PI,
        // rotation: -90, // 각
        hoverBackgroundColor: ['#8C98A4', '#377DFF', '#28A745', '#000', '#71869D'], // 호버 시 색상
        // hoverBorderWidth: 10, // 호버시 보더 넓이
        borderColor: "#fff", // 보더 색
        borderRadius: 5,
        hoverOffset: 10,
        // borderWidth: 0,
      }
    ],
  };

  // const config: ChartConfiguration<keyof ChartTypeRegistry, number[], string> = {
  const config: any = {
    type: 'doughnut',
    data: data,
    options: {
      cutout: "70%",
      responsive: false,
      radius: 85,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#888',
            usePointStyle: true,

          },
          position: 'bottom'
        }
      }
    }
  };

  const canvasRef: any = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx: any = canvasRef.current && canvasRef.current.getContext('2d');
    Chart.register(...registerables); // 이거 안하면 왜 안될까?
    // Chart.overrides.doughnut.cutout = "80%";
    const chart = new Chart(
      ctx,
      config
    );

    return () => {
      chart.destroy();
    }
  }, []);

  return <div style={{ width: "440px", height: "275px", border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <canvas style={{ width: "300px", height: "250px", }} ref={canvasRef}></canvas>
  </div>;
};

export default Doughnut;
