'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Header from '@/components/Header/Header';
import { TrendingUp, Users, MessageSquare, Share2, Heart, Eye, Facebook, Instagram, Twitter, Linkedin, Calendar, Download, Smartphone, Monitor, Tablet, MapPin, Globe } from 'lucide-react';
import StackedBarChart from '@/components/Charts/StackedBarChart';
import MultiLineChart from '@/components/Charts/MultiLineChart';
import AreaChartAnalytics from '@/components/Charts/AreaChartAnalytics';

type TimeRange = '7d' | '30d' | '90d' | 'all';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  const timeRanges = [
    { value: '7d' as TimeRange, label: '7 días' },
    { value: '30d' as TimeRange, label: '30 días' },
    { value: '90d' as TimeRange, label: '90 días' },
    { value: 'all' as TimeRange, label: 'Todo' },
  ];

  return (
    <DashboardLayout>
      {/* Header con filtros */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Analíticas Detalladas
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Análisis profundo de métricas y rendimiento
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Selector de período */}
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

            {/* Botón de exportar */}
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm transition-colors">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Exportar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Métricas de Engagement */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Engagement por Tipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Likes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover-lift"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                +12.5%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              12,458
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Likes
            </p>
          </motion.div>

          {/* Comentarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover-lift"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                +8.3%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              3,247
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comentarios
            </p>
          </motion.div>

          {/* Compartidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover-lift"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <Share2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                +15.7%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              1,823
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Compartidos
            </p>
          </motion.div>

          {/* Impresiones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover-lift"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                +22.1%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              2.4M
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Impresiones
            </p>
          </motion.div>

          {/* Alcance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover-lift"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                +18.9%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              1.8M
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Alcance Único
            </p>
          </motion.div>

          {/* Crecimiento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover-lift"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                +25.4%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              +2,145
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nuevos Seguidores
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gráficos de Análisis Detallado */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Visualizaciones Detalladas
        </h2>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <StackedBarChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MultiLineChart />
          <AreaChartAnalytics />
        </div>
      </div>

      {/* Tabla de Rendimiento por Plataforma */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Rendimiento por Plataforma
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Plataforma
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Seguidores
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Engagement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Alcance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Crecimiento
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                        <Facebook className="w-4 h-4" />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                        Facebook
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    18,500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    4.2%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    890K
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      +5.2%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                        Instagram
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    15,300
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    6.8%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    1.2M
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      +18.7%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                        <Twitter className="w-4 h-4 text-white dark:text-black" />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                        Twitter/X
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    8,900
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    3.5%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    450K
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      +3.1%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                        LinkedIn
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    5,123
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    5.1%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    320K
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      +22.4%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Horarios Óptimos y CTR */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Mejores Horarios para Publicar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Mejores Horarios para Publicar
          </h3>
          <div className="space-y-3">
            {[
              { day: 'Lunes - Viernes', time: '09:00 - 11:00', engagement: '8.2%', color: 'bg-green-500' },
              { day: 'Martes - Jueves', time: '14:00 - 16:00', engagement: '7.8%', color: 'bg-blue-500' },
              { day: 'Miércoles', time: '19:00 - 21:00', engagement: '9.1%', color: 'bg-indigo-500' },
              { day: 'Sábado - Domingo', time: '10:00 - 12:00', engagement: '6.5%', color: 'bg-purple-500' },
            ].map((slot, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${slot.color}`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{slot.day}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{slot.time}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  {slot.engagement}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas de Conversión */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Métricas de Conversión
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Click-Through Rate (CTR)', value: '3.8%', change: '+0.5%', isPositive: true },
              { label: 'Tasa de Conversión', value: '2.1%', change: '+0.3%', isPositive: true },
              { label: 'Bounce Rate', value: '42.3%', change: '-2.1%', isPositive: true },
              { label: 'Tiempo Promedio', value: '2m 34s', change: '+12s', isPositive: true },
            ].map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{metric.value}</p>
                </div>
                <span className={`text-sm font-medium ${metric.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mejores Publicaciones */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Top Publicaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((post, index) => (
            <motion.div
              key={post}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Publicación #{post}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Hace 2 días
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Contenido de ejemplo que ha tenido un gran rendimiento en las redes sociales...
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">
                    <Heart className="w-4 h-4 inline mr-1" />
                    {1250 + index * 100}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    {89 + index * 10}
                  </span>
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {6.5 + index * 0.5}% engagement
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Análisis de Audiencia */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Demografía */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Demografía
          </h3>
          <div className="space-y-3">
            {[
              { age: '18-24', percentage: 28, color: 'bg-indigo-500' },
              { age: '25-34', percentage: 42, color: 'bg-blue-500' },
              { age: '35-44', percentage: 18, color: 'bg-purple-500' },
              { age: '45+', percentage: 12, color: 'bg-pink-500' },
            ].map((demo, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{demo.age} años</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{demo.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`${demo.color} h-2 rounded-full transition-all`}
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ubicaciones Principales */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-600" />
            Top Ubicaciones
          </h3>
          <div className="space-y-3">
            {[
              { country: 'España', users: '12,458', percentage: 35 },
              { country: 'México', users: '8,920', percentage: 25 },
              { country: 'Argentina', users: '5,340', percentage: 15 },
              { country: 'Estados Unidos', users: '4,280', percentage: 12 },
              { country: 'Colombia', users: '3,125', percentage: 9 },
            ].map((location, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {location.country}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{location.users}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{location.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dispositivos */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Dispositivos
          </h3>
          <div className="space-y-4">
            {[
              { device: 'Móvil', icon: Smartphone, percentage: 68, users: '32,450', color: 'text-indigo-600' },
              { device: 'Desktop', icon: Monitor, percentage: 24, users: '11,480', color: 'text-blue-600' },
              { device: 'Tablet', icon: Tablet, percentage: 8, users: '3,820', color: 'text-purple-600' },
            ].map((device, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <device.icon className={`w-5 h-5 ${device.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {device.device}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{device.percentage}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full transition-all"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{device.users}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
