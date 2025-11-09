'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function AreaChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Alcance Semanal por Plataforma',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              const value = context.parsed.y;
              label += value >= 1000000 ? (value / 1000000).toFixed(1) + 'M' : 
                       value >= 1000 ? (value / 1000).toFixed(0) + 'K' : value;
            }
            return label;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return value >= 1000000 ? (value / 1000000) + 'M' : 
                   value >= 1000 ? (value / 1000) + 'K' : value;
          },
        },
      },
    },
  };

  const labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Facebook',
        data: [850000, 920000, 880000, 950000, 1100000, 890000, 820000],
        borderColor: 'rgba(24, 119, 242, 1)',
        backgroundColor: 'rgba(24, 119, 242, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(24, 119, 242, 1)',
      },
      {
        label: 'Instagram',
        data: [1100000, 1250000, 1180000, 1300000, 1450000, 1200000, 1050000],
        borderColor: 'rgba(228, 64, 95, 1)',
        backgroundColor: 'rgba(228, 64, 95, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(228, 64, 95, 1)',
      },
      {
        label: 'Twitter',
        data: [420000, 480000, 450000, 510000, 550000, 470000, 430000],
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(0, 0, 0, 1)',
      },
      {
        label: 'LinkedIn',
        data: [280000, 320000, 310000, 350000, 380000, 330000, 290000],
        borderColor: 'rgba(10, 102, 194, 1)',
        backgroundColor: 'rgba(10, 102, 194, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(10, 102, 194, 1)',
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div style={{ height: '400px' }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
