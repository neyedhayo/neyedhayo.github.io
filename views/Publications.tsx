import React, { useState, useMemo } from 'react';
import { PUBLICATIONS } from '../constants';
import { ArrowLeft, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { Publication } from '../types';

interface PublicationsProps {
  onBackToHome?: () => void;
}

export const Publications: React.FC<PublicationsProps> = ({ onBackToHome }) => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [expandedBibtex, setExpandedBibtex] = useState<Record<string, boolean>>({});
  const [expandedFigures, setExpandedFigures] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Group all publications by year in descending order
  const groupedByYear = useMemo(() => {
    const map: Record<string, Publication[]> = {};
    PUBLICATIONS.forEach(pub => {
      const year = pub.year || 'Other';
      if (!map[year]) map[year] = [];
      map[year].push(pub);
    });
    const sortedYears = Object.keys(map).sort((a, b) => Number(b) - Number(a));
    return sortedYears.map(year => ({ year, pubs: map[year] }));
  }, []);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBibtex = (id: string) => {
    setExpandedBibtex(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFigure = (id: string) => {
    setExpandedFigures(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyBibtex = (id: string, bibtex?: string) => {
    if (!bibtex) return;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-7 pb-16 text-[#222222]">
      {onBackToHome && (
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-[15px] text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-2 py-0.5 rounded font-medium transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to home</span>
        </button>
      )}

      {/* Header */}
      <div>
        <h1 className="text-[36px] sm:text-[38px] font-normal text-[#1a1a1a] tracking-tight leading-tight">
          Publications
        </h1>
      </div>

      {/* Publications by Year */}
      <div className="space-y-9 pt-2">
        {groupedByYear.map(({ year, pubs }) => (
          <section key={year} className="space-y-5">
            <h2 className="text-[21px] font-normal text-[#1a1a1a] border-b border-[#e5e5e5] pb-1">
              {year}
            </h2>

            <div className="space-y-5">
              {pubs.map(pub => {
                const isAbstractOpen = !!expandedAbstracts[pub.id];
                const isBibtexOpen = !!expandedBibtex[pub.id];
                const isFigureOpen = !!expandedFigures[pub.id];
                const isCopied = copiedId === pub.id;
                const primaryLink = pub.links.find(l =>
                  l.label.toLowerCase().includes('paper') ||
                  l.label.toLowerCase().includes('pdf') ||
                  l.label.toLowerCase().includes('openreview') ||
                  l.label.toLowerCase().includes('arxiv')
                );
                const codeLink = pub.links.find(l => l.label.toLowerCase().includes('code'));

                return (
                  <article key={pub.id} className="space-y-1">
                    {/* Title */}
                    <div>
                      <a
                        href={primaryLink ? primaryLink.url : '#'}
                        target={primaryLink ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-[17px] font-bold text-[#1a1a1a] hover:text-[#135a28] hover:bg-[#7FEE64]/20 px-1 -mx-1 rounded transition-colors inline-flex items-baseline gap-1 leading-snug"
                      >
                        <span>{pub.title}</span>
                        {primaryLink && (
                          <ArrowUpRight size={13} className="text-zinc-400 shrink-0 self-center" />
                        )}
                      </a>
                    </div>

                    {/* Authors */}
                    <div className="text-[15px] text-[#333]">
                      {pub.authors.map((author, index) => (
                        <span key={index}>
                          <span>{author}</span>
                          {index < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>

                    {/* Venue */}
                    <div className="italic text-[14px] text-[#666]">
                      {pub.venue}
                    </div>

                    {/* Links & Brackets */}
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
                      {pub.image && (
                        <button
                          onClick={() => toggleFigure(pub.id)}
                          className="inline-flex items-center gap-1 bg-[#7FEE64]/20 text-[#135a28] hover:bg-[#7FEE64] hover:text-black border border-[#7FEE64]/60 px-1.5 py-0.5 rounded text-[13.5px] font-medium transition-colors"
                        >
                          <ImageIcon size={12} />
                          <span>[figure]</span>
                        </button>
                      )}
                    </div>

                    {/* Abstract Box */}
                    {isAbstractOpen && pub.abstract && (
                      <div className="mt-2 text-[14.5px] text-[#333] bg-[#fcfaf7] border-l-3 border-[#7FEE64] pl-3 py-1.5 leading-relaxed font-sans">
                        <p>{pub.abstract}</p>
                      </div>
                    )}

                    {/* BibTeX Box */}
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

                    {/* Figure Preview */}
                    {isFigureOpen && pub.image && (
                      <div className="mt-2 max-w-md border border-zinc-200 rounded overflow-hidden bg-white p-2">
                        <img
                          src={pub.image}
                          alt={`${pub.title} figure`}
                          className="w-full h-auto object-contain rounded"
                        />
                        <div className="mt-1 text-[11px] text-zinc-500 font-sans text-center">
                          Figure: Systems evaluation from <em>{pub.title}</em>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
