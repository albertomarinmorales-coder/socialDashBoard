'use client';

import { motion } from 'framer-motion';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Header from '@/components/Header/Header';
import TopMetrics from '@/components/Dashboard/TopMetrics';
import MetricCard from '@/components/Dashboard/MetricCard';
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import DoughnutChart from '@/components/Charts/DoughnutChart';
import { topMetrics, socialPlatforms } from '@/data/socialData';
import { useRealTimeData } from '@/hooks/useRealTimeData';

export default function Home() {
  const { metrics, platforms, lastUpdate, isUpdating, forceUpdate } = useRealTimeData(
    topMetrics,
    socialPlatforms,
    30000 // Actualizar cada 30 segundos
  );

  return (
    <DashboardLayout>
      <Header onRefresh={forceUpdate} lastUpdate={lastUpdate} />
      
      {/* Métricas Principales */}
      <TopMetrics metrics={metrics} />
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <LineChart />
        <BarChart />
      </div>
      
      <div className="mb-6">
        <DoughnutChart />
      </div>
      
      {/* Tarjetas de Redes Sociales */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Plataformas Sociales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <MetricCard key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </div>

      {/* Indicador de actualización */}
      {isUpdating && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 glass"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm">Actualizando datos...</span>
        </motion.div>
      )}
    </DashboardLayout>
  );
}
