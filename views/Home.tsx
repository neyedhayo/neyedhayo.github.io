import React, { useState } from 'react';
import { SOCIAL_LINKS, PUBLICATIONS, BLOG_POSTS } from '../constants';
import { PageTab } from '../components/Navbar';

interface HomeProps {
  onNavigate: (tab: PageTab) => void;
  onOpenPost: (postId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenPost }) => {
  const [imageError, setImageError] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    return localStorage.getItem('samuel_avatar_imbizo') || '/assets/img/profile.jpg';
  });

  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [expandedBibtex, setExpandedBibtex] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBibtex = (id: string) => {
    setExpandedBibtex(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyBibtex = (id: string, bibtex?: string) => {
    if (!bibtex) return;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Only display "Privacy Isn't Free" and "Secure and scalable" on the main home page
  const homePublications = PUBLICATIONS.filter(p => p.id === 'p1' || p.id === 'p2');

  return (
    <div className="space-y-8 pb-16 text-[#222222]">
      {/* Top Profile Section: Picture at LHS, Name & Bio at RHS */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center md:items-start pt-2">
        {/* LHS Avatar (circular) - clean static display, no hover or upload options for visitors */}
        <div className="w-[170px] h-[170px] shrink-0 rounded-full overflow-hidden shadow-xs ring-1 ring-black/10">
          {!imageError ? (
            <img
              src={avatarUrl}
              onError={() => {
                if (avatarUrl !== '/assets/img/samuel_with_poster_at_unilag_25 (4).jpg') {
                  setAvatarUrl('/assets/img/samuel_with_poster_at_unilag_25 (4).jpg');
                } else {
                  setImageError(true);
                }
              }}
              alt="Samuel Oyeneye"
              style={{ objectPosition: '50% 20%' }}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 font-serif text-2xl font-bold">
              SO
            </div>
          )}
        </div>

        {/* RHS Bio */}
        <div className="flex-1 space-y-3.5 text-[16.5px] leading-[1.65] text-[#222222]">
          <h1 className="text-[36px] sm:text-[38px] font-bold text-[#1a1a1a] tracking-tight leading-tight">
            Samuel Oyeneye
          </h1>

          <p>
            I am a Masters student in Mathematical Sciences at{' '}
            <a
              href="https://aims.ac.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c401c] font-normal hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors"
            >
              AIMS - Stellenbosch University
            </a>{' '}
            as a{' '}
            <a
              href="https://ai.aims.ac.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c401c] font-normal hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors"
            >
              Google DeepMind Scholar
            </a>, and an Independent Researcher at{' '}
            <a
              href="https://mlcollective.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c401c] font-normal hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors"
            >
              ML Collective. Previously, I was a Research Scholar at the{' '}
            <a
              href="https://imbizo.africa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0c401c] font-normal hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors"
            >
              Simons Computational Neuroscience Imbizo
            </a>, supervised by{' '}
            <a
              href="https://scholar.google.com/citations?user=U7NxV-MAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors"
            >
              Kira Düsterwald
            </a>,{' '}
            <a
              href="https://colleenjg.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors"
            >
              Colleen Gillon
            </a>{' '}
            and{' '}
            <a
              href="https://www.williamdorrell.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors"
            >
              Will Dorrell
            </a>.
          </p>

          <p>
            In recent times, my research focuses on unveiling the black box in Generative Language and Vision Models. I like to think that the fundamental steps to solve some of these crucial problems come from leveraging the cognitive and neural principles of neuroscientific representations, with a well-designed and scalable architecture that prioritises computational efficiency, hardware and safety mechanisms.
          </p>

          {/* Links Row */}
          <div className="pt-0.5 text-[15px] text-[#444444] flex flex-wrap items-center gap-y-1">
            <span>samueloyeneye1 at gmail.com</span>
            <span className="mx-2 text-zinc-400">·</span>
            <a
              href={SOCIAL_LINKS.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors font-medium"
            >
              Scholar
            </a>
            <span className="mx-2 text-zinc-400">·</span>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors font-medium"
            >
              GitHub
            </a>
            <span className="mx-2 text-zinc-400">·</span>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors font-medium"
            >
              LinkedIn
            </a>
            <span className="mx-2 text-zinc-400">·</span>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 rounded transition-colors font-medium"
            >
              X
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#e5e5e5] my-8" />

      {/* 2-Column Split: Publications on Left, Blog on Right */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Column: Publications */}
        <div className="w-full md:w-[63%] space-y-6">
          <div>
            <h2 className="text-[25px] font-serif italic text-[#1a1a1a] mb-1">
              Publications
            </h2>
            <p className="italic text-[#555] text-[15px] mb-5">
              For an up-to-date list, see my{' '}
              <a
                href={SOCIAL_LINKS.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#135a28] not-italic hover:bg-[#7FEE64] hover:text-black px-1 rounded font-medium underline decoration-[#7FEE64] decoration-2 underline-offset-2"
              >
                Google Scholar
              </a>.
            </p>
          </div>

          <div className="space-y-5">
            {homePublications.map(pub => {
              const primaryLink = pub.links.find(l =>
                l.label.toLowerCase().includes('paper') ||
                l.label.toLowerCase().includes('pdf') ||
                l.label.toLowerCase().includes('arxiv') ||
                l.label.toLowerCase().includes('openreview')
              );
              const codeLink = pub.links.find(l => l.label.toLowerCase().includes('code'));
              const isAbstractOpen = !!expandedAbstracts[pub.id];
              const isBibtexOpen = !!expandedBibtex[pub.id];
              const isCopied = copiedId === pub.id;

              return (
                <article key={pub.id} className="space-y-1">
                  <h3 className="font-bold text-[17px] text-[#1a1a1a] leading-snug">
                    {pub.title}
                  </h3>

                  <div className="text-[15px] text-[#333] leading-normal">
                    {pub.authors.map((author, i) => (
                      <span key={i}>
                        <span>{author}</span>
                        {i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>

                  <div className="italic text-[14px] text-[#666]">
                    {pub.venue}
                  </div>

                  <div className="pt-0.5 flex flex-wrap items-center gap-2 text-[14px]">
                    {primaryLink && (
                      <a
                        href={primaryLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7FEE64]/20 text-[#135a28] hover:bg-[#7FEE64] hover:text-black border border-[#7FEE64]/60 px-1.5 py-0.5 rounded text-[13.5px] font-medium transition-colors"
                      >
                        [paper]
                      </a>
                    )}
                    {codeLink && (
                      <a
                        href={codeLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7FEE64]/20 text-[#135a28] hover:bg-[#7FEE64] hover:text-black border border-[#7FEE64]/60 px-1.5 py-0.5 rounded text-[13.5px] font-medium transition-colors"
                      >
                        [code]
                      </a>
                    )}
                    {pub.abstract && (
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="bg-[#7FEE64]/20 text-[#135a28] hover:bg-[#7FEE64] hover:text-black border border-[#7FEE64]/60 px-1.5 py-0.5 rounded text-[13.5px] font-medium transition-colors"
                      >
                        [abstract]
                      </button>
                    )}
                    {pub.bibtex && (
                      <button
                        onClick={() => toggleBibtex(pub.id)}
                        className="bg-[#7FEE64]/20 text-[#135a28] hover:bg-[#7FEE64] hover:text-black border border-[#7FEE64]/60 px-1.5 py-0.5 rounded text-[13.5px] font-medium transition-colors"
                      >
                        [bibtex]
                      </button>
                    )}
                  </div>

                  {/* Inline Abstract */}
                  {isAbstractOpen && pub.abstract && (
                    <div className="mt-2 text-[14.5px] text-[#333] bg-[#fcfaf7] border-l-3 border-[#7FEE64] pl-3 py-1.5 leading-relaxed font-sans">
                      {pub.abstract}
                    </div>
                  )}

                  {/* Inline Bibtex */}
                  {isBibtexOpen && pub.bibtex && (
                    <div className="mt-2 relative text-xs font-mono text-zinc-800 bg-[#fcfaf7] border border-zinc-200 p-3 rounded overflow-x-auto">
                      <button
                        onClick={() => copyBibtex(pub.id, pub.bibtex)}
                        className="absolute top-2 right-2 text-xs bg-[#7FEE64] text-black font-semibold px-2 py-0.5 rounded hover:bg-[#6be050] transition-colors"
                      >
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>
                      <pre className="whitespace-pre">{pub.bibtex}</pre>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="pt-1">
            <button
              onClick={() => onNavigate('papers')}
              className="inline-flex items-center gap-1 text-[#135a28] text-[15px] hover:bg-[#7FEE64] hover:text-black px-2 py-0.5 rounded font-medium transition-colors"
            >
              <span>View all papers →</span>
            </button>
          </div>
        </div>

        {/* Right Column: Blog (Yona style) */}
        <div className="w-full md:w-[37%] space-y-5">
          <div>
            <h2 className="text-[25px] font-serif italic text-[#1a1a1a] mb-1">
              Blog
            </h2>
          </div>

          <ul className="space-y-4 list-none p-0 m-0">
            {BLOG_POSTS.map(post => (
              <li key={post.id} className="space-y-1">
                <button
                  onClick={() => onOpenPost(post.id)}
                  className="text-left text-[16px] text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1 -mx-1 rounded leading-snug block font-medium transition-colors"
                >
                  {post.title}
                </button>
                <time className="block text-[14px] text-[#666]">
                  {post.date}
                </time>
              </li>
            ))}
          </ul>

          <div className="pt-1">
            <button
              onClick={() => onNavigate('writings')}
              className="inline-flex items-center gap-1 text-[#135a28] text-[15px] hover:bg-[#7FEE64] hover:text-black px-1.5 py-0.5 rounded font-medium transition-colors"
            >
              <span>View all posts →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
