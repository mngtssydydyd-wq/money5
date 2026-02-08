import { useState } from 'react';
import { TrendingUp, Building2, Cpu, LineChart } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import Modal from './Modal';

interface ServiceCardProps {
  title: string;
  badge: string;
  description: string;
  example: string;
  url: string;
  icon: 'gold' | 'realestate' | 'ai' | 'stocks';
}

const icons = {
  gold: TrendingUp,
  realestate: Building2,
  ai: Cpu,
  stocks: LineChart,
};

function ServiceCard({ title, badge, description, example, url, icon }: ServiceCardProps) {
  const { isDark } = useTheme();
  const Icon = icons[icon];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`group relative block w-full border rounded-lg p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-right ${isDark ? 'bg-gradient-to-br from-[#0a0a0a] to-[#050505] border-[#C5A059]/30 hover:shadow-[#C5A059]/20 hover:border-[#C5A059]' : 'bg-white border-gray-200 hover:shadow-xl hover:shadow-gray-300/30 hover:border-[#C5A059]'}`}
        dir="rtl"
      >
      <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-[#C5A059]/0 to-[#C5A059]/5' : 'bg-gradient-to-br from-[#C5A059]/0 to-[#C5A059]/3'}`}></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4 flex-row-reverse">
          <div className={`p-3 rounded-lg group-hover:bg-[#C5A059]/20 transition-colors ${isDark ? 'bg-[#C5A059]/10' : 'bg-[#C5A059]/5'}`}>
            <Icon className="w-6 h-6 text-[#C5A059]" />
          </div>
          <span className={`text-xs font-['IBM_Plex_Sans_Arabic'] px-3 py-1 rounded-full ${isDark ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-[#C5A059]/10 text-[#C5A059]'}`}>
            {badge}
          </span>
        </div>

        <h3 className={`text-xl font-['Cairo'] font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>

        <p className={`font-['IBM_Plex_Sans_Arabic'] text-sm leading-relaxed mb-4 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>

        <div className={`border rounded-md p-3 mb-4 ${isDark ? 'bg-black/40 border-[#C5A059]/10' : 'bg-gray-50 border-gray-200'}`}>
          <p className={`font-['IBM_Plex_Sans_Arabic'] text-xs leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {example}
          </p>
        </div>

        <div className="flex items-center text-[#C5A059] text-sm font-['IBM_Plex_Sans_Arabic'] group-hover:gap-2 transition-all font-600 flex-row-reverse">
          <span>استكشف الآن</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        url={url}
      />
    </>
  );
}

export default ServiceCard;
