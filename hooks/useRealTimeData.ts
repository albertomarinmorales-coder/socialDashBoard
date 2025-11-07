'use client';

import { useState, useEffect, useCallback } from 'react';
import { TopMetrics, SocialPlatform } from '@/types/metrics';
import { updateMetricsRealTime, generateRandomVariation } from '@/data/socialData';

interface UseRealTimeDataReturn {
  metrics: TopMetrics;
  platforms: SocialPlatform[];
  lastUpdate: Date;
  isUpdating: boolean;
  forceUpdate: () => void;
}

export function useRealTimeData(
  initialMetrics: TopMetrics,
  initialPlatforms: SocialPlatform[],
  updateInterval: number = 30000 // 30 segundos por defecto
): UseRealTimeDataReturn {
  const [metrics, setMetrics] = useState<TopMetrics>(initialMetrics);
  const [platforms, setPlatforms] = useState<SocialPlatform[]>(initialPlatforms);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isUpdating, setIsUpdating] = useState(false);

  const updateData = useCallback(() => {
    setIsUpdating(true);

    // Simular un pequeño delay para la animación
    setTimeout(() => {
      // Actualizar métricas principales
      const updatedMetrics = updateMetricsRealTime(metrics);
      setMetrics(updatedMetrics);

      // Actualizar plataformas sociales
      const updatedPlatforms = platforms.map(platform => ({
        ...platform,
        followers: generateRandomVariation(platform.followers, 0.02),
        change24h: parseFloat((generateRandomVariation(platform.change24h * 100, 0.1) / 100).toFixed(2)),
        engagementRate: parseFloat((generateRandomVariation(platform.engagementRate * 100, 0.05) / 100).toFixed(2)),
        trend: [
          ...platform.trend.slice(1),
          generateRandomVariation(platform.trend[platform.trend.length - 1], 0.03)
        ]
      }));
      setPlatforms(updatedPlatforms);

      setLastUpdate(new Date());
      setIsUpdating(false);
    }, 300);
  }, [metrics, platforms]);

  // Actualización automática cada X segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateData();
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateData, updateInterval]);

  // Función para forzar actualización manual
  const forceUpdate = useCallback(() => {
    updateData();
  }, [updateData]);

  return {
    metrics,
    platforms,
    lastUpdate,
    isUpdating,
    forceUpdate,
  };
}
