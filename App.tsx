import React, { useState, useEffect } from 'react';
import { Navbar, PageTab } from './components/Navbar';
import { Home } from './views/Home';
import { Publications } from './views/Publications';
import { Blog } from './views/Blog';
import { Footer } from './components/Footer';

const getInitialTab = (): PageTab => {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'papers' || hash === 'publications') return 'papers';
  if (hash === 'writings' || hash === 'blog' || hash === 'essays') return 'writings';
  return 'about';
};

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<PageTab>(getInitialTab);
  const [activePostId, setActivePostId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentTab(getInitialTab());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setCurrentTab(tab);
    if (tab !== 'writings') {
      setActivePostId(null);
    }
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPost = (postId: string) => {
    setActivePostId(postId);
    setCurrentTab('writings');
    window.location.hash = 'writings';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fffdfa] text-[#222222] font-palatino selection:bg-[#7FEE64] selection:text-black antialiased">
      <div className="max-w-[880px] mx-auto px-6 sm:px-8 flex flex-col min-h-screen">
        <Navbar
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
        />

        <main className="flex-1 pt-1">
          {currentTab === 'about' && (
            <div className="animate-in fade-in duration-200">
              <Home
                onNavigate={handleSelectTab}
                onOpenPost={handleOpenPost}
              />
            </div>
          )}

          {currentTab === 'papers' && (
            <div className="animate-in fade-in duration-200">
              <Publications onBackToHome={() => handleSelectTab('about')} />
            </div>
          )}

          {currentTab === 'writings' && (
            <div className="animate-in fade-in duration-200">
              <Blog
                initialPostId={activePostId}
                onBackToHome={() => handleSelectTab('about')}
              />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
