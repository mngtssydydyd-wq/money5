import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`relative border-b transition-colors duration-300 ${isDark ? 'bg-[#050505] border-[#C5A059]/20' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <img
          src={isDark ? "/photo_2025-10-08_09-35-19-removebg-preview.png" : "/gemini_generated_image_k36grrk36grrk36g.png"}
          alt="Deep Break Logo"
          className="h-32"
        />

        <nav className="flex gap-8 items-center">
          <a href="#services" className={`transition-colors font-['IBM_Plex_Sans_Arabic'] text-sm font-600 ${isDark ? 'text-gray-300 hover:text-[#C5A059]' : 'text-gray-600 hover:text-[#C5A059]'}`}>
            الخدمات
          </a>
          <a href="#vip" className={`transition-colors font-['IBM_Plex_Sans_Arabic'] text-sm font-600 ${isDark ? 'text-gray-300 hover:text-[#C5A059]' : 'text-gray-600 hover:text-[#C5A059]'}`}>
            المكتب الخاص
          </a>
          <a href="#features" className={`transition-colors font-['IBM_Plex_Sans_Arabic'] text-sm font-600 ${isDark ? 'text-gray-300 hover:text-[#C5A059]' : 'text-gray-600 hover:text-[#C5A059]'}`}>
            المميزات
          </a>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
            aria-label="تبديل الوضع"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
