'use client';

import { RefreshCw, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
  onRefresh?: () => void;
  lastUpdate?: Date;
}

export default function Header({ onRefresh, lastUpdate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  
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
        
        <div className="flex items-center gap-4">
          {lastUpdate && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
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
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Actualizar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
