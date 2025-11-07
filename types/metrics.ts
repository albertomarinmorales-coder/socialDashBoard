// Types para las métricas del dashboard

export type TimeRange = '24h' | '7d' | '30d' | '90d';

export interface MetricCard {
  title: string;
  value: number;
  change: number; // porcentaje de cambio
  icon: string;
  trend: 'up' | 'down';
}

export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  fill?: boolean;
  tension?: number;
}

export interface SocialPlatform {
  id: string;
  name: string;
  followers: number;
  change24h: number;
  engagementRate: number;
  color: string;
  icon: string;
  trend: number[]; // últimos 7 días
}

export interface TopMetrics {
  totalFollowers: number;
  totalFollowersChange: number;
  engagementRate: number;
  engagementRateChange: number;
  totalReach: number;
  totalReachChange: number;
  growthRate: number;
  growthRateChange: number;
}
