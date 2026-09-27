import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-14 pt-6 pb-14 border-t border-[#e5e5e5] text-[14px] text-[#777] font-serif flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span>© {currentYear} Samuel Oyeneye</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <a
          href={SOCIAL_LINKS.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1.5 py-0.5 rounded transition-colors"
        >
          Scholar
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1.5 py-0.5 rounded transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1.5 py-0.5 rounded transition-colors"
        >
          X
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1.5 py-0.5 rounded transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};
