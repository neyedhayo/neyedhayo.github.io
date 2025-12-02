import React, { useState } from 'react';
import { Github, Twitter, Mail, Linkedin, GraduationCap, User } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Home = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="animate-in fade-in duration-700 mb-20">
      <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-zinc-900 dark:text-white">
              Samuel <span className="text-primary">Oyeneye</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
              Independent ML Researcher at <a href="https://mlcollective.org/" className="underline hover:text-primary transition-colors decoration-primary/50">ML Collective</a> & <br/>
              Machine Learning Researcher at <span className="text-zinc-900 dark:text-zinc-100 font-medium border-b-2 border-primary/50">Cohere Labs (Aya)</span>.
            </p>
          </div>
          
          <div className="prose dark:prose-invert prose-zinc leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-none text-lg">
            <p>
              As a Machine Learning Researcher, I find it impactful to reduce the high costs of sophisticated GPUs, which are unevenly
              distributed globally, while ensuring privacy. My interest lies in developing <strong>scalable, resource-efficient architectures</strong> that
              minimise the complexity of AI systems, with a focus on trustworthiness.
            </p>
            <p>
              This includes exploring human neural capabilities to design sensitive, aware, and efficient algorithmic methods.
              Previously, I completed my BSc at the Federal University of Agriculture, Abeokuta.
            </p>
          </div>

          <div className="flex gap-6 pt-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"><Github size={28} /></a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"><Twitter size={28} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"><Linkedin size={28} /></a>
            <a href={SOCIAL_LINKS.scholar} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"><GraduationCap size={28} /></a>
            <a href={SOCIAL_LINKS.email} className="text-zinc-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"><Mail size={28} /></a>
          </div>
        </div>

        <div className="relative group shrink-0 self-center md:self-start mt-2">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-xl opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
          
          {!imageError ? (
            <img 
              src="assets/img/Samuel_Oyeneye_Deepmind_Indaba25.jpg" 
              onError={() => setImageError(true)}
              alt="Samuel Oyeneye" 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-2xl"
            />
          ) : (
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-2xl flex items-center justify-center">
              <User className="w-24 h-24 text-zinc-300 dark:text-zinc-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};