'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function MultiLineChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
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
        text: 'Comparativa de Crecimiento por Plataforma',
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
              label += context.parsed.y.toLocaleString() + ' seguidores';
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
        beginAtZero: false,
        ticks: {
          callback: function(value: any) {
            return value >= 1000 ? (value / 1000) + 'K' : value;
          },
        },
      },
    },
  };

  const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Facebook',
        data: [17200, 17450, 17680, 17920, 18100, 18250, 18380, 18500],
        borderColor: 'rgba(24, 119, 242, 1)',
        backgroundColor: 'rgba(24, 119, 242, 0.1)',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Instagram',
        data: [12900, 13200, 13600, 14100, 14500, 14850, 15100, 15300],
        borderColor: 'rgba(228, 64, 95, 1)',
        backgroundColor: 'rgba(228, 64, 95, 0.1)',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Twitter',
        data: [8650, 8700, 8750, 8800, 8850, 8880, 8890, 8900],
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'LinkedIn',
        data: [4190, 4350, 4520, 4680, 4820, 4950, 5040, 5123],
        borderColor: 'rgba(10, 102, 194, 1)',
        backgroundColor: 'rgba(10, 102, 194, 0.1)',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
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
