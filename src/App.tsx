import React from 'react';
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-10 text-center">
      <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-5xl mb-10 shadow-4xl animate-bounce">▲</div>
      <h1 className="text-6xl font-black text-white mb-6">بصيرة PRO</h1>
      <p className="text-blue-400 text-xl font-bold tracking-widest uppercase mb-12">النظام نشط ومؤمن بالكامل</p>
      <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
        <p className="text-slate-400 font-medium italic">"مرحباً بك في القمة. هذه النسخة تعمل الآن على سحابة Vercel بنجاح."</p>
      </div>
    </div>
  );
}