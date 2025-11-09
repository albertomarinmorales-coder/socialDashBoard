'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { 
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  Edit,
  Trash2,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Image as ImageIcon,
  Video,
  FileText,
  BarChart3,
  Filter,
  Download,
  Eye
} from 'lucide-react';

type ViewType = 'month' | 'week' | 'list';
type PostStatus = 'scheduled' | 'published' | 'draft' | 'failed';
type Platform = 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'all';

interface Post {
  id: number;
  title: string;
  content: string;
  date: Date;
  time: string;
  platform: Platform;
  status: PostStatus;
  type: 'image' | 'video' | 'text';
  engagement?: number;
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewType, setViewType] = useState<ViewType>('month');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Publicaciones de ejemplo
  const posts: Post[] = [
    {
      id: 1,
      title: 'Nuevo lanzamiento de producto',
      content: 'Estamos emocionados de presentar...',
      date: new Date(2025, 10, 12),
      time: '09:00',
      platform: 'facebook',
      status: 'scheduled',
      type: 'image',
    },
    {
      id: 2,
      title: 'Tutorial de marketing',
      content: '5 estrategias efectivas para...',
      date: new Date(2025, 10, 12),
      time: '14:30',
      platform: 'instagram',
      status: 'scheduled',
      type: 'video',
    },
    {
      id: 3,
      title: 'Estadísticas mensuales',
      content: 'Resumen del mes de octubre...',
      date: new Date(2025, 10, 10),
      time: '10:00',
      platform: 'linkedin',
      status: 'published',
      type: 'image',
      engagement: 1250,
    },
    {
      id: 4,
      title: 'Consejos rápidos',
      content: 'Tips para mejorar tu contenido...',
      date: new Date(2025, 10, 15),
      time: '16:00',
      platform: 'twitter',
      status: 'scheduled',
      type: 'text',
    },
    {
      id: 5,
      title: 'Story del día',
      content: 'Behind the scenes...',
      date: new Date(2025, 10, 14),
      time: '11:30',
      platform: 'instagram',
      status: 'scheduled',
      type: 'image',
    },
    {
      id: 6,
      title: 'Webinar gratuito',
      content: 'Únete a nuestro próximo webinar...',
      date: new Date(2025, 10, 18),
      time: '18:00',
      platform: 'linkedin',
      status: 'scheduled',
      type: 'video',
    },
    {
      id: 7,
      title: 'Promoción especial',
      content: '¡Descuento del 30% este fin de semana!',
      date: new Date(2025, 10, 16),
      time: '12:00',
      platform: 'facebook',
      status: 'scheduled',
      type: 'image',
    },
    {
      id: 8,
      title: 'Contenido fallido',
      content: 'Este post no se publicó correctamente',
      date: new Date(2025, 10, 9),
      time: '15:00',
      platform: 'twitter',
      status: 'failed',
      type: 'text',
    },
  ];

  const platforms = [
    { value: 'all' as Platform, label: 'Todas', icon: BarChart3, color: 'bg-gray-500' },
    { value: 'facebook' as Platform, label: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
    { value: 'instagram' as Platform, label: 'Instagram', icon: Instagram, color: 'bg-pink-600' },
    { value: 'twitter' as Platform, label: 'Twitter', icon: Twitter, color: 'bg-black dark:bg-white' },
    { value: 'linkedin' as Platform, label: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700' },
  ];

  const statusConfig = {
    scheduled: { label: 'Programado', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400', icon: Clock },
    published: { label: 'Publicado', color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400', icon: CheckCircle2 },
    draft: { label: 'Borrador', color: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400', icon: FileText },
    failed: { label: 'Fallido', color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400', icon: AlertCircle },
  };

  // Funciones de calendario
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getPostsForDate = (date: Date) => {
    return posts.filter(post => {
      const postDate = new Date(post.date);
      return (
        postDate.getDate() === date.getDate() &&
        postDate.getMonth() === date.getMonth() &&
        postDate.getFullYear() === date.getFullYear() &&
        (selectedPlatform === 'all' || post.platform === selectedPlatform)
      );
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const today = new Date();

    // Días vacíos antes del primer día
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="min-h-28 bg-gray-50 dark:bg-gray-800/50"></div>
      );
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayPosts = getPostsForDate(date);
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedDate(date)}
          className={`
            min-h-28 p-2 border border-gray-200 dark:border-gray-700 cursor-pointer
            transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50
            ${isToday ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700' : 'bg-white dark:bg-gray-800'}
            ${isSelected ? 'ring-2 ring-indigo-500' : ''}
          `}
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`
              text-sm font-semibold
              ${isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}
            `}>
              {day}
            </span>
            {dayPosts.length > 0 && (
              <span className="text-xs bg-indigo-600 text-white px-1.5 py-0.5 rounded-full">
                {dayPosts.length}
              </span>
            )}
          </div>

          <div className="space-y-1">
            {dayPosts.slice(0, 3).map(post => {
              const StatusIcon = statusConfig[post.status].icon;
              return (
                <div
                  key={post.id}
                  className="text-xs p-1.5 bg-gray-50 dark:bg-gray-700/50 rounded truncate hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title={post.title}
                >
                  <div className="flex items-center gap-1">
                    <StatusIcon className="w-3 h-3 shrink-0" />
                    <span className="truncate">{post.time}</span>
                  </div>
                </div>
              );
            })}
            {dayPosts.length > 3 && (
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                +{dayPosts.length - 3} más
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    return days;
  };

  const filteredPosts = posts
    .filter(post => selectedPlatform === 'all' || post.platform === selectedPlatform)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const upcomingPosts = filteredPosts.filter(p => p.status === 'scheduled');
  const publishedPosts = filteredPosts.filter(p => p.status === 'published');
  const failedPosts = filteredPosts.filter(p => p.status === 'failed');

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <CalendarIcon className="w-8 h-8 text-indigo-600" />
              Calendario de Contenido
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Planifica y gestiona tus publicaciones en todas las plataformas
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filtrar</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Exportar</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Nueva Publicación</span>
            </button>
          </div>
        </div>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {upcomingPosts.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Programadas</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {publishedPosts.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Publicadas</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <FileText className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Borradores</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {failedPosts.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fallidas</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filtros de Plataforma */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          {platforms.map(platform => {
            const Icon = platform.icon;
            return (
              <button
                key={platform.value}
                onClick={() => setSelectedPlatform(platform.value)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                  ${selectedPlatform === platform.value
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {platform.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Vista de Calendario */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
        {/* Header del Calendario */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
            {getMonthName(currentDate)}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
            >
              Hoy
            </button>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Días de la semana */}
        <div className="grid grid-cols-7 gap-px mb-px">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
            <div
              key={day}
              className="bg-gray-100 dark:bg-gray-700 p-2 text-center text-sm font-semibold text-gray-600 dark:text-gray-400"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendario */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700">
          {renderCalendar()}
        </div>
      </div>

      {/* Lista de Publicaciones Próximas */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Clock className="w-6 h-6 text-blue-600" />
          Próximas Publicaciones
        </h2>

        <div className="space-y-4">
          {upcomingPosts.slice(0, 5).map((post, index) => {
            const StatusIcon = statusConfig[post.status].icon;
            const PlatformIcon = platforms.find(p => p.value === post.platform)?.icon || FileText;
            const TypeIcon = post.type === 'image' ? ImageIcon : post.type === 'video' ? Video : FileText;

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer group"
              >
                {/* Icono de tipo */}
                <div className="shrink-0 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <TypeIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
                      {post.title}
                    </h3>
                    <span className={`shrink-0 px-2 py-1 rounded-full text-xs font-medium ${statusConfig[post.status].color}`}>
                      {statusConfig[post.status].label}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <PlatformIcon className="w-4 h-4" />
                      <span>{platforms.find(p => p.value === post.platform)?.label}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{post.date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>

                {/* Acciones */}
                <div className="shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {upcomingPosts.length === 0 && (
          <div className="text-center py-12">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No hay publicaciones programadas
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
              Programar Publicación
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
