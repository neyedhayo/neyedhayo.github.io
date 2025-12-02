import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <div className="mb-24 animate-in fade-in duration-700">
      <div className="flex flex-col mb-12 pt-10 gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-display">
          Blog
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-2xl">
          Writing about machine learning systems, efficiency, and research.
        </p>
      </div>

      <div className="space-y-12 max-w-3xl">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer space-y-3">
            <div className="flex items-baseline justify-between border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <span className="text-sm font-mono text-zinc-400">{post.date}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors font-display">
              {post.title}
            </h3>
            
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {post.summary}
            </p>
            
            <div className="pt-2 flex items-center text-primary text-sm font-bold uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Read Post <ArrowRight size={14} className="ml-2" />
            </div>
          </article>
        ))}
        
        {BLOG_POSTS.length === 0 && (
           <div className="p-12 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-center">
             <Clock className="mx-auto mb-4 text-zinc-400" size={32} />
             <p className="text-zinc-500">Posts coming soon.</p>
           </div>
        )}
      </div>
    </div>
  );
};