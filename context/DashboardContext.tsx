'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { topMetrics, socialPlatforms } from '@/data/socialData';
import type { TopMetrics, SocialPlatform } from '@/types/metrics';

type TimePeriod = 'today' | '7days' | '30days' | '90days';

interface DashboardContextType {
  metrics: TopMetrics;
  platforms: SocialPlatform[];
  timePeriod: TimePeriod;
  lastUpdate: Date;
  isUpdating: boolean;
  setTimePeriod: (period: TimePeriod) => void;
  refreshData: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [metrics, setMetrics] = useState<TopMetrics>(topMetrics);
  const [platforms, setPlatforms] = useState<SocialPlatform[]>(socialPlatforms);
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('7days');
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isUpdating, setIsUpdating] = useState(false);

  // Función para simular variación de datos
  const simulateDataVariation = (value: number, maxVariation: number = 5): number => {
    const variation = (Math.random() - 0.5) * 2 * maxVariation;
    const newValue = Math.round(value + (value * variation) / 100);
    return Math.max(0, newValue);
  };

  const simulatePercentageVariation = (value: number, maxVariation: number = 0.2): number => {
    const variation = (Math.random() - 0.5) * 2 * maxVariation;
    const newValue = value + variation;
    return Math.round(newValue * 10) / 10;
  };

  // Función para actualizar datos con variación simulada
  const updateData = () => {
    setIsUpdating(true);

    // Actualizar métricas principales
    setMetrics({
      totalFollowers: simulateDataVariation(topMetrics.totalFollowers, 3),
      totalFollowersChange: simulatePercentageVariation(topMetrics.totalFollowersChange, 1),
      engagementRate: simulatePercentageVariation(topMetrics.engagementRate, 0.3),
      engagementRateChange: simulatePercentageVariation(topMetrics.engagementRateChange, 0.1),
      totalReach: simulateDataVariation(topMetrics.totalReach, 5),
      totalReachChange: simulatePercentageVariation(topMetrics.totalReachChange, 1),
      growthRate: simulatePercentageVariation(topMetrics.growthRate, 0.5),
      growthRateChange: simulatePercentageVariation(topMetrics.growthRateChange, 0.2),
    });

    // Actualizar plataformas
    setPlatforms(
      socialPlatforms.map(platform => ({
        ...platform,
        followers: simulateDataVariation(platform.followers, 3),
        change24h: simulatePercentageVariation(platform.change24h, 1),
        engagementRate: simulatePercentageVariation(platform.engagementRate, 0.3),
        trend: platform.trend.map(val => simulateDataVariation(val, 2)),
      }))
    );

    setLastUpdate(new Date());
    
    setTimeout(() => {
      setIsUpdating(false);
    }, 500);
  };

  // Actualización automática cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      updateData();
    }, 30000); // 30 segundos

    return () => clearInterval(interval);
  }, []);

  // Actualizar datos cuando cambia el período
  useEffect(() => {
    updateData();
  }, [timePeriod]);

  const refreshData = () => {
    updateData();
  };

  return (
    <DashboardContext.Provider
      value={{
        metrics,
        platforms,
        timePeriod,
        lastUpdate,
        isUpdating,
        setTimePeriod,
        refreshData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
