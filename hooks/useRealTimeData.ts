'use client';

import { useState, useEffect } from 'react';

/**
 * Hook para efectos visuales de actualización en tiempo real
 * Los datos reales ahora se gestionan en DashboardContext
 */
export function useRealTimeData() {
  const [pulse, setPulse] = useState(false);

  // Efecto de pulso cada 30 segundos para indicar actualización
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    pulse,
  };
}

/**
 * Hook para simular loading de componentes pesados
 */
export function useDataLoading(delay: number = 500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}
