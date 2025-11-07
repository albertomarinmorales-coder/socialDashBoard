// Utilidades para formatear datos del dashboard

/**
 * Formatea números grandes a formato legible (K, M, B)
 * Ejemplo: 1500 -> "1.5K", 2400000 -> "2.4M"
 */
export const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};

/**
 * Formatea números con separadores de miles
 * Ejemplo: 1500 -> "1,500"
 */
export const formatNumberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Formatea porcentajes con signo y color
 * Ejemplo: 12.5 -> "+12.5%"
 */
export const formatPercentage = (num: number, decimals: number = 1): string => {
  const formatted = num.toFixed(decimals);
  return num > 0 ? `+${formatted}%` : `${formatted}%`;
};

/**
 * Obtiene la clase de color según si el cambio es positivo o negativo
 */
export const getChangeColor = (change: number): string => {
  return change >= 0 ? 'text-green-600' : 'text-red-600';
};

/**
 * Obtiene la clase de color de fondo según el cambio
 */
export const getChangeBgColor = (change: number): string => {
  return change >= 0 ? 'bg-green-50' : 'bg-red-50';
};

/**
 * Formatea fechas a formato corto
 * Ejemplo: "2024-01-15" -> "15 Ene"
 */
export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
};

/**
 * Formatea fechas a formato completo
 * Ejemplo: "2024-01-15" -> "15 de enero de 2024"
 */
export const formatDateLong = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

/**
 * Calcula el porcentaje de cambio entre dos valores
 */
export const calculatePercentageChange = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

/**
 * Trunca texto largo y añade "..."
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Formatea tiempo transcurrido
 * Ejemplo: "Hace 5 minutos", "Hace 2 horas"
 */
export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'Hace unos segundos';
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `Hace ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
};

/**
 * Obtiene un color aleatorio para gráficos
 */
export const getRandomColor = (): string => {
  const colors = [
    '#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', 
    '#10B981', '#3B82F6', '#EF4444', '#14B8A6'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Convierte hex a rgba
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
