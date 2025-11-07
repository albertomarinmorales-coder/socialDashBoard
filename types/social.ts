// Types para métricas de redes sociales

export interface SocialMetrics {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin';
  followers: number;
  posts: number;
  likes: number;
  comments: number;
  shares: number;
  saves?: number;
  impressions: number;
  reach: number;
  engagementRate: number;
  followerGrowth: number[];
}

export interface EngagementData {
  platform: string;
  likes: number;
  comments: number;
  shares: number;
  saves?: number;
}

export interface FollowerGrowthData {
  date: string;
  facebook: number;
  instagram: number;
  twitter: number;
  linkedin: number;
}

export interface AudienceDistribution {
  platform: string;
  percentage: number;
  followers: number;
  color: string;
}

export interface WeeklyReach {
  day: string;
  reach: number;
  previousWeek: number;
}
