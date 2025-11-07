'use client';

import { Doughnut } from 'react-chartjs-2';
import { doughnutChartOptions } from '@/config/chartConfig';
import { audienceDistribution } from '@/data/socialData';
import { motion } from 'framer-motion';
import { formatNumber } from '@/utils/dataFormatters';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { createElement } from 'react';

const platformIcons: { [key: string]: any } = {
  'Facebook': FaFacebook,
  'Instagram': FaInstagram,
  'Twitter': FaTwitter,
  'LinkedIn': FaLinkedin,
};

export default function DoughnutChart() {
  const totalFollowers = audienceDistribution.reduce((sum, item) => sum + item.followers, 0);

  const data = {
    labels: audienceDistribution.map(item => item.platform),
    datasets: [
      {
        data: audienceDistribution.map(item => item.percentage),
        backgroundColor: audienceDistribution.map(item => item.color),
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 0, // Removido el efecto de hover
      },
    ],
  };

  const options = {
    ...doughnutChartOptions,
    plugins: {
      ...doughnutChartOptions.plugins,
      legend: {
        display: false, // Ocultamos la leyenda por defecto para usar una personalizada
      },
      tooltip: {
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
            const platform = audienceDistribution[context.dataIndex];
            return `${formatNumber(platform.followers)} seguidores (${platform.percentage}%)`;
          },
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm max-w-2xl mx-auto"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Distribución de Audiencia
        </h3>
        
        <div className="flex items-center gap-8 justify-center w-full">
          {/* Gráfico */}
          <div className="w-52 h-52 relative shrink-0">
            <Doughnut data={data} options={options} />
            {/* Total en el centro */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(totalFollowers)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Seguidores
              </p>
            </div>
          </div>

          {/* Leyenda personalizada con iconos */}
          <div className="space-y-3">
            {audienceDistribution.map((item) => {
              const Icon = platformIcons[item.platform];
              return (
                <div key={item.platform} className="flex items-center gap-3">
                  <Icon 
                    className="w-5 h-5 shrink-0" 
                    style={{ color: item.color }}
                  />
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-20">
                      {item.platform}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {formatNumber(item.followers)}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
