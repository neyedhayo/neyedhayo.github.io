import React, { useState, useMemo } from 'react';
import { ArrowRight, FileText, Code, Globe } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

interface PublicationsProps {
  viewMode: 'preview' | 'full';
  onViewAll: () => void;
}

export const Publications: React.FC<PublicationsProps> = ({ viewMode, onViewAll }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract unique tags for filter
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PUBLICATIONS.forEach(pub => pub.tags.forEach(tag => tags.add(tag)));
    return ['All', ...Array.from(tags)];
  }, []);

  // Filter Logic
  const filteredPubs = useMemo(() => {
    if (viewMode === 'preview') {
      return PUBLICATIONS.filter(p => p.selected).slice(0, 3);
    }
    if (selectedTag === 'All') return PUBLICATIONS;
    return PUBLICATIONS.filter(p => p.tags.includes(selectedTag));
  }, [viewMode, selectedTag]);

  const isMe = (name: string) => name.toLowerCase().includes('samuel') || name.toLowerCase().includes('oyeneye');

  const getLinkIcon = (label: string) => {
    const lower = label.toLowerCase();
    if (lower.includes('pdf') || lower.includes('paper') || lower.includes('abstract')) return <FileText size={12} />;
    if (lower.includes('code') || lower.includes('github')) return <Code size={12} />;
    return <Globe size={12} />;
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Area */}
      <div className="flex flex-col mb-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold font-display tracking-tight text-zinc-900 dark:text-zinc-100">
            {viewMode === 'preview' ? 'Selected Publications' : 'Publications'}
          </h2>
          
          {viewMode === 'preview' && (
            <button 
              onClick={onViewAll}
              className="group flex items-center gap-2 text-sm font-semibold text-primary dark:text-primary-dark hover:text-primary-hover transition-colors font-display"
            >
              View Full List <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Filter Tags (Only in Full Mode) - Moved Below Header */}
        {viewMode === 'full' && (
          <div className="flex flex-wrap gap-2 mt-4">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all border ${
                  selectedTag === tag
                    ? 'bg-primary text-white border-primary dark:bg-primary-dark dark:border-primary-dark dark:text-zinc-900 shadow-lg shadow-primary/20'
                    : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid List */}
      <div className="flex flex-col gap-8">
        {filteredPubs.map((pub) => (
          <article 
            key={pub.id} 
            className="group relative flex flex-col md:flex-row gap-6 p-5 -mx-5 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-all duration-300 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800"
          >
            {/* Thumbnail */}
            <div className="shrink-0 w-full md:w-48 aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 shadow-sm group-hover:shadow-md transition-all">
              <img 
                src={pub.image} 
                alt={pub.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold font-display text-zinc-900 dark:text-zinc-50 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors mb-2 leading-snug">
                {pub.title}
              </h3>

              <div className="text-base text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    <span className={isMe(author) ? "text-primary dark:text-primary-dark font-bold" : ""}>
                      {author}
                    </span>
                    {i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <span className="text-zinc-500 dark:text-zinc-300 font-medium italic">
                  {pub.venue}
                </span>
                <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full"></span>
                <span className="text-zinc-400 font-mono">
                  {pub.year}
                </span>
              </div>

              {/* Links & Tags */}
              <div className="mt-auto flex items-center justify-between gap-4">
                 <div className="flex gap-3">
                    {pub.links.map(link => (
                      <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:border-primary hover:text-primary dark:hover:text-primary-dark dark:hover:border-primary-dark transition-colors shadow-sm"
                      >
                        {getLinkIcon(link.label)} {link.label}
                      </a>
                    ))}
                 </div>
                 
                 {/* Only show first 2 tags on preview to save space */}
                 <div className="hidden md:flex gap-2">
                    {pub.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold bg-zinc-100 dark:bg-zinc-800/50 px-2 py-1 rounded-sm">
                            {tag}
                        </span>
                    ))}
                 </div>
              </div>
            </div>
          </article>
        ))}

        {filteredPubs.length === 0 && (
            <div className="text-center py-12 text-zinc-500 dark:text-zinc-400 italic">
                No publications found for this category.
            </div>
        )}
      </div>
    </div>
  );
};