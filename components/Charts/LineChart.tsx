'use client';

import { Line } from 'react-chartjs-2';
import { lineChartOptions } from '@/config/chartConfig';
import { generateFollowerGrowthData, platformColors } from '@/data/socialData';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const platformIcons = {
  'Facebook': FaFacebook,
  'Instagram': FaInstagram,
  'Twitter': FaTwitter,
  'LinkedIn': FaLinkedin,
};

// Crear imágenes de iconos como data URLs para usar en el tooltip
const createIconDataUrl = (IconComponent: any, color: string) => {
  if (typeof window === 'undefined') return '';
  
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Por ahora usamos círculos de color, la solución completa requeriría renderizar los iconos SVG
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 16, 16);
  
  return canvas.toDataURL();
};

export default function LineChart() {
  const followerData = generateFollowerGrowthData(7); // últimos 7 días

  const data = {
    labels: followerData.map(item => item.date),
    datasets: [
      {
        label: 'Facebook',
        data: followerData.map(item => Math.round(item.facebook)),
        borderColor: platformColors.facebook,
        backgroundColor: platformColors.facebook + '20',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
      {
        label: 'Instagram',
        data: followerData.map(item => Math.round(item.instagram)),
        borderColor: platformColors.instagram,
        backgroundColor: platformColors.instagram + '20',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
      {
        label: 'Twitter',
        data: followerData.map(item => Math.round(item.twitter)),
        borderColor: platformColors.twitter,
        backgroundColor: platformColors.twitter + '20',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
      {
        label: 'LinkedIn',
        data: followerData.map(item => Math.round(item.linkedin)),
        borderColor: platformColors.linkedin,
        backgroundColor: platformColors.linkedin + '20',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
    ],
  };

  const customOptions = {
    ...lineChartOptions,
    plugins: {
      ...lineChartOptions.plugins,
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 13,
        },
        cornerRadius: 8,
        displayColors: false, // Quitar los cuadrados de colores
        callbacks: {
          title: function(context: any) {
            return context[0].label;
          },
          label: function(context: any) {
            const platform = context.dataset.label;
            const value = context.parsed.y;
            return `${platform}: ${value.toLocaleString()}`;
          },
        }
      }
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Crecimiento de Seguidores
      </h3>
      <div className="h-[300px] mb-4">
        <Line data={data} options={customOptions} />
      </div>
      
      {/* Leyenda personalizada con iconos */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {Object.entries(platformIcons).map(([platform, Icon]) => (
          <div key={platform} className="flex items-center gap-2">
            <Icon 
              className="w-4 h-4" 
              style={{ color: platformColors[platform.toLowerCase() as keyof typeof platformColors] }}
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {platform}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
