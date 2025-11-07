'use client';

import { Bar } from 'react-chartjs-2';
import { barChartOptions } from '@/config/chartConfig';
import { engagementData } from '@/data/socialData';
import { motion } from 'framer-motion';

export default function BarChart() {
  const data = {
    labels: engagementData.map(item => item.platform),
    datasets: [
      {
        label: 'Likes',
        data: engagementData.map(item => item.likes),
        backgroundColor: '#10B981',
        borderRadius: 8,
        barThickness: 20,
      },
      {
        label: 'Comentarios',
        data: engagementData.map(item => item.comments),
        backgroundColor: '#3B82F6',
        borderRadius: 8,
        barThickness: 20,
      },
      {
        label: 'Compartidos',
        data: engagementData.map(item => item.shares),
        backgroundColor: '#8B5CF6',
        borderRadius: 8,
        barThickness: 20,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Engagement por Plataforma
      </h3>
      <div className="h-[300px]">
        <Bar data={data} options={barChartOptions} />
      </div>
    </motion.div>
  );
}
