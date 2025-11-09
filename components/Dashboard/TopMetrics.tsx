'use client';

import { Users, TrendingUp, Eye, BarChart3 } from 'lucide-react';
import StatCard from './StatCard';
import type { TopMetrics as TopMetricsType } from '@/types/metrics';

interface TopMetricsProps {
  metrics: TopMetricsType;
}

export default function TopMetrics({ metrics }: TopMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatCard
        title="Total Seguidores"
        value={metrics.totalFollowers}
        change={metrics.totalFollowersChange}
        icon={Users}
        format="number"
        delay={0}
      />
      
      <StatCard
        title="Engagement Rate"
        value={metrics.engagementRate}
        change={metrics.engagementRateChange}
        icon={BarChart3}
        format="percentage"
        delay={0.1}
      />
      
      <StatCard
        title="Alcance Total"
        value={metrics.totalReach}
        change={metrics.totalReachChange}
        icon={Eye}
        format="number"
        delay={0.2}
      />
      
      <StatCard
        title="Tasa de Crecimiento"
        value={metrics.growthRate}
        change={metrics.growthRateChange}
        icon={TrendingUp}
        format="percentage"
        delay={0.3}
      />
    </div>
  );
}
