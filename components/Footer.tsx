import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 pb-12 pt-12 border-t border-zinc-200 dark:border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} Steven Kolawole / Samuel Oyeneye.
        </div>
        <div className="text-xs text-zinc-400 font-mono">
          Refactored with React & Tailwind
        </div>
      </div>
    </footer>
  );
};
