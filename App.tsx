import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { News } from './views/News';
import { Projects } from './views/Projects';
import { Publications } from './views/Publications';
import { Blog } from './views/Blog';

export type ViewState = 'home' | 'publications' | 'blog';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-300 font-sans">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main className="flex-grow pt-32 px-6 w-full max-w-4xl mx-auto">
        {view === 'home' && (
          <div className="space-y-32">
            <section id="home" className="scroll-mt-32">
              <Home />
            </section>

            <section id="news" className="scroll-mt-32">
              <News />
            </section>

            <section id="publications-preview" className="scroll-mt-32">
              <Publications viewMode="preview" onViewAll={() => setView('publications')} />
            </section>

            <section id="projects" className="scroll-mt-32">
              <Projects />
            </section>
          </div>
        )}

        {view === 'publications' && (
           <div className="animate-in fade-in duration-500">
             <Publications viewMode="full" onViewAll={() => {}} />
           </div>
        )}

        {view === 'blog' && (
          <div className="animate-in fade-in duration-500">
            <Blog />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;