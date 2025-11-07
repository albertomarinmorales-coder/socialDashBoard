// Datos mock para el dashboard de redes sociales
import { SocialPlatform, TopMetrics } from '@/types/metrics';
import { FollowerGrowthData, EngagementData, AudienceDistribution, WeeklyReach } from '@/types/social';

// Colores corporativos de cada red social
export const platformColors = {
  facebook: '#1877F2',
  instagram: '#E4405F',
  twitter: '#000000',
  linkedin: '#0A66C2',
};

// Métricas principales del dashboard
export const topMetrics: TopMetrics = {
  totalFollowers: 47823,
  totalFollowersChange: 12.5,
  engagementRate: 4.8,
  engagementRateChange: 0.3,
  totalReach: 2400000,
  totalReachChange: 8.7,
  growthRate: 15.2,
  growthRateChange: 2.1,
};

// Datos de cada plataforma social
export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    followers: 18500,
    change24h: 5.2,
    engagementRate: 3.8,
    color: platformColors.facebook,
    icon: 'facebook',
    trend: [17800, 17950, 18100, 18200, 18300, 18400, 18500],
  },
  {
    id: 'instagram',
    name: 'Instagram',
    followers: 15300,
    change24h: 18.7,
    engagementRate: 6.2,
    color: platformColors.instagram,
    icon: 'instagram',
    trend: [12900, 13400, 13900, 14400, 14700, 15000, 15300],
  },
  {
    id: 'twitter',
    name: 'Twitter',
    followers: 8900,
    change24h: 3.1,
    engagementRate: 4.1,
    color: platformColors.twitter,
    icon: 'twitter',
    trend: [8600, 8650, 8700, 8750, 8800, 8850, 8900],
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    followers: 5123,
    change24h: 22.4,
    engagementRate: 5.9,
    color: platformColors.linkedin,
    icon: 'linkedin',
    trend: [4200, 4400, 4600, 4800, 4950, 5050, 5123],
  },
];

// Generar datos de crecimiento de seguidores (últimos 30 días)
export const generateFollowerGrowthData = (days: number = 30): FollowerGrowthData[] => {
  const data: FollowerGrowthData[] = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toLocaleDateString('es-ES', { month: 'short', day: 'numeric' }),
      facebook: 18500 - (i * 25) + Math.random() * 50,
      instagram: 15300 - (i * 80) + Math.random() * 100,
      twitter: 8900 - (i * 10) + Math.random() * 20,
      linkedin: 5123 - (i * 30) + Math.random() * 40,
    });
  }
  
  return data;
};

// Datos de engagement por plataforma
export const engagementData: EngagementData[] = [
  {
    platform: 'Facebook',
    likes: 4500,
    comments: 1200,
    shares: 650,
  },
  {
    platform: 'Instagram',
    likes: 5800,
    comments: 1850,
    shares: 420,
    saves: 980,
  },
  {
    platform: 'Twitter',
    likes: 2100,
    comments: 580,
    shares: 720,
  },
  {
    platform: 'LinkedIn',
    likes: 1850,
    comments: 420,
    shares: 310,
  },
];

// Distribución de audiencia por plataforma
export const audienceDistribution: AudienceDistribution[] = [
  {
    platform: 'Facebook',
    percentage: 38.7,
    followers: 18500,
    color: platformColors.facebook,
  },
  {
    platform: 'Instagram',
    percentage: 32.0,
    followers: 15300,
    color: platformColors.instagram,
  },
  {
    platform: 'Twitter',
    percentage: 18.6,
    followers: 8900,
    color: platformColors.twitter,
  },
  {
    platform: 'LinkedIn',
    percentage: 10.7,
    followers: 5123,
    color: platformColors.linkedin,
  },
];

// Alcance semanal
export const weeklyReachData: WeeklyReach[] = [
  { day: 'Lun', reach: 285000, previousWeek: 265000 },
  { day: 'Mar', reach: 320000, previousWeek: 290000 },
  { day: 'Mié', reach: 380000, previousWeek: 350000 },
  { day: 'Jue', reach: 420000, previousWeek: 390000 },
  { day: 'Vie', reach: 460000, previousWeek: 410000 },
  { day: 'Sáb', reach: 340000, previousWeek: 310000 },
  { day: 'Dom', reach: 295000, previousWeek: 270000 },
];

// Función para generar variación aleatoria en los datos (para tiempo real)
export const generateRandomVariation = (baseValue: number, maxVariation: number = 0.05): number => {
  const variation = (Math.random() - 0.5) * 2 * maxVariation;
  return Math.round(baseValue * (1 + variation));
};

// Función para actualizar métricas en tiempo real
export const updateMetricsRealTime = (currentMetrics: TopMetrics): TopMetrics => {
  return {
    totalFollowers: generateRandomVariation(currentMetrics.totalFollowers, 0.02),
    totalFollowersChange: generateRandomVariation(currentMetrics.totalFollowersChange, 0.1),
    engagementRate: parseFloat((generateRandomVariation(currentMetrics.engagementRate * 100, 0.05) / 100).toFixed(2)),
    engagementRateChange: parseFloat((generateRandomVariation(currentMetrics.engagementRateChange * 100, 0.1) / 100).toFixed(2)),
    totalReach: generateRandomVariation(currentMetrics.totalReach, 0.03),
    totalReachChange: parseFloat(generateRandomVariation(currentMetrics.totalReachChange * 100, 0.1).toFixed(2)) / 100,
    growthRate: parseFloat(generateRandomVariation(currentMetrics.growthRate * 100, 0.05).toFixed(2)) / 100,
    growthRateChange: parseFloat(generateRandomVariation(currentMetrics.growthRateChange * 100, 0.1).toFixed(2)) / 100,
  };
};
