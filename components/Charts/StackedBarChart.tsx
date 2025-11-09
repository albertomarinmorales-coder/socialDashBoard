'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StackedBarChart() {
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
        text: 'Engagement Detallado por Plataforma',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        padding: {
          bottom: 20,
        },
        color: '#1f2937',
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 13,
        },
        bodySpacing: 8,
        borderColor: 'rgba(99, 102, 241, 0.3)',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: false,
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          callback: function(value: any) {
            return value >= 1000 ? (value / 1000) + 'K' : value;
          },
          font: {
            size: 11,
          },
        },
      },
    },
  };

  const labels = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Likes',
        data: [4200, 5800, 2100, 1500],
        backgroundColor: 'rgba(99, 102, 241, 0.85)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Comentarios',
        data: [1200, 1500, 650, 450],
        backgroundColor: 'rgba(139, 92, 246, 0.85)',
        borderColor: 'rgba(139, 92, 246, 1)',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Compartidos',
        data: [680, 850, 380, 280],
        backgroundColor: 'rgba(59, 130, 246, 0.85)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Guardados',
        data: [320, 580, 180, 150],
        backgroundColor: 'rgba(14, 165, 233, 0.85)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div style={{ height: '400px' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
