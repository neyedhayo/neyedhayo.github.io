import React from 'react';
import { ArrowRight, Clock, ExternalLink } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <div className="mb-24 animate-in fade-in duration-700">
      <div className="flex flex-col mb-12 pt-10 gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-display">
          distributed.mind <span className="text-primary">blog</span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed max-w-2xl">
          Writing about machine learning systems, efficiency, cryptography, privacy and research experiences.
        </p>
      </div>

      <div className="space-y-12 max-w-3xl">
        {BLOG_POSTS.map((post) => {
          const ArticleWrapper = post.link ? 'a' : 'article';
          const wrapperProps = post.link ? {
            href: post.link,
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {};

          return (
            <ArticleWrapper
              key={post.id}
              className="group cursor-pointer block"
              {...wrapperProps}
            >
              <div className="flex flex-col md:flex-row gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                {/* Content Section */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-mono text-zinc-400">{post.date}</span>
                    {post.link && (
                      <div className="flex items-center gap-1 text-xs text-zinc-400 group-hover:text-primary transition-colors">
                        <ExternalLink size={12} />
                        <span className="hidden group-hover:inline">Read on Medium</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors font-display">
                    {post.title}
                  </h3>

                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="pt-2 flex items-center text-primary text-sm font-bold uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {post.link ? 'Read on Medium' : 'Read Post'} <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>

                {/* Thumbnail Section */}
                {post.thumbnail && (
                  <div className="shrink-0 w-full md:w-48 aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 shadow-sm group-hover:shadow-md transition-all">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                )}
              </div>
            </ArticleWrapper>
          );
        })}

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