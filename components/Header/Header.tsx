'use client';

import { RefreshCw, Moon, Sun, Calendar } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useDashboard } from '@/context/DashboardContext';

interface HeaderProps {
  onRefresh?: () => void;
  lastUpdate?: Date;
}

type TimePeriod = 'today' | '7days' | '30days' | '90days';

const periodLabels: Record<TimePeriod, string> = {
  today: 'Hoy',
  '7days': '7 días',
  '30days': '30 días',
  '90days': '90 días',
};

export default function Header({ onRefresh, lastUpdate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { timePeriod, setTimePeriod } = useDashboard();
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Social Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Analytics de Redes Sociales en Tiempo Real
          </p>
        </div>
        
        <div className="flex items-center gap-3 flex-wrap">
          {/* Selector de período */}
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-gray-700">
            <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-2" />
            {(Object.keys(periodLabels) as TimePeriod[]).map((period) => (
              <button
                key={period}
                onClick={() => setTimePeriod(period)}
                className={`
                  px-3 py-1.5 rounded-md text-sm font-medium transition-all
                  ${timePeriod === period
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                {periodLabels[period]}
              </button>
            ))}
          </div>

          {lastUpdate && (
            <span className="text-sm text-gray-500 dark:text-gray-400 hidden lg:inline">
              Actualizado: {formatTime(lastUpdate)}
            </span>
          )}
          
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          
          <button
            onClick={onRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Actualizar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
