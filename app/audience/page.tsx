'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { 
  Users, 
  MapPin, 
  Smartphone, 
  Monitor, 
  Tablet,
  Globe,
  Clock,
  TrendingUp,
  Calendar,
  Heart,
  Eye,
  UserCheck,
  UserPlus,
  Activity,
  PieChart,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';

type TimeRange = '7d' | '30d' | '90d' | 'all';
type Gender = 'male' | 'female' | 'other';

interface AgeGroup {
  range: string;
  percentage: number;
  count: number;
  gender: { male: number; female: number; other: number };
}

interface Location {
  country: string;
  city: string;
  users: number;
  percentage: number;
  growth: number;
}

interface Interest {
  name: string;
  percentage: number;
  color: string;
}

export default function AudiencePage() {
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  const timeRanges = [
    { value: '7d' as TimeRange, label: '7 días' },
    { value: '30d' as TimeRange, label: '30 días' },
    { value: '90d' as TimeRange, label: '90 días' },
    { value: 'all' as TimeRange, label: 'Todo' },
  ];

  const ageGroups: AgeGroup[] = [
    { 
      range: '18-24', 
      percentage: 28, 
      count: 13440,
      gender: { male: 45, female: 52, other: 3 }
    },
    { 
      range: '25-34', 
      percentage: 42, 
      count: 20160,
      gender: { male: 48, female: 49, other: 3 }
    },
    { 
      range: '35-44', 
      percentage: 18, 
      count: 8640,
      gender: { male: 51, female: 46, other: 3 }
    },
    { 
      range: '45-54', 
      percentage: 8, 
      count: 3840,
      gender: { male: 54, female: 43, other: 3 }
    },
    { 
      range: '55+', 
      percentage: 4, 
      count: 1920,
      gender: { male: 52, female: 45, other: 3 }
    },
  ];

  const topLocations: Location[] = [
    { country: 'España', city: 'Madrid', users: 12458, percentage: 26, growth: 15 },
    { country: 'España', city: 'Barcelona', users: 8920, percentage: 19, growth: 22 },
    { country: 'México', city: 'Ciudad de México', users: 7340, percentage: 15, growth: 18 },
    { country: 'Argentina', city: 'Buenos Aires', users: 5680, percentage: 12, growth: 12 },
    { country: 'Colombia', city: 'Bogotá', users: 4280, percentage: 9, growth: 25 },
    { country: 'Estados Unidos', city: 'Miami', users: 3890, percentage: 8, growth: 10 },
    { country: 'Chile', city: 'Santiago', users: 2650, percentage: 6, growth: 8 },
    { country: 'Perú', city: 'Lima', users: 2380, percentage: 5, growth: 20 },
  ];

  const interests: Interest[] = [
    { name: 'Marketing Digital', percentage: 34, color: 'bg-indigo-500' },
    { name: 'Tecnología', percentage: 28, color: 'bg-blue-500' },
    { name: 'Emprendimiento', percentage: 22, color: 'bg-purple-500' },
    { name: 'Diseño', percentage: 18, color: 'bg-pink-500' },
    { name: 'Social Media', percentage: 16, color: 'bg-cyan-500' },
    { name: 'E-commerce', percentage: 14, color: 'bg-green-500' },
    { name: 'Fotografía', percentage: 12, color: 'bg-orange-500' },
    { name: 'Viajes', percentage: 10, color: 'bg-red-500' },
  ];

  const devices = [
    { name: 'Móvil', icon: Smartphone, percentage: 68, users: 32640, color: 'text-indigo-600', bgColor: 'bg-indigo-100 dark:bg-indigo-900/20' },
    { name: 'Desktop', icon: Monitor, percentage: 24, users: 11520, color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/20' },
    { name: 'Tablet', icon: Tablet, percentage: 8, users: 3840, color: 'text-purple-600', bgColor: 'bg-purple-100 dark:bg-purple-900/20' },
  ];

  const activityHours = [
    { hour: '00-03', activity: 12, label: '12%' },
    { hour: '03-06', activity: 8, label: '8%' },
    { hour: '06-09', activity: 45, label: '45%' },
    { hour: '09-12', activity: 78, label: '78%' },
    { hour: '12-15', activity: 85, label: '85%' },
    { hour: '15-18', activity: 92, label: '92%' },
    { hour: '18-21', activity: 95, label: '95%' },
    { hour: '21-00', activity: 65, label: '65%' },
  ];

  const languageStats = [
    { language: 'Español', percentage: 78, users: 37440 },
    { language: 'Inglés', percentage: 15, users: 7200 },
    { language: 'Portugués', percentage: 5, users: 2400 },
    { language: 'Otros', percentage: 2, users: 960 },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <Users className="w-8 h-8 text-indigo-600" />
              Audiencia
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Conoce a fondo quiénes son tus seguidores y cómo interactúan
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

      {/* Estadísticas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8" />
            <UserCheck className="w-6 h-6 opacity-80" />
          </div>
          <h3 className="text-3xl font-bold mb-1">48,000</h3>
          <p className="text-indigo-100">Total Seguidores</p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+12.5% este mes</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-linear-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <UserPlus className="w-8 h-8" />
            <TrendingUp className="w-6 h-6 opacity-80" />
          </div>
          <h3 className="text-3xl font-bold mb-1">+2,145</h3>
          <p className="text-green-100">Nuevos (30 días)</p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Activity className="w-4 h-4" />
            <span>71 por día promedio</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-linear-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <Heart className="w-8 h-8" />
            <Target className="w-6 h-6 opacity-80" />
          </div>
          <h3 className="text-3xl font-bold mb-1">6.8%</h3>
          <p className="text-blue-100">Engagement Rate</p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4" />
            <span>Por encima del promedio</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white shadow-lg hover-lift"
        >
          <div className="flex items-center justify-between mb-4">
            <Eye className="w-8 h-8" />
            <Activity className="w-6 h-6 opacity-80" />
          </div>
          <h3 className="text-3xl font-bold mb-1">89%</h3>
          <p className="text-orange-100">Tasa de Retención</p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <UserCheck className="w-4 h-4" />
            <span>Audiencia muy leal</span>
          </div>
        </motion.div>
      </div>

      {/* Demografía y Género */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Distribución por Edad */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <PieChart className="w-6 h-6 text-indigo-600" />
              Distribución por Edad
            </h2>
          </div>

          <div className="space-y-6">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.range}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white w-16">
                      {group.range}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {group.count.toLocaleString()} usuarios
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {group.percentage}%
                  </span>
                </div>

                {/* Barra principal */}
                <div className="relative h-8 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-2">
                  <div
                    className="absolute top-0 left-0 h-full bg-linear-to-r from-indigo-500 to-purple-600 transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${group.percentage}%` }}
                  >
                    {group.percentage > 15 && (
                      <span className="text-xs font-semibold text-white">
                        {group.percentage}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Distribución por género */}
                <div className="flex items-center gap-2 ml-20">
                  <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Hombres {group.gender.male}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Mujeres {group.gender.female}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Otros {group.gender.other}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resumen de género total */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Distribución General de Género
            </h3>
            <div className="flex gap-4">
              <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Hombres
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">48%</p>
              </div>
              <div className="flex-1 bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mujeres
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">49%</p>
              </div>
              <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Otros
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dispositivos */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-blue-600" />
            Dispositivos
          </h2>

          <div className="space-y-6">
            {devices.map((device, index) => {
              const Icon = device.icon;
              return (
                <motion.div
                  key={device.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${device.bgColor} rounded-lg`}>
                        <Icon className={`w-5 h-5 ${device.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {device.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {device.users.toLocaleString()} usuarios
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {device.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Idiomas */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-600" />
              Idiomas
            </h3>
            <div className="space-y-3">
              {languageStats.map((lang, index) => (
                <div key={lang.language}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {lang.language}
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                    <div
                      className="bg-green-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ubicaciones */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-red-600" />
          Principales Ubicaciones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topLocations.map((location, index) => (
            <motion.div
              key={`${location.country}-${location.city}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {location.city}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {location.country}
                    </p>
                  </div>
                </div>
                <span className={`
                  px-2 py-1 rounded text-xs font-semibold
                  ${location.growth >= 20 
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                    : location.growth >= 10
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }
                `}>
                  +{location.growth}%
                </span>
              </div>

              <div className="mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {location.users.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    usuarios
                  </span>
                </div>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all"
                  style={{ width: `${location.percentage * 3}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {location.percentage}% del total
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Intereses y Actividad */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Intereses */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Principales Intereses
          </h2>

          <div className="space-y-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {interest.name}
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {interest.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${interest.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${interest.percentage * 2}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Actividad por Hora */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-orange-600" />
            Actividad por Horario
          </h2>

          <div className="space-y-4">
            {activityHours.map((hour, index) => (
              <motion.div
                key={hour.hour}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-16">
                  {hour.hour}h
                </span>
                <div className="flex-1">
                  <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-8 overflow-hidden">
                    <div
                      className={`
                        h-8 rounded-full transition-all duration-500
                        ${hour.activity >= 80 
                          ? 'bg-linear-to-r from-green-500 to-emerald-600' 
                          : hour.activity >= 50
                          ? 'bg-linear-to-r from-blue-500 to-cyan-600'
                          : hour.activity >= 30
                          ? 'bg-linear-to-r from-yellow-500 to-orange-500'
                          : 'bg-linear-to-r from-gray-400 to-gray-500'
                        }
                        flex items-center justify-end pr-3
                      `}
                      style={{ width: `${hour.activity}%` }}
                    >
                      {hour.activity > 20 && (
                        <span className="text-xs font-semibold text-white">
                          {hour.label}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-sm font-bold text-gray-900 dark:text-white w-12 text-right">
                  {hour.activity}%
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-orange-900 dark:text-orange-100 mb-1">
                  Horario Pico
                </h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Tu audiencia está más activa entre las 18:00 y 21:00. 
                  Programa tu contenido en este horario para máximo alcance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
