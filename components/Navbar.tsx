import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export type PageTab = 'about' | 'papers' | 'writings';

interface NavbarProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
}) => {
  return (
    <header className="pt-8 pb-7 flex items-center justify-end font-serif text-[17px]">
      <nav className="flex items-center gap-6 sm:gap-8 ml-auto">
        <button
          onClick={() => onSelectTab('about')}
          className={`transition-colors pb-0.5 ${
            currentTab === 'about'
              ? 'text-[#1a1a1a] font-bold border-b-2 border-[#1a1a1a]'
              : 'text-[#777] hover:text-[#135a28] hover:bg-[#7FEE64]/30 px-1 rounded'
          }`}
        >
          about
        </button>
        <button
          onClick={() => onSelectTab('papers')}
          className={`transition-colors pb-0.5 ${
            currentTab === 'papers'
              ? 'text-[#1a1a1a] font-bold border-b-2 border-[#1a1a1a]'
              : 'text-[#777] hover:text-[#135a28] hover:bg-[#7FEE64]/30 px-1 rounded'
          }`}
        >
          papers
        </button>
        <button
          onClick={() => onSelectTab('writings')}
          className={`transition-colors pb-0.5 ${
            currentTab === 'writings'
              ? 'text-[#1a1a1a] font-bold border-b-2 border-[#1a1a1a]'
              : 'text-[#777] hover:text-[#135a28] hover:bg-[#7FEE64]/30 px-1 rounded'
          }`}
        >
          writings
        </button>
        <a
          href={SOCIAL_LINKS.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#777] hover:text-[#135a28] hover:bg-[#7FEE64]/30 px-1 rounded transition-colors pb-0.5"
        >
          cv
        </a>
      </nav>
    </header>
  );
};
