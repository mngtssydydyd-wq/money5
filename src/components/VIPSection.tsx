import { Crown } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function VIPSection() {
  const { isDark } = useTheme();
  return (
    <section id="vip" className={`py-20 px-6 transition-colors duration-300 ${isDark ? '' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`relative border-2 border-[#C5A059] rounded-2xl p-12 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-black' : 'bg-white'}`}>
          <div className={`absolute top-0 left-0 w-full h-full ${isDark ? 'bg-[radial-gradient(circle_at_30%_50%,rgba(197,160,89,0.1),transparent_50%)]' : 'bg-[radial-gradient(circle_at_30%_50%,rgba(197,160,89,0.05),transparent_50%)]'}`}></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-full ${isDark ? 'bg-[#C5A059]/20' : 'bg-[#C5A059]/10'}`}>
                <Crown className="w-12 h-12 text-[#C5A059]" />
              </div>
            </div>

            <h2 className={`text-4xl font-['Cairo'] font-black text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              المكتب الخاص للشركاء
            </h2>

            <p className={`font-['IBM_Plex_Sans_Arabic'] text-center text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              للاستشارات السيادية والصفقات الاستراتيجية التي تتطلب السرية التامة وتدخل خبير بشري مخضرم
            </p>

            <div className="flex justify-center">
              <a
                href="[PLACEHOLDER_VIP_URL]"
                className="group relative px-8 py-4 bg-gradient-to-l from-[#C5A059] to-[#d4af6a] text-black font-['IBM_Plex_Sans_Arabic'] font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5A059]/50 hover:scale-105"
              >
                <span className="relative z-10">طلب لقاء VVIP مباشر</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af6a] to-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VIPSection;
