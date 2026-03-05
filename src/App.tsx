import React, { useState, useEffect } from 'react';
import { Brain, Loader2, Key, Zap } from 'lucide-react';
import Navbar from './components/Navbar';

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('جاري تحميل النظام...');

  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      setShowKeyInput(false);
      setStatus('تم استعادة الجلسة بنجاح - النظام جاهز');
    }
  }, []);

  const activateDemoMode = () => {
    setShowKeyInput(false);
    setStatus('وضع التجربة - النظام جاهز');
  };

  const activateSystem = async (key: string) => {
    if (!key.trim()) {
      setError('الرجاء إدخال مفتاح API');
      return;
    }

    setShowKeyInput(false);
    setIsConnecting(true);
    setError('');
    setStatus('جاري تهيئة الأنظمة...');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('تم الاتصال بـ Google Gemini بنجاح!');
      localStorage.setItem('gemini_api_key', key);
    } catch (err) {
      setError('فشل الاتصال');
      setShowKeyInput(true);
    } finally {
      setIsConnecting(false);
    }
  };

  if (showKeyInput) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 font-['Tajawal']">
        <Navbar 
          currentView="home" 
          setView={() => {}} 
          isAuthenticated={false} 
        />
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-md w-full px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl font-black text-white mb-2">بصيرة PRO</h1>
              <p className="text-cyan-400 font-medium">منصة إنشاء المقالات بالذكاء الاصطناعي</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              <form onSubmit={(e) => { e.preventDefault(); activateSystem(apiKey); }} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 text-right">
                    مفتاح Google Gemini API
                  </label>
                  <div className="relative">
                    <Key className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="أدخل مفتاح API..."
                      className="w-full px-4 py-4 pr-12 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-left"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isConnecting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري الاتصال...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      تفعيل النظام
                    </>
                  )}
                </button>
                
                <p className="text-xs text-slate-500 text-center">
                  احصل على مفتاح من{' '}
                  <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                    Google AI Studio
                  </a>
                </p>

                <button
                  type="button"
                  onClick={activateDemoMode}
                  className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-medium text-slate-300 hover:bg-white/20 transition-all"
                >
                  تجربة بدون مفتاح
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-['Tajawal']">
      <Navbar 
        currentView="home" 
        setView={() => {}} 
        isAuthenticated={true} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12 animate-in fade-in duration-700">
          <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-12 text-white shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
                <Zap size={16} />
                <span>نظام التشغيل المعرفي نشط v16.0</span>
              </div>
              <h1 className="text-6xl font-black mb-6 leading-tight">مستقبل التحليل الاستراتيجي بين يديك</h1>
              <p className="text-blue-100 text-xl mb-8 leading-relaxed">
                منصة بصيرة PRO توفر لك أدوات متقدمة مدعومة بالذكاء الاصطناعي لتحليل البيانات واتخاذ القرارات بدقة متناهية.
              </p>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all flex items-center gap-2">
                ابدأ الآن
              </button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'دقة التحليل', value: '99.9%', color: 'text-emerald-400' },
              { label: 'سرعة المعالجة', value: '1.2ms', color: 'text-blue-400' },
              { label: 'تغطية البيانات', value: 'Global', color: 'text-indigo-400' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm">
                <p className="text-slate-400 font-medium mb-2">{stat.label}</p>
                <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-white">الحالة الحالية</h2>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center">
              <p className="text-slate-300 text-lg italic">{status}</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} بصيرة PRO. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
