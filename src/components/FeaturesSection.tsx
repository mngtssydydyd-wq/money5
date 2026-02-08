import { Brain, Shield, Zap, Globe } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function FeaturesSection() {
  const { isDark } = useTheme();
  const features = [
    {
      icon: Brain,
      title: 'ذكاء اصطناعي سيادي',
      description: 'تحليل مخصص لواقع الاقتصاد المصري الجيوسياسي'
    },
    {
      icon: Shield,
      title: 'خصوصية سيادية',
      description: 'تشفير عسكري AES-256 يضمن عدم تخزين أو اطلاع أي طرف على استشاراتك'
    },
    {
      icon: Zap,
      title: 'كفاءة القرار',
      description: 'استشارات معمقة يتم تقديمها في أقل من 120 ثانية لتناسب وقتك الثمين'
    },
    {
      icon: Globe,
      title: 'رؤية 360 درجة',
      description: 'ربط لحظي بين قطاعات العقار والذهب والأسهم لصورة استثمارية كاملة'
    }
  ];

  return (
    <section id="features" className={`py-20 px-6 transition-colors duration-300 ${isDark ? 'bg-black/20' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-['Cairo'] font-black text-center mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          لماذا يثق كبار المستثمرين في Deep Break؟
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative border rounded-xl p-8 transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-[#0a0a0a] to-[#050505] border-[#C5A059]/20 hover:border-[#C5A059]/50' : 'bg-white border-gray-200 hover:border-[#C5A059]/50'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg group-hover:bg-[#C5A059]/20 transition-colors flex-shrink-0 ${isDark ? 'bg-[#C5A059]/10' : 'bg-[#C5A059]/5'}`}>
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-['Cairo'] font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`font-['IBM_Plex_Sans_Arabic'] text-sm leading-relaxed font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
