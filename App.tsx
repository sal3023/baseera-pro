import React, { useState } from 'react';
import { ViewMode } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Dashboard from './components/Dashboard.tsx';

const App = () => {
  const [view, setView] = useState(ViewMode.HOME);
  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Tajawal']">
      <Navbar currentView={view} setView={setView} isAuthenticated={true} isDarkMode={true} toggleTheme={()=>{}} />
      <main className="max-w-7xl mx-auto px-4 py-10">
        {view === ViewMode.HOME && <Home posts={[]} onPostClick={()=>{}} setView={setView} />}
        {view === ViewMode.DASHBOARD && <Dashboard posts={[]} onAddNew={()=>{}} onDeletePost={()=>{}} onEditPost={()=>{}} />}
      </main>
    </div>
  );
};
export default App;