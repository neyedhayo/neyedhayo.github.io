import React, { useState, useMemo } from 'react';
import { PUBLICATIONS } from '../constants';
import { Image as ImageIcon } from 'lucide-react';
import { Publication } from '../types';

export const Publications: React.FC = () => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [expandedBibtex, setExpandedBibtex] = useState<Record<string, boolean>>({});
  const [expandedFigures, setExpandedFigures] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Group all publications by year in descending order, with within-year sorting
  const groupedByYear = useMemo(() => {
    const map: Record<string, Publication[]> = {};
    PUBLICATIONS.forEach(pub => {
      const year = pub.year || 'Other';
      if (!map[year]) map[year] = [];
      map[year].push(pub);
    });
    const sortedYears = Object.keys(map).sort((a, b) => Number(b) - Number(a));
    return sortedYears.map(year => {
      const sortedPubs = [...map[year]].sort((a, b) => {
        const timeA = a.date ? Date.parse(a.date) : 0;
        const timeB = b.date ? Date.parse(b.date) : 0;
        return timeB - timeA;
      });
      return { year, pubs: sortedPubs };
    });
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

  const formatSideDate = (dateStr?: string, currentYear?: string) => {
    if (!dateStr) return '';
    let clean = dateStr;
    if (currentYear) {
      clean = clean.replace(currentYear, '');
    }
    clean = clean.replace(/,/g, '').trim();
    // Capitalize only first letter of month/words, rest lowercase
    return clean.replace(/\b([A-Za-z])([A-Za-z]*)\b/g, (_, first, rest) => {
      return first.toUpperCase() + rest.toLowerCase();
    });
  };

  return (
    <div className="space-y-7 pb-16 text-[#222222]">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-[36px] sm:text-[38px] font-normal text-[#1a1a1a] tracking-tight leading-tight">
          Publications
        </h1>
        <p className="italic text-[#555] text-[15.5px]">
          research papers, preprints, and journals
        </p>
      </div>

      {/* Publications by Year — Charlie's blog style with Year on left and Date at side */}
      <div className="space-y-8 pt-2">
        {groupedByYear.map(({ year, pubs }) => (
          <div
            key={year}
            className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-start py-3 border-b border-[#e5e5e5]/60 last:border-0"
          >
            {/* Year in front — green highlight box like .yLog in writings */}
            <div className="w-20 sm:w-24 shrink-0 select-none">
              <span className="bg-[#7FEE64] text-black font-bold px-2.5 py-0.5 rounded text-[16px] sm:text-[17px] border border-black/10 shadow-xs inline-block font-mono tracking-tight leading-snug">
                {year}
              </span>
            </div>

            {/* Pubs list */}
            <div className="flex-1 w-full min-w-0 space-y-6">
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
                const sideDate = formatSideDate(pub.date, year);

                return (
                  <article key={pub.id} className="space-y-1.5 pb-2 border-b border-[#f0eee9] last:border-0">
                    {/* Title + Side Date (Horizontally aligned, muted normal serif date) */}
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[17px] font-bold text-[#1a1a1a] leading-snug">
                        {pub.title}
                      </h3>
                      {sideDate && (
                        <span className="text-[15.5px] text-[#777] font-palatino font-serif font-normal leading-snug shrink-0 whitespace-nowrap">
                          {sideDate}
                        </span>
                      )}
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
          </div>
        ))}
      </div>
    </div>
  );
};
