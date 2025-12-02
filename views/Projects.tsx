import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Projects
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative flex flex-col bg-white dark:bg-[#0f0f0f] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/50 dark:hover:border-primary-dark/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary-dark/5"
          >
            {/* Top Bar Decoration */}
            <div className="h-1.5 w-full bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500"></div>
            
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                  <Github className="text-zinc-700 dark:text-zinc-300 group-hover:text-primary dark:group-hover:text-primary-dark" size={24} />
                </div>
                
                <a 
                  href={project.links[0]?.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 text-zinc-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 text-[11px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 rounded-md border border-zinc-100 dark:border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};