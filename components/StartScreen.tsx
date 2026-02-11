
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-900 p-3 sm:p-4 md:p-6 overflow-y-auto overflow-x-hidden">
      <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8 md:space-y-12 my-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 select-none pointer-events-none">
          <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black italic tracking-tighter">01</span>
        </div>

        <div className="animate-in fade-in slide-in-from-top-12 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] font-black tracking-tight mb-3 sm:mb-4 md:mb-6 italic uppercase leading-[0.9]">C-ESCAPE</h1>
          <div className="h-2 sm:h-2.5 md:h-3 w-24 sm:w-32 md:w-48 lg:w-64 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-slate-900 text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-black px-2">Architecture // Logic // Performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-left animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 border-2 sm:border-3 md:border-4 border-slate-950 bg-white shadow-[6px_6px_0px_0px_rgba(30,58,138,1)] sm:shadow-[8px_8px_0px_0px_rgba(30,58,138,1)] md:shadow-[10px_10px_0px_0px_rgba(30,58,138,1)] lg:shadow-[12px_12px_0px_0px_rgba(30,58,138,1)] rounded-sm">
            <h3 className="text-xs sm:text-xs md:text-sm font-black uppercase tracking-normal sm:tracking-widest mb-3 sm:mb-4 md:mb-6 text-blue-600 flex items-center gap-2">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Challenge Overview
            </h3>
            <ul className="text-xs sm:text-sm md:text-base space-y-2 sm:space-y-3 md:space-y-4 text-slate-900 font-bold uppercase tracking-normal sm:tracking-tight">
              <li className="flex gap-2 sm:gap-3"><span className="text-blue-600">01.</span> <span className="text-xs sm:text-sm md:text-base">Navigate high-fidelity memory spaces</span></li>
              <li className="flex gap-2 sm:gap-3"><span className="text-blue-600">02.</span> <span className="text-xs sm:text-sm md:text-base">Solve real-world C-logic traps</span></li>
              <li className="flex gap-2 sm:gap-3"><span className="text-blue-600">03.</span> <span className="text-xs sm:text-sm md:text-base">Demonstrate architectural proficiency</span></li>
            </ul>
          </div>
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 border border-slate-100 bg-slate-50 shadow-sm rounded-sm flex flex-col justify-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-snug font-medium italic px-2">
              "Mastering the machine starts here. This is not a game; it is an assessment of your potential."
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-5 md:pt-6 border-t border-slate-200">
              <div className="flex justify-between items-center text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>System Status</span>
                <span className="text-blue-600">Optimized</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 animate-in fade-in zoom-in duration-1000 delay-500">
          <button 
            onClick={onStart}
            className="group relative w-full sm:w-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-5 md:py-6 lg:py-8 bg-slate-950 text-white font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl sm:shadow-2xl rounded-sm text-sm sm:text-base md:text-lg"
          >
            <span className="relative z-10">Start The Assessment</span>
            <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-expo"></div>
          </button>
        </div>

        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400 uppercase tracking-normal sm:tracking-widest font-black flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>Tier-1 Engineering Program</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full hidden sm:block"></span>
          <span>Apply Now</span>
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
