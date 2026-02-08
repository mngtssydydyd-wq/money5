import { useTheme } from './ThemeContext';
import Header from './components/Header';
import MarketTicker from './components/MarketTicker';
import ServiceCard from './components/ServiceCard';
import VIPSection from './components/VIPSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  const { isDark } = useTheme();
  const services = [
    {
      title: 'الذهب والسيولة النقدية',
      badge: 'تحليل الصاغة والتحوط الدولي',
      description: 'دراسة استباقية لحماية السيولة من التضخم بناءً على قرارات الفيدرالي والبنك المركزي المصري',
      example: 'ما هو التوقيت المثالي لتحويل السيولة إلى ذهب قبل دورة الفائدة القادمة؟',
      url: '[PLACEHOLDER_GOLD_URL]',
      icon: 'gold' as const
    },
    {
      title: 'الاستثمار العقاري السيادي',
      badge: 'دقة تقييم 98%',
      description: 'تحليل الفرص الاستثمارية في الحي المالي، العاصمة الإدارية، وزايد. حساب العائد الإيجاري الصافي (ROI)',
      example: 'أيهما أفضل: المقرات الإدارية في العاصمة أم العقارات التجارية في التجمع؟',
      url: '[PLACEHOLDER_REAL_ESTATE_URL]',
      icon: 'realestate' as const
    },
    {
      title: 'التحول الرقمي والأتمتة',
      badge: 'كفاءة تشغيل +40%',
      description: 'إعادة هندسة العمليات الإدارية لشركات المقاولات والمصانع لتقليل النفقات باستخدام ذكاء الأعمال',
      example: 'كيف يمكنني أتمتة نظام اللوجستيات لتقليل الهالك السنوي بنسبة 25%؟',
      url: '[PLACEHOLDER_AI_TECH_URL]',
      icon: 'ai' as const
    },
    {
      title: 'نبض البورصة والأسهم',
      badge: 'تحليل فني وأساسي',
      description: 'تتبع حركات رؤوس الأموال وصناديق الاستثمار في EGX30 والأسواق العالمية لحظة بلحظة',
      example: 'تحليل أداء قطاع العقارات في البورصة المصرية بناءً على بيانات الربع الأخير',
      url: '[PLACEHOLDER_STOCKS_URL]',
      icon: 'stocks' as const
    }
  ];

  return (
    <div className={isDark ? 'min-h-screen bg-[#050505]' : 'min-h-screen bg-white'}>
      <Header />
      <MarketTicker />

      <main>
        <section className={`py-20 px-6 ${isDark ? '' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className={`text-5xl md:text-6xl font-['Cairo'] font-black mb-6 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                الاستشارات السيادية<br />
                <span className="text-[#C5A059]">لصناع القرار</span>
              </h1>
              <p className={`font-['IBM_Plex_Sans_Arabic'] text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                منصة استشارية متقدمة تجمع بين الذكاء الاصطناعي والخبرة البشرية لخدمة رجال الأعمال والمستثمرين المصريين
              </p>
            </div>

            <div id="services" className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <VIPSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
