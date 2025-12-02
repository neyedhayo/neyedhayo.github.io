import React from 'react';
import { NEWS } from '../constants';

export const News = () => {
  return (
    <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-bold font-display tracking-tight text-zinc-900 dark:text-zinc-100">
          News
        </h2>
        {/* Horizontal line removed as requested */}
      </div>
      
      <div className="space-y-1 max-h-[400px] overflow-y-auto overflow-x-hidden pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
        {NEWS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-baseline group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 p-3 -mx-3 rounded-lg transition-colors"
          >
            <div className="shrink-0 w-28 text-sm font-mono font-bold text-zinc-400 dark:text-zinc-500 tracking-wide group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
              {item.date}
            </div>
            <div className="text-[16px] leading-relaxed text-zinc-600 dark:text-zinc-300">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};