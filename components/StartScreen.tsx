
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-900 p-4 md:p-6 overflow-y-auto overflow-x-hidden">
      <div className="max-w-2xl w-full text-center space-y-8 md:space-y-12 my-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 select-none pointer-events-none">
          <span className="text-[20rem] font-black italic tracking-tighter">01</span>
        </div>

        <div className="animate-in fade-in slide-in-from-top-12 duration-1000">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-4 italic uppercase leading-[0.8]">C-ESCAPE</h1>
          <div className="h-3 w-40 md:w-64 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-900 text-sm md:text-lg uppercase tracking-[0.6em] font-black">Architecture // Logic // Performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="p-6 md:p-10 border-4 border-slate-950 bg-white shadow-[12px_12px_0px_0px_rgba(30,58,138,1)] rounded-sm">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 md:mb-6 text-blue-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Challenge Overview
            </h3>
            <ul className="text-sm md:text-base space-y-4 text-slate-900 font-bold uppercase tracking-tight">
              <li className="flex gap-3"><span className="text-blue-600">01.</span> <span>Navigate high-fidelity memory spaces</span></li>
              <li className="flex gap-3"><span className="text-blue-600">02.</span> <span>Solve real-world C-logic traps</span></li>
              <li className="flex gap-3"><span className="text-blue-600">03.</span> <span>Demonstrate architectural proficiency</span></li>
            </ul>
          </div>
          <div className="p-6 md:p-10 border border-slate-100 bg-slate-50 shadow-sm rounded-sm flex flex-col justify-center">
            <p className="text-sm md:text-lg text-slate-600 leading-snug font-medium italic">
              "Mastering the machine starts here. This is not a game; it is an assessment of your potential."
            </p>
            <div className="mt-10 pt-6 border-t border-slate-200">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>System Status</span>
                <span className="text-blue-600">Optimized</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 animate-in fade-in zoom-in duration-1000 delay-500">
          <button 
            onClick={onStart}
            className="group relative w-full md:w-auto px-16 md:px-24 py-6 md:py-8 bg-slate-950 text-white font-black uppercase tracking-[0.6em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl rounded-sm text-base md:text-lg"
          >
            <span className="relative z-10">Start The Assessment</span>
            <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-expo"></div>
          </button>
        </div>

        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black flex items-center justify-center gap-4">
          <span>Tier-1 Engineering Program</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span>Apply Now</span>
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
