import { useTheme } from '../ThemeContext';

function MarketTicker() {
  const { isDark } = useTheme();
  const marketData = [
    { label: 'عيار 24', value: '7,615 ج.م', change: '+0.8%' },
    { label: 'عيار 21', value: '6,666 ج.م', change: '+0.8%' },
    { label: 'جنيه ذهب', value: '53,880 ج.م', change: '+1.1%' },
    { label: 'فضة 999', value: '5,810 ج.م', change: '+0.5%' },
    { label: 'فضة 925', value: '146.5 ج.م', change: '+0.4%' },
    { label: 'دولار/جنيه', value: '48.20', change: '+0.2%' },
    { label: 'فائدة CBE', value: '20.00%', change: '0.0%' },
    { label: 'مؤشر EGX30', value: '28,450 نقطة', change: '+1.2%' },
    { label: 'سهم CIB', value: '195.00 ج.م', change: '+2.1%' },
    { label: 'التضخم العام', value: '12.3%', change: '-2.1%' },
    { label: 'التضخم الحضري', value: '26.4%', change: '+0.8%' },
    { label: 'توقعات يناير 26', value: '11.7%', change: '-0.6%' },
    { label: 'التضخم الأساسي', value: '11.5%', change: '-0.8%' },
  ];

  return (
    <div className={`border-y transition-colors duration-300 ${isDark ? 'bg-black/40 border-[#C5A059]/10' : 'bg-gray-100 border-gray-200'} overflow-hidden`}>
      <style>{`
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-content {
          animation: tickerScroll 40s linear infinite;
        }
      `}</style>
      <div className="py-3 flex gap-12 ticker-content">
        {[...marketData, ...marketData].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-[#C5A059] font-['Roboto_Mono'] text-sm font-bold tracking-wide">
              {item.label}:
            </span>
            <span className={`font-['Roboto_Mono'] text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {item.value}
            </span>
            <span className={`text-xs font-['Roboto_Mono'] font-semibold ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketTicker;
