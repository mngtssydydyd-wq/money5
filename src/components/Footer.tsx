import { Lock, ShieldCheck, Eye } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function Footer() {
  const { isDark } = useTheme();
  return (
    <footer className={`border-t transition-colors duration-300 py-12 px-6 ${isDark ? 'bg-black border-[#C5A059]/20' : 'bg-gray-900 border-gray-700'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#C5A059]" />
            <span className={`font-['IBM_Plex_Sans_Arabic'] text-sm ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
              تشفير عسكري AES-256
            </span>
          </div>
          <div className="text-[#C5A059]">|</div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#C5A059]" />
            <span className={`font-['IBM_Plex_Sans_Arabic'] text-sm ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
              خصوصية تامة
            </span>
          </div>
          <div className="text-[#C5A059]">|</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <span className={`font-['IBM_Plex_Sans_Arabic'] text-sm ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
              Deep Break Security Protocols
            </span>
          </div>
        </div>

        <div className={`border rounded-lg p-6 text-center ${isDark ? 'bg-[#C5A059]/5 border-[#C5A059]/20' : 'bg-[#C5A059]/5 border-[#C5A059]/20'}`}>
          <p className={`font-['IBM_Plex_Sans_Arabic'] text-sm leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-200'}`}>
            نحن ندرك قيمة المعلومة؛ كافة استشاراتك تتم في بيئة مشفرة بالكامل ولا يتم تخزينها
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className={`font-['IBM_Plex_Sans_Arabic'] text-xs font-medium ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
            © 2024 Deep Break. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
