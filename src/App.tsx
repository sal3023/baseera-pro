import React from 'react';
export default function App() {
  return (
    <div style={{minHeight:'100vh', background:'#020617', color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'20px'}}>
      <h1 style={{fontSize:'4rem', fontWeight:'900', marginBottom:'20px'}}>بصيرة PRO</h1>
      <p style={{fontSize:'1.5rem', color:'#3b82f6', fontWeight:'700', letterSpacing:'0.2em'}}>النظام الاستراتيجي يعمل بكفاءة 🛡️</p>
      <div style={{marginTop:'40px', padding:'30px', background:'rgba(255,255,255,0.05)', borderRadius:'24px', border:'1px solid rgba(255,255,255,0.1)'}}>
        <p>تم تفعيل محرك Gemini بنجاح على سحابة Vercel.</p>
      </div>
    </div>
  );
}