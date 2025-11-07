'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { formatNumber, formatPercentage, getChangeColor } from '@/utils/dataFormatters';

interface StatCardProps {
  title: string;
  value: number;
  change: number;
  icon: LucideIcon;
  format?: 'number' | 'percentage' | 'currency';
  delay?: number;
}

export default function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  format = 'number',
  delay = 0 
}: StatCardProps) {
  const isPositive = change >= 0;
  
  const formatValue = () => {
    switch (format) {
      case 'percentage':
        return `${value}%`;
      case 'currency':
        return `$${formatNumber(value)}`;
      default:
        return formatNumber(value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
            <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </h3>
        </div>
      </div>
      
      <div className="space-y-2">
        <motion.p 
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
        >
          {formatValue()}
        </motion.p>
        
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${getChangeColor(change)}`}>
            {isPositive ? '↑' : '↓'} {formatPercentage(Math.abs(change))}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            vs período anterior
          </span>
        </div>
      </div>
    </motion.div>
  );
}
