import React from 'react';
import { LayoutDashboard, Home, Settings, LogOut, Bell } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setView: (view: any) => void;
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, isAuthenticated }) => {
  return (
    <nav className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => setView('home')}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">▲</div>
              <span className="text-xl font-black text-white tracking-tighter">بصيرة PRO</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setView('home')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'home' 
                    ? 'bg-blue-600/10 text-blue-400' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Home size={18} />
                <span className="font-medium">الرئيسية</span>
              </button>
              
              <button
                onClick={() => setView('analytics')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  currentView === 'analytics' 
                    ? 'bg-blue-600/10 text-blue-400' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <LayoutDashboard size={18} />
                <span className="font-medium">التحليلات</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-slate-900"></span>
            </button>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-white/20"></div>
                <button className="text-slate-400 hover:text-red-400 transition-colors">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
                دخول
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
