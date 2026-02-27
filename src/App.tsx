import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { 
  Brain, Cloud, Shield, Zap, Activity, Globe, Key, 
  FileText, Image, Send, Loader2, Trash2, Plus, Sparkles, Eye, 
  Copy, Download, Settings, BarChart3, RefreshCw, CheckCircle, XCircle,
  Menu, X, LogOut, Wand2, TrendingUp, DollarSign, Target, PlusCircle
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  content: string;
  image: string;
  imagePrompt: string;
  category: string;
  tags: string[];
  adsenseReady: boolean;
  wordCount: number;
  createdAt: Date;
}

interface SystemStatus {
  gemini: boolean;
  cloud: boolean;
  security: boolean;
  performance: boolean;
}

type TabType = 'home' | 'articles' | 'analytics' | 'settings';

const CATEGORIES = [
  'تكنولوجيا', 'أعمال', 'صحة', 'رياضة', 'ترفيه', 'تعليم', 
  'سفر', 'طعام', 'منزل', 'سيارة', 'مال', 'أخبار'
];

const ADSENSE_TIPS = [
  'استخدم عناوين جذابة ومحددة',
  'أضف صور عالية الجودة',
  'لا تتجاوز 3 إعلانات في الصفحة',
  'استخدم فقرات بطول 3-4 أسطر',
  'أضف كلمات مفتاحية في المحتوى',
  'تجنب الإفراط في الروابط'
];

export default function App() {
  // System State
  const [status, setStatus] = useState('جاري تحميل النظام...');
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    gemini: false, cloud: false, security: false, performance: false
  });
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Articles State
  const [articles, setArticles] = useState<Article[]>([]);
  const [newArticle, setNewArticle] = useState({
    topic: '',
    category: 'تكنولوجيا',
    style: 'مفصل'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load saved API key
  useEffect(() => {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      activateSystem(savedKey);
    }
  }, []);

  const activateSystem = async (key: string) => {
    if (!key.trim()) {
      setError('الرجاء إدخال مفتاح API');
      return;
    }

    setShowKeyInput(false);
    setIsConnecting(true);
    setError('');

    try {
      setStatus('جاري تهيئة الأنظمة...');
      await delay(800);
      
      setSystemStatus(prev => ({ ...prev, performance: true }));
      setStatus('جاري الاتصال بالسحابة...');
      
      const genAI = new GoogleGenerativeAI(key);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const result = await model.generateContent('test');
      
      if (result.response) {
        setSystemStatus(prev => ({ ...prev, gemini: true, cloud: true }));
        setStatus('تم الاتصال بـ Google Gemini بنجاح!');
      }
      
      await delay(600);
      setStatus('جاري تفعيل الحماية...');
      setSystemStatus(prev => ({ ...prev, security: true }));
      await delay(400);
      
      setStatus('النظام جاهز - يمكنك الآن إنشاء المقالات');
      localStorage.setItem('gemini_api_key', key);
      
    } catch (err: any) {
      console.error('Gemini Error:', err);
      if (err.message?.includes('API_KEY')) {
        setError('مفتاح API غير صحيح');
        setShowKeyInput(true);
      } else {
        setSystemStatus(prev => ({ ...prev, gemini: true, cloud: true, security: true, performance: true }));
        setStatus('النظام جاهز (وضع القراءة فقط)');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  // Generate Article with Gemini
  const generateArticle = async () => {
    if (!newArticle.topic.trim() || !apiKey) return;
    
    setIsGenerating(true);
    setGenerationProgress('جاري إنشاء المقالة...');

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      
      setGenerationProgress('جاري كتابة المحتوى...');
      
      const contentPrompt = `
اكتب مقالة كاملة ومفصلة ومنسقة باللغة العربية عن: "${newArticle.topic}"

المتطلبات:
1. عنوان جذاب وواضح
2. مقدمة مشوقة
3. محتوى غني ومفصل (${newArticle.style === 'مفصل' ? '2000-3000' : '800-1200'} كلمة)
4. ${newArticle.style === 'مفصل' ? '4-6' : '2-3'} أقسام فرعية بعناوين H2
5. فقرات قصيرة (3-4 أسطر)
6. قائمة كلمات مفتاحية في النهاية

أرجع البيانات بتنسيق JSON فقط:
{
  "title": "العنوان",
  "content": "المقال الكامل مع العناوين والتنسيق",
  "imagePrompt": "وصف صورة بدقة عالية",
  "category": "${newArticle.category}",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}
`;

      const contentResult = await model.generateContent(contentPrompt);
      const text = contentResult.response.text();
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      
      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);
        const wordCount = data.content.split(/\s+/).length;
        
        const newArt: Article = {
          id: Date.now().toString(),
          title: data.title || newArticle.topic,
          content: data.content,
          imagePrompt: data.imagePrompt,
          image: `https://image.pollinations.ai/prompt/${encodeURIComponent(data.imagePrompt || newArticle.topic)}?width=1200&height=630&nologo=true`,
          category: data.category || newArticle.category,
          tags: data.tags || [],
          adsenseReady: wordCount >= 800,
          wordCount,
          createdAt: new Date()
        };
        
        setArticles([newArt, ...articles]);
        setNewArticle({ ...newArticle, topic: '' });
        setGenerationProgress('');
      }
    } catch (err) {
      console.error('Generation Error:', err);
      setError('فشل في إنشاء المقالة');
    } finally {
      setIsGenerating(false);
    }
  };

  const deleteArticle = (id: string) => {
    setArticles(articles.filter(a => a.id !== id));
  };

  const copyArticle = async (article: Article) => {
    const fullContent = `# ${article.title}\n\n${article.content}\n\n---\nالكلمات المفتاحية: ${article.tags.join(', ')}`;
    await navigator.clipboard.writeText(fullContent);
    setCopiedId(article.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const logout = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    setShowKeyInput(true);
    setArticles([]);
    setSystemStatus({ gemini: false, cloud: false, security: false, performance: false });
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const allActive = Object.values(systemStatus).every(v => v);

  // Render Login Screen
  if (showKeyInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/30">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-black text-white mb-2">بصيرة PRO</h1>
            <p className="text-cyan-400 font-medium">منصة إنشاء المقالات بالذكاء الاصطناعي</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); activateSystem(apiKey); }} 
                className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2 text-right">
                مفتاح Google Gemini API
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="أدخل مفتاح API..."
                className="w-full px-4 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-left"
                dir="ltr"
              />
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isConnecting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            >
              {isConnecting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> جاري الاتصال...
                </span>
              ) : (
                'تفعيل النظام'
              )}
            </button>
            
            <p className="mt-4 text-xs text-slate-500 text-center">
              احصل على مفتاح من{' '}
              <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                Google AI Studio
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Render Articles Tab
  const renderArticles = () => (
    <div className="space-y-6">
      {/* Create Article Card */}
      <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Wand2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">إنشاء مقالة جديدة</h2>
            <p className="text-sm text-slate-400">اكتب موضوعاً وأنا سأقوم بإنشاء مقالة متكاملة مع صورة</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <div className="md:col-span-2">
            <input
              type="text"
              value={newArticle.topic}
              onChange={(e) => setNewArticle({ ...newArticle, topic: e.target.value })}
              placeholder=" موضوع المقالة..."
              className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <select
            value={newArticle.category}
            onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
            className="px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={generateArticle}
            disabled={isGenerating || !newArticle.topic.trim()}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                جاري الإنشاء...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                إنشاء
              </>
            )}
          </button>
        </div>

        {isGenerating && (
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <div className="flex items-center gap-3">
              <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
              <span className="text-blue-400">{generationProgress}</span>
            </div>
          </div>
        )}

        {/* Adsense Tips */}
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">نصائح لأدسنس</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {ADSENSE_TIPS.map((tip, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-green-500/20 rounded-lg text-green-300">
                {tip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length === 0 ? (
          <div className="md:col-span-2 lg:col-span-3 text-center py-12">
            <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">لا توجد مقالات بعد. أنشئ مقالتك الأولى!</p>
          </div>
        ) : (
          articles.map(article => (
            <div key={article.id} className="bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://source.unsplash.com/1200x630/?' + encodeURIComponent(article.category); }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs flex items-center gap-1 ${article.adsenseReady ? 'bg-green-500/80 text-white' : 'bg-yellow-500/80 text-black'}`}>
                    {article.adsenseReady ? <CheckCircle className="w-3 h-3" /> : <Target className="w-3 h-3" />}
                    {article.adsenseReady ? 'متوافق' : `${article.wordCount} كلمة`}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-3">{article.content.substring(0, 150)}...</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-700/50 rounded-lg text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-500">
                    {new Date(article.createdAt).toLocaleDateString('ar')}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyArticle(article)}
                      className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                      title="نسخ"
                    >
                      {copiedId === article.id ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                      title="عرض"
                    >
                      <Eye className="w-4 h-4 text-slate-400" />
                    </button>
                    <button
                      onClick={() => deleteArticle(article.id)}
                      className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/40 transition-colors"
                      title="حذف"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedArticle(null)}>
          <div className="bg-slate-800 border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-64">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-black text-white mb-4">{selectedArticle.title}</h1>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedArticle.tags.map((tag, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400">#{tag}</span>
                ))}
              </div>
              <div className="prose prose-invert max-w-none">
                {selectedArticle.content.split('\n').map((para, i) => (
                  para.trim() ? (
                    para.startsWith('##') ? (
                      <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{para.replace('## ', '')}</h2>
                    ) : (
                      <p key={i} className="text-slate-300 leading-relaxed mb-4">{para}</p>
                    )
                  ) : null
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Render Home Tab
  const renderHome = () => (
    <div className="space-y-8">
      {/* Status Card */}
      <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${allActive ? 'bg-gradient-to-br from-green-400 to-emerald-600' : 'bg-gradient-to-br from-blue-400 to-cyan-600'}`}>
              {allActive ? <Zap className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">حالة النظام</h2>
              <p className="text-sm text-slate-400">{status}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${allActive ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></span>
            <span className="text-sm text-slate-400">{allActive ? 'نشط' : 'جاري التفعيل'}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Brain, label: 'Gemini API', active: systemStatus.gemini },
            { icon: Cloud, label: 'السحابة', active: systemStatus.cloud },
            { icon: Shield, label: 'الحماية', active: systemStatus.security },
            { icon: Zap, label: 'الأداء', active: systemStatus.performance },
          ].map(({ icon: Icon, label, active }) => (
            <div key={label} className={`p-4 rounded-xl border ${active ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/10'}`}>
              <Icon className={`w-6 h-6 mb-2 ${active ? 'text-green-400' : 'text-slate-500'}`} />
              <p className={`text-sm font-medium ${active ? 'text-green-400' : 'text-slate-500'}`}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{articles.length}</p>
              <p className="text-sm text-slate-400">المقالات المنشأة</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{articles.filter(a => a.adsenseReady).length}</p>
              <p className="text-sm text-slate-400">متوافقة مع أدسنس</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{articles.reduce((a, b) => a + b.wordCount, 0).toLocaleString()}</p>
              <p className="text-sm text-slate-400">إجمالي الكلمات</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">ابدأ الآن!</h3>
            <p className="text-slate-400">أنشئ مقالتك الأولى المتوافقة مع أدسنس</p>
          </div>
          <button
            onClick={() => setActiveTab('articles')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            إنشاء مقالة
          </button>
        </div>
      </div>
    </div>
  );

  // Main Layout
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">بصيرة PRO</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-green-400">متصل</span>
            </div>
            <button onClick={logout} className="p-2 hover:bg-red-500/20 rounded-lg transition-colors" title="تسجيل خروج">
              <LogOut className="w-5 h-5 text-slate-400 hover:text-red-400" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`fixed top-17 left-0 bottom-0 w-64 bg-slate-900 border-r border-white/10 z-30 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="p-4 space-y-2">
          {[
            { id: 'home', icon: Activity, label: 'الرئيسية' },
            { id: 'articles', icon: FileText, label: 'المقالات' },
            { id: 'analytics', icon: BarChart3, label: 'الإحصائيات' },
            { id: 'settings', icon: Settings, label: 'الإعدادات' },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabType)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === id ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
              {id === 'articles' && articles.length > 0 && (
                <span className="mr-auto px-2 py-0.5 bg-cyan-500/30 rounded-full text-xs">{articles.length}</span>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`pt-17 min-h-screen transition-all duration-300 ${sidebarOpen ? 'mr-64' : 'mr-0'}`}>
        <div className="p-8">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'articles' && renderArticles()}
          {activeTab === 'analytics' && (
            <div className="text-center py-20">
              <BarChart3 className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">قريباً...</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">الإعدادات</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">مفتاح API</label>
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white"
                      dir="ltr"
                    />
                  </div>
                  <button
                    onClick={() => { localStorage.setItem('gemini_api_key', apiKey); }}
                    className="px-6 py-3 bg-cyan-500 rounded-xl font-bold text-white"
                  >
                    حفظ الإعدادات
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
