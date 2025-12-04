import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SOCIAL_LINKS } from '../constants';
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewState, sectionId?: string) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    
    if (view === 'home' && sectionId) {
      // Small timeout to allow View change to propagate before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const NavLink = ({ label, view, sectionId, isActive }: { label: string, view: ViewState, sectionId?: string, isActive?: boolean }) => (
    <button
      onClick={() => handleNavClick(view, sectionId)}
      className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-all ${
        isActive 
          ? 'text-primary dark:text-primary-dark' 
          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-primary-dark rounded-full shadow-[0_0_10px_rgba(13,148,136,0.5)]" />
      )}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Side (Empty as requested) */}
        <div className="w-10 md:w-auto"></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink view="home" sectionId="home" label="About" isActive={currentView === 'home'} />
          <NavLink view="home" sectionId="news" label="News" />
          <NavLink view="publications" label="Publications" isActive={currentView === 'publications'} />
          <NavLink view="home" sectionId="projects" label="Projects" />
          <NavLink view="blog" label="Blog" isActive={currentView === 'blog'} />
          
          <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-700 mx-4" />
          
          <div className="flex items-center gap-3">
            <a 
              href={SOCIAL_LINKS.cv} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:border-primary/50 dark:hover:border-primary-dark/50"
            >
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-400"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-top-2 shadow-2xl">
          <div className="flex flex-col p-6 gap-2 font-display">
            <button onClick={() => handleNavClick('home', 'home')} className="text-left text-lg font-medium text-zinc-600 dark:text-zinc-400 py-3 border-b border-zinc-100 dark:border-zinc-900">About</button>
            <button onClick={() => handleNavClick('home', 'news')} className="text-left text-lg font-medium text-zinc-600 dark:text-zinc-400 py-3 border-b border-zinc-100 dark:border-zinc-900">News</button>
            <button onClick={() => handleNavClick('publications')} className="text-left text-lg font-medium text-zinc-600 dark:text-zinc-400 py-3 border-b border-zinc-100 dark:border-zinc-900">Publications</button>
            <button onClick={() => handleNavClick('home', 'projects')} className="text-left text-lg font-medium text-zinc-600 dark:text-zinc-400 py-3 border-b border-zinc-100 dark:border-zinc-900">Projects</button>
            <button onClick={() => handleNavClick('blog')} className="text-left text-lg font-medium text-zinc-600 dark:text-zinc-400 py-3">Blog</button>
            <a 
              href={SOCIAL_LINKS.cv} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex justify-center items-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-medium"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};