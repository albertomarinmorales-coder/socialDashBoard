'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { SocialPlatform } from '@/types/metrics';
import { formatNumber, formatPercentage, getChangeColor } from '@/utils/dataFormatters';

interface MetricCardProps {
  platform: SocialPlatform;
  index?: number;
}

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function MetricCard({ platform, index = 0 }: MetricCardProps) {
  const Icon = platformIcons[platform.id as keyof typeof platformIcons] || Facebook;
  const isPositive = platform.change24h >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 hover-lift smooth-transition"
    >
      {/* Header con icono y nombre */}
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="p-2.5 rounded-lg"
          style={{ backgroundColor: `${platform.color}15` }}
        >
          <Icon 
            className="w-6 h-6" 
            style={{ color: platform.color }}
          />
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {platform.name}
        </h3>
      </div>

      {/* Seguidores */}
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
          {formatNumber(platform.followers)}
        </p>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${getChangeColor(platform.change24h)}`}>
            {isPositive ? '↑' : '↓'} {formatPercentage(Math.abs(platform.change24h))}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            últimas 24h
          </span>
        </div>
      </div>

      {/* Engagement rate */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Engagement
        </span>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {platform.engagementRate}%
        </span>
      </div>

      {/* Mini gráfico de tendencia */}
      <div className="mt-4 h-12 flex items-end gap-1">
        {platform.trend.map((value, idx) => {
          const maxValue = Math.max(...platform.trend);
          const height = (value / maxValue) * 100;
          return (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.05 }}
              className="flex-1 rounded-t"
              style={{ 
                backgroundColor: platform.color,
                opacity: 0.3 + (idx * 0.1)
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
