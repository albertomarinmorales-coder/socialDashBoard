'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Header from '@/components/Header/Header';
import TopMetrics from '@/components/Dashboard/TopMetrics';
import MetricCard from '@/components/Dashboard/MetricCard';
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import DoughnutChart from '@/components/Charts/DoughnutChart';
import { topMetrics, socialPlatforms } from '@/data/socialData';

export default function Home() {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const handleRefresh = () => {
    setLastUpdate(new Date());
  };

  return (
    <DashboardLayout>
      <Header onRefresh={handleRefresh} lastUpdate={lastUpdate} />
      
      {/* Métricas Principales */}
      <TopMetrics metrics={topMetrics} />
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <LineChart />
        <BarChart />
      </div>
      
      <div className="mb-8">
        <DoughnutChart />
      </div>
      
      {/* Tarjetas de Redes Sociales */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Plataformas Sociales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <MetricCard key={platform.id} platform={platform} index={index} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
