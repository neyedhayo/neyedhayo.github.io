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
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-zinc-900 dark:text-white">
              Samuel <span className="text-primary">Oyeneye</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
              Machine Learning Engineer and Researcher
            </p>
          </div>
          
          <div className="prose dark:prose-invert prose-zinc leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-none text-base space-y-6">
            <p>
              Hello! I am currently exploring community-driven research as an Independent Researcher at <a href="https://mlcollective.org/" className="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors">ML Collective</a> and <a href="https://cohere.com/research" className="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary transition-colors">Cohere Labs</a>, working on making modern AI more accessible by investigating ways to reduce the reliance on massive, unevenly distributed compute resources.
            </p>
            <p>
              My research focuses primarily on <strong className="text-zinc-800 dark:text-zinc-200">Privacy, ML Efficiency, Reasoning</strong>. This spans from quantifying the overhead of privacy-preserving techniques to investigating how to enhance reasoning capabilities within constrained environments. Additionally, I am exploring methods to optimize multimodal models, to ensure that their complex behaviors can run effectively on standard hardware and efficiently in deployments.
            </p>
            <p>
              When I'm not doing research or engineering, I enjoy <span className="text-zinc-700 dark:text-zinc-300 font-medium">listening to music and podcasts, watching anime, learning Japanese, and hitting the gym</span> (still need more development here!).
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
              src="/assets/img/samuel_with_poster_at_unilag_25 (4).jpg"
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