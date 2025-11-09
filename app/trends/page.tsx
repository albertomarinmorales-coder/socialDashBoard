'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { 
  TrendingUp, 
  TrendingDown, 
  Hash, 
  Flame, 
  Clock, 
  Users, 
  Eye, 
  Heart, 
  MessageSquare, 
  Share2,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

type TimeRange = '7d' | '30d' | '90d';
type Category = 'all' | 'hashtags' | 'posts' | 'topics';

interface Trend {
  id: number;
  title: string;
  category: string;
  engagement: number;
  growth: number;
  posts: number;
  reach: string;
  isHot?: boolean;
}

interface Hashtag {
  tag: string;
  count: number;
  growth: number;
  engagement: string;
}

export default function TrendsPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [category, setCategory] = useState<Category>('all');

  const timeRanges = [
    { value: '7d' as TimeRange, label: '7 días' },
    { value: '30d' as TimeRange, label: '30 días' },
    { value: '90d' as TimeRange, label: '90 días' },
  ];

  const categories = [
    { value: 'all' as Category, label: 'Todas', icon: Sparkles },
    { value: 'hashtags' as Category, label: 'Hashtags', icon: Hash },
    { value: 'posts' as Category, label: 'Publicaciones', icon: Flame },
    { value: 'topics' as Category, label: 'Temas', icon: Target },
  ];

  const trendingTopics: Trend[] = [
    {
      id: 1,
      title: '#MarketingDigital',
      category: 'Hashtag',
      engagement: 8542,
      growth: 156,
      posts: 234,
      reach: '1.2M',
      isHot: true,
    },
    {
      id: 2,
      title: 'Inteligencia Artificial',
      category: 'Tema',
      engagement: 7234,
      growth: 89,
      posts: 189,
      reach: '980K',
      isHot: true,
    },
    {
      id: 3,
      title: '#SocialMedia',
      category: 'Hashtag',
      engagement: 6821,
      growth: 45,
      posts: 156,
      reach: '850K',
    },
    {
      id: 4,
      title: 'Sostenibilidad',
      category: 'Tema',
      engagement: 5943,
      growth: 112,
      posts: 142,
      reach: '720K',
      isHot: true,
    },
    {
      id: 5,
      title: '#ContentCreator',
      category: 'Hashtag',
      engagement: 5456,
      growth: 67,
      posts: 128,
      reach: '650K',
    },
    {
      id: 6,
      title: 'Trabajo Remoto',
      category: 'Tema',
      engagement: 4892,
      growth: -12,
      posts: 98,
      reach: '580K',
    },
    {
      id: 7,
      title: '#Emprendimiento',
      category: 'Hashtag',
      engagement: 4567,
      growth: 34,
      posts: 87,
      reach: '520K',
    },
    {
      id: 8,
      title: 'Metaverso',
      category: 'Tema',
      engagement: 4123,
      growth: 201,
      posts: 76,
      reach: '490K',
      isHot: true,
    },
  ];

  const topHashtags: Hashtag[] = [
    { tag: '#MarketingDigital', count: 12458, growth: 156, engagement: '8.5K' },
    { tag: '#SocialMedia', count: 10234, growth: 45, engagement: '6.8K' },
    { tag: '#ContentCreator', count: 8921, growth: 67, engagement: '5.4K' },
    { tag: '#Emprendimiento', count: 7654, growth: 34, engagement: '4.5K' },
    { tag: '#InfluencerMarketing', count: 6543, growth: 89, engagement: '4.2K' },
    { tag: '#DigitalMarketing', count: 5892, growth: 23, engagement: '3.9K' },
    { tag: '#Branding', count: 5234, growth: 56, engagement: '3.5K' },
    { tag: '#SEO', count: 4876, growth: 12, engagement: '3.2K' },
  ];

  const viralContent = [
    {
      id: 1,
      title: 'Cómo aumentar tu engagement en Instagram',
      type: 'Tutorial',
      likes: 15234,
      comments: 892,
      shares: 1245,
      views: '345K',
      platform: 'Instagram',
      color: 'from-pink-500 to-purple-600',
    },
    {
      id: 2,
      title: '5 tendencias de marketing para 2025',
      type: 'Infografía',
      likes: 12458,
      comments: 654,
      shares: 1089,
      views: '289K',
      platform: 'LinkedIn',
      color: 'from-blue-500 to-blue-700',
    },
    {
      id: 3,
      title: 'Estrategias de contenido que funcionan',
      type: 'Video',
      likes: 11234,
      comments: 567,
      shares: 892,
      views: '256K',
      platform: 'Facebook',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  const optimalTimes = [
    { day: 'Lunes', time: '09:00 - 11:00', engagement: 8.5, color: 'bg-green-500' },
    { day: 'Martes', time: '14:00 - 16:00', engagement: 7.8, color: 'bg-blue-500' },
    { day: 'Miércoles', time: '19:00 - 21:00', engagement: 9.2, color: 'bg-indigo-500' },
    { day: 'Jueves', time: '10:00 - 12:00', engagement: 7.5, color: 'bg-purple-500' },
    { day: 'Viernes', time: '15:00 - 17:00', engagement: 6.9, color: 'bg-pink-500' },
    { day: 'Sábado', time: '11:00 - 13:00', engagement: 8.1, color: 'bg-orange-500' },
    { day: 'Domingo', time: '18:00 - 20:00', engagement: 7.3, color: 'bg-red-500' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              Tendencias
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Descubre qué está en tendencia y capitaliza las oportunidades
            </p>
          </div>

          {/* Filtros */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
              <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-2" />
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-all
                    ${timeRange === range.value
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categorías */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                  ${category === cat.value
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-yellow-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <Flame className="w-8 h-8" />
            <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
              HOT
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-1">24</h3>
          <p className="text-yellow-100">Tendencias Activas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-linear-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8" />
            <ArrowUpRight className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold mb-1">+156%</h3>
          <p className="text-green-100">Crecimiento Promedio</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <Hash className="w-8 h-8" />
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold mb-1">1,247</h3>
          <p className="text-blue-100">Hashtags Populares</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <Eye className="w-8 h-8" />
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold mb-1">3.8M</h3>
          <p className="text-purple-100">Alcance Total</p>
        </motion.div>
      </div>

      {/* Tendencias Principales y Hashtags */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Tendencias Principales */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500" />
              Tendencias Principales
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Últimas {timeRange === '7d' ? '7' : timeRange === '30d' ? '30' : '90'} días
            </span>
          </div>

          <div className="space-y-4">
            {trendingTopics.map((trend, index) => (
              <motion.div
                key={trend.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer group"
              >
                {/* Ranking */}
                <div className="shrink-0">
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg
                    ${index === 0 ? 'bg-linear-to-br from-yellow-400 to-orange-500 text-white' :
                      index === 1 ? 'bg-linear-to-br from-gray-300 to-gray-400 text-gray-700' :
                      index === 2 ? 'bg-linear-to-br from-orange-400 to-orange-600 text-white' :
                      'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'}
                  `}>
                    {index + 1}
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
                      {trend.title}
                    </h3>
                    {trend.isHot && (
                      <span className="shrink-0 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                        HOT
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Hash className="w-3 h-3" />
                      {trend.posts} posts
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {trend.reach}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {trend.engagement.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Crecimiento */}
                <div className="shrink-0">
                  <div className={`
                    flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold
                    ${trend.growth > 0 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'}
                  `}>
                    {trend.growth > 0 ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {Math.abs(trend.growth)}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Hashtags */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Hash className="w-6 h-6 text-blue-500" />
            Top Hashtags
          </h2>

          <div className="space-y-3">
            {topHashtags.map((hashtag, index) => (
              <motion.div
                key={hashtag.tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all cursor-pointer"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {hashtag.tag}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <span>{hashtag.count.toLocaleString()} usos</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {hashtag.engagement}
                    </span>
                  </div>
                </div>
                <div className={`
                  flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold
                  ${hashtag.growth > 50 
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                    : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'}
                `}>
                  <TrendingUp className="w-3 h-3" />
                  +{hashtag.growth}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido Viral */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-500" />
          Contenido Viral Reciente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {viralContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover-lift"
            >
              <div className={`h-2 bg-linear-to-r ${content.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs font-semibold rounded-full">
                    {content.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {content.platform}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {content.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{content.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{content.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{content.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    <span>{content.shares}</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mejores Horarios para Publicar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Clock className="w-6 h-6 text-green-500" />
          Mejores Horarios para Publicar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {optimalTimes.map((slot, index) => (
            <motion.div
              key={slot.day}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="text-center">
                <div className={`w-3 h-3 rounded-full ${slot.color} mx-auto mb-3`}></div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {slot.day}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  {slot.time}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                    <div
                      className={`${slot.color} h-2 rounded-full transition-all`}
                      style={{ width: `${(slot.engagement / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {slot.engagement}%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Engagement</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Recomendación del Sistema
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Los miércoles de 19:00 a 21:00 tienen el mejor engagement promedio (9.2%). 
                Considera programar tu contenido más importante en este horario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
