import React from 'react';
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-10 text-center">
      <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-5xl mb-12 shadow-4xl animate-bounce">▲</div>
      <h1 className="text-7xl font-black text-white mb-6">بصيرة PRO</h1>
      <p className="text-blue-400 text-2xl font-bold tracking-widest uppercase mb-12">نظام التشغيل المعرفي نشط</p>
      <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-3xl max-w-2xl">
        <p className="text-slate-300 text-lg leading-relaxed italic">"تم تفعيل محرك Gemini 3 Pro بنجاح. المنصة الآن متصلة بالسحابة العالمية."</p>
      </div>
    </div>
  );
}