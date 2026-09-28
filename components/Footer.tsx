import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-14 pt-6 pb-14 border-t border-[#e5e5e5] text-[14px] text-[#777] font-palatino font-serif flex items-center justify-between">
      <div>
        <span>© {currentYear} Samuel Oyeneye</span>
      </div>
    </footer>
  );
};


