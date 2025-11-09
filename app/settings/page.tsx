'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { useTheme } from '@/context/ThemeContext';
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Lock,
  Globe,
  Palette,
  Moon,
  Sun,
  Monitor,
  Mail,
  Smartphone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Link,
  Check,
  X,
  Shield,
  Key,
  CreditCard,
  Download,
  Trash2,
  Save,
  AlertCircle,
  Info
} from 'lucide-react';

type Language = 'es' | 'en' | 'pt';
type NotificationFrequency = 'realtime' | 'hourly' | 'daily' | 'weekly';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState<Language>('es');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [notificationFrequency, setNotificationFrequency] = useState<NotificationFrequency>('daily');

  // Estado de conexiones de redes sociales
  const [connections, setConnections] = useState({
    facebook: true,
    instagram: true,
    twitter: false,
    linkedin: true,
  });

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificaciones', icon: Bell },
    { id: 'integrations', label: 'Integraciones', icon: Link },
    { id: 'security', label: 'Seguridad', icon: Shield },
    { id: 'preferences', label: 'Preferencias', icon: Palette },
    { id: 'billing', label: 'Facturación', icon: CreditCard },
  ];

  const socialPlatforms = [
    { 
      id: 'facebook', 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'bg-blue-600',
      description: 'Conecta tu página de Facebook para publicar y analizar contenido',
      connected: connections.facebook,
    },
    { 
      id: 'instagram', 
      name: 'Instagram', 
      icon: Instagram, 
      color: 'bg-linear-to-br from-purple-500 to-pink-500',
      description: 'Gestiona tu cuenta de Instagram Business',
      connected: connections.instagram,
    },
    { 
      id: 'twitter', 
      name: 'Twitter / X', 
      icon: Twitter, 
      color: 'bg-black dark:bg-white',
      description: 'Publica tweets y monitorea menciones',
      connected: connections.twitter,
    },
    { 
      id: 'linkedin', 
      name: 'LinkedIn', 
      icon: Linkedin, 
      color: 'bg-blue-700',
      description: 'Comparte contenido profesional en LinkedIn',
      connected: connections.linkedin,
    },
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Foto de perfil */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Información Personal
        </h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-3xl">AM</span>
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:scale-110 transition-transform">
              <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Alberto Marín</h4>
            <p className="text-gray-600 dark:text-gray-400">admin@socialdashboard.com</p>
            <button className="mt-2 px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
              Cambiar Foto
            </button>
          </div>
        </div>
      </div>

      {/* Formulario de información */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              defaultValue="Alberto"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Apellidos
            </label>
            <input
              type="text"
              defaultValue="Marín Morales"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="admin@socialdashboard.com"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              defaultValue="+34 600 000 000"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Biografía
            </label>
            <textarea
              rows={4}
              defaultValue="Experto en marketing digital y gestión de redes sociales..."
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Cancelar
          </button>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      {/* Notificaciones por Email */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Notificaciones por Email
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recibe actualizaciones en tu correo electrónico
              </p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="space-y-4 pl-11">
          {[
            'Nuevos seguidores',
            'Comentarios en publicaciones',
            'Menciones',
            'Mensajes directos',
            'Reporte semanal',
          ].map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Notificaciones Push */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <Smartphone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Notificaciones Push
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Alertas en tiempo real en tu dispositivo
              </p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={pushNotifications}
              onChange={(e) => setPushNotifications(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="pl-11">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Frecuencia de notificaciones
          </label>
          <div className="space-y-2">
            {[
              { value: 'realtime', label: 'Tiempo Real', description: 'Recibe notificaciones instantáneas' },
              { value: 'hourly', label: 'Cada Hora', description: 'Resumen cada hora' },
              { value: 'daily', label: 'Diario', description: 'Un resumen al día' },
              { value: 'weekly', label: 'Semanal', description: 'Resumen semanal' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <input
                  type="radio"
                  name="frequency"
                  value={option.value}
                  checked={notificationFrequency === option.value}
                  onChange={(e) => setNotificationFrequency(e.target.value as NotificationFrequency)}
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{option.label}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderIntegrationsTab = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
              Conecta tus Redes Sociales
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Conecta tus cuentas de redes sociales para publicar y analizar contenido desde un solo lugar.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialPlatforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 ${platform.color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                    {platform.connected && (
                      <span className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                        <Check className="w-3 h-3" />
                        Conectado
                      </span>
                    )}
                  </div>
                </div>
                {platform.connected ? (
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                ) : (
                  <X className="w-5 h-5 text-gray-400" />
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {platform.description}
              </p>

              {platform.connected ? (
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                    Configurar
                  </button>
                  <button className="px-4 py-2 text-sm bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg transition-colors">
                    Desconectar
                  </button>
                </div>
              ) : (
                <button className="w-full px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                  Conectar {platform.name}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      {/* Cambiar contraseña */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Cambiar Contraseña
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Contraseña Actual
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nueva Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confirmar Nueva Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
            Actualizar Contraseña
          </button>
        </div>
      </div>

      {/* Autenticación de dos factores */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <Key className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Autenticación de Dos Factores
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Añade una capa extra de seguridad a tu cuenta
              </p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>

      {/* Sesiones activas */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Sesiones Activas
        </h3>
        <div className="space-y-4">
          {[
            { device: 'Chrome en Windows', location: 'Madrid, España', current: true },
            { device: 'Safari en iPhone', location: 'Madrid, España', current: false },
          ].map((session, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {session.device}
                    {session.current && (
                      <span className="ml-2 text-xs text-green-600 dark:text-green-400">(Esta sesión)</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{session.location}</p>
                </div>
              </div>
              {!session.current && (
                <button className="text-sm text-red-600 dark:text-red-400 hover:underline">
                  Cerrar sesión
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      {/* Tema */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
            <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Apariencia
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 'light', label: 'Claro', icon: Sun },
            { value: 'dark', label: 'Oscuro', icon: Moon },
          ].map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => setTheme(option.value as 'light' | 'dark')}
                className={`
                  p-4 rounded-lg border-2 transition-all
                  ${theme === option.value
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${theme === option.value ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`} />
                <p className={`text-sm font-medium ${theme === option.value ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  {option.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Idioma */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Idioma
          </h3>
        </div>

        <div className="space-y-2">
          {[
            { value: 'es', label: 'Español' },
            { value: 'en', label: 'English' },
            { value: 'pt', label: 'Português' },
          ].map((lang) => (
            <label key={lang.value} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <input
                type="radio"
                name="language"
                value={lang.value}
                checked={language === lang.value}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white">{lang.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Zona horaria */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Zona Horaria
        </h3>
        <select className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
          <option>(GMT+1:00) Madrid, París, Roma</option>
          <option>(GMT+0:00) Londres, Dublin</option>
          <option>(GMT-3:00) Buenos Aires, São Paulo</option>
          <option>(GMT-5:00) Ciudad de México, Bogotá</option>
          <option>(GMT-8:00) Los Ángeles</option>
        </select>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      {/* Plan actual */}
      <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">Plan Professional</h3>
            <p className="text-indigo-100">Tu plan actual</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">€49</p>
            <p className="text-indigo-100">/ mes</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Check className="w-4 h-4" />
          <span>Próxima facturación: 9 de diciembre, 2025</span>
        </div>
      </div>

      {/* Método de pago */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Método de Pago
          </h3>
          <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            Actualizar
          </button>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <CreditCard className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              •••• •••• •••• 4242
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Expira 12/2026</p>
          </div>
        </div>
      </div>

      {/* Historial de facturación */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Historial de Facturación
          </h3>
          <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
            <Download className="w-4 h-4" />
            Descargar Todo
          </button>
        </div>
        <div className="space-y-3">
          {[
            { date: '9 Nov 2025', amount: '€49.00', status: 'Pagado' },
            { date: '9 Oct 2025', amount: '€49.00', status: 'Pagado' },
            { date: '9 Sep 2025', amount: '€49.00', status: 'Pagado' },
          ].map((invoice, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{invoice.date}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Plan Professional</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{invoice.amount}</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium rounded">
                  {invoice.status}
                </span>
                <button className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zona de peligro */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-red-200 dark:border-red-900/50">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
            Zona de Peligro
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Una vez que canceles tu suscripción, perderás el acceso a todas las funciones premium.
        </p>
        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2">
          <Trash2 className="w-4 h-4" />
          Cancelar Suscripción
        </button>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-indigo-600" />
          Configuración
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gestiona tu cuenta, preferencias y ajustes de la aplicación
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 font-medium transition-all
                  ${activeTab === tab.id
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'profile' && renderProfileTab()}
        {activeTab === 'notifications' && renderNotificationsTab()}
        {activeTab === 'integrations' && renderIntegrationsTab()}
        {activeTab === 'security' && renderSecurityTab()}
        {activeTab === 'preferences' && renderPreferencesTab()}
        {activeTab === 'billing' && renderBillingTab()}
      </div>
    </DashboardLayout>
  );
}
