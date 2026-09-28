import React, { useState, useEffect, useMemo } from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, ArrowUpRight, Clock, Share2, Check } from 'lucide-react';

interface BlogProps {
  initialPostId?: string | null;
}

export const Blog: React.FC<BlogProps> = ({ initialPostId }) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(initialPostId || null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialPostId) {
      setSelectedPostId(initialPostId);
    }
  }, [initialPostId]);

  const selectedPost = BLOG_POSTS.find(p => p.id === selectedPostId);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Group posts by year so year is in front on the left, and day/month at the side
  const groupedByYear = useMemo(() => {
    const map: Record<string, typeof BLOG_POSTS> = {};
    BLOG_POSTS.forEach(post => {
      const year = post.date.match(/\d{4}/)?.[0] || '2025';
      if (!map[year]) map[year] = [];
      map[year].push(post);
    });
    const sortedYears = Object.keys(map).sort((a, b) => Number(b) - Number(a));
    return sortedYears.map(year => ({ year, posts: map[year] }));
  }, []);

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

  // Full Essay Reading View
  if (selectedPost) {
    return (
      <div className="space-y-7 pb-16 text-[#222222] max-w-2xl mx-auto">
        <div>
          <button
            onClick={() => setSelectedPostId(null)}
            className="inline-flex items-center gap-1.5 text-[15px] text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-2 py-0.5 rounded font-medium transition-colors mb-5 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to all writings</span>
          </button>

          <h1 className="text-[32px] sm:text-[36px] font-normal text-[#1a1a1a] tracking-tight leading-tight">
            {selectedPost.title}
          </h1>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-[#777]">
            <span className="font-palatino font-serif text-[#777]">{selectedPost.date}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> 6 min read
            </span>
            <span aria-hidden="true">·</span>
            <span>Samuel Oyeneye</span>
          </div>

          <div className="mt-4 pt-3 border-t border-[#e5e5e5] flex items-center justify-between text-[13px]">
            <div className="flex gap-2">
              {selectedPost.tags.map(tag => (
                <span key={tag} className="text-black bg-[#7FEE64]/30 border border-[#7FEE64]/60 px-2 py-0.5 rounded font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-[#666] hover:bg-[#7FEE64]/30 hover:text-black px-2 py-0.5 rounded transition-colors"
              >
                {copiedLink ? <Check size={13} className="text-[#135a28]" /> : <Share2 size={13} />}
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>

              {selectedPost.link && (
                <a
                  href={selectedPost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#7FEE64] text-black font-semibold px-2 py-0.5 rounded hover:bg-[#6be050] transition-colors"
                >
                  <span>Medium</span>
                  <ArrowUpRight size={11} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Essay Body */}
        <div className="space-y-5 text-[16.5px] leading-[1.7] text-[#222222] border-t border-[#e5e5e5] pt-5">
          <h2 className="text-[22px] font-normal text-[#1a1a1a] pt-3">
            1. The Problem of Centralized Secrets
          </h2>
          <p>
            In modern distributed networks, cryptographic key management represents an existential single point of failure. Whether managing validator signing keys, database encryption master secrets, or multi-party compute nodes, storing a private key on a single host invites catastrophic physical and side-channel exposure.
          </p>
          <p>
            Threshold cryptography addresses this dilemma by eliminating the single point of failure. Instead of custodying a secret <em>S</em> in one place, <em>S</em> is split among <em>n</em> participants such that any subset of at least <em>k</em> participants (the threshold) can reconstruct or compute with the secret, while any subset of fewer than <em>k</em> learns strictly zero information.
          </p>

          <h2 className="text-[22px] font-normal text-[#1a1a1a] pt-3">
            2. Shamir's Secret Sharing: The Polynomial Foundation
          </h2>
          <p>
            Adi Shamir's landmark 1979 construction leverages elementary polynomial interpolation over finite fields. A polynomial of degree <em>k - 1</em>:
          </p>
          <div className="p-3.5 bg-[#fcfaf7] border border-[#e2e2e2] rounded font-mono text-sm text-center text-[#222] overflow-x-auto">
            {"f(x) = a₀ + a₁x + a₂x² + ... + a_{k-1}x^{k-1} (mod p)"}
          </div>
          <p>
            The secret is embedded into the constant term: <em>a₀ = S</em>. The dealer samples random coefficients <em>a₁, ..., a_{'{'}k-1{'}'}</em> and evaluates the polynomial at distinct points <em>x = 1, 2, ..., n</em>. Each participant <em>i</em> receives the share <em>(i, f(i))</em>.
          </p>
          <p>
            Given any <em>k</em> distinct shares <em>(x_j, y_j)</em>, Lagrange interpolation uniquely reconstructs <em>f(0)</em>:
          </p>
          <div className="p-3.5 bg-[#fcfaf7] border border-[#e2e2e2] rounded font-mono text-sm text-center text-[#222] overflow-x-auto">
            {"S = f(0) = Σ [ y_j · ℓ_j(0) ], where ℓ_j(0) = Π [ -x_m / (x_j - x_m) ]"}
          </div>

          <h2 className="text-[22px] font-normal text-[#1a1a1a] pt-3">
            3. Verifiable Secret Sharing (VSS) and Distributed Key Generation (DKG)
          </h2>
          <p>
            Standard Shamir assumes an honest dealer. What if a malicious dealer distributes inconsistent shares? <strong>Feldman's Verifiable Secret Sharing (VSS)</strong> publishes homomorphic commitments, allowing each player to verify their share against the commitments without revealing the share itself.
          </p>
          <div className="p-3.5 bg-[#fcfaf7] border border-[#e2e2e2] rounded font-mono text-sm text-center text-[#222] overflow-x-auto">
            {"g^{f(i)} == Π (C_m)^{i^m} for m=0 to k-1"}
          </div>
          <p>
            To eliminate the dealer entirely, <strong>Distributed Key Generation (Pedersen DKG)</strong> runs <em>n</em> parallel instances of VSS, where every node contributes to the collective master key without any single party ever knowing the secret <em>S</em>.
          </p>

          <h2 className="text-[22px] font-normal text-[#1a1a1a] pt-3">
            4. Applications in the dcipher Network
          </h2>
          <p>
            The dcipher Network operationalizes threshold cryptography for privacy-preserving verifiable compute. By combining DKG with threshold BLS signatures and threshold decryption, nodes can collaboratively decrypt task payloads and sign verifiable state transitions only after reaching consensus—without exposing client inputs to any single operator.
          </p>

          <div className="pt-6 border-t border-[#e5e5e5] flex items-center justify-between">
            <button
              onClick={() => setSelectedPostId(null)}
              className="inline-flex items-center gap-1.5 text-[15px] text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-2 py-0.5 rounded font-medium transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to all writings</span>
            </button>

            {selectedPost.link && (
              <a
                href={selectedPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-[#7FEE64] text-black font-semibold px-2.5 py-1 rounded hover:bg-[#6be050] transition-colors"
              >
                <span>Read on Medium</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // List of Writings
  return (
    <div className="space-y-7 pb-16 text-[#222222]">
      {/* Header */}
      <div className="space-y-2">
        <div>
          <h1 className="text-[32px] sm:text-[36px] font-bold text-[#1a1a1a] font-mono tracking-tight inline-block">
            .yLog
          </h1>
        </div>
        <p className="italic text-[#555] text-[15.5px]">
          logging Yuta&apos;s Arc on machine learning systems, efficiency, interpretability, AI Safety and anything fun
        </p>
      </div>

      {/* Writings List with Year in front and Date at the side */}
      <div className="space-y-6 pt-4">
        {groupedByYear.map(({ year, posts }) => (
          <div
            key={year}
            className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-start py-3 border-b border-[#e5e5e5]/60 last:border-0"
          >
            {/* Year in front — green highlight badge */}
            <div className="w-20 sm:w-24 shrink-0 select-none">
              <span className="bg-[#7FEE64] text-black font-bold px-2.5 py-0.5 rounded text-[16px] sm:text-[17px] border border-black/10 shadow-xs inline-block font-mono tracking-tight leading-snug">
                {year}
              </span>
            </div>

            {/* Posts */}
            <div className="flex-1 w-full min-w-0 space-y-4">
              {posts.map(post => {
                const sideDate = formatSideDate(post.date, year);

                return (
                  <article key={post.id} className="space-y-1.5">
                    <div className="flex items-baseline justify-between gap-4">
                      <button
                        onClick={() => setSelectedPostId(post.id)}
                        className="text-[17.5px] text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1.5 py-0.5 -mx-1.5 -my-0.5 rounded text-left leading-snug font-medium transition-colors"
                      >
                        {post.title}
                      </button>

                      {/* Date at the side */}
                      <span className="text-[15.5px] text-[#777] font-palatino font-serif font-normal leading-snug shrink-0 whitespace-nowrap">
                        {sideDate}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px]">
                      <button
                        onClick={() => setSelectedPostId(post.id)}
                        className="bg-[#7FEE64]/20 text-[#135a28] hover:bg-[#7FEE64] hover:text-black border border-[#7FEE64]/60 px-2.5 py-0.5 rounded text-[12.5px] font-medium transition-colors"
                      >
                        Read essay →
                      </button>
                      <span aria-hidden="true" className="text-zinc-300">·</span>
                      <span className="text-[13px] text-[#777]">6 min read</span>
                      {post.link && (
                        <>
                          <span aria-hidden="true" className="text-zinc-300">·</span>
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-[#135a28] hover:bg-[#7FEE64] hover:text-black px-1.5 py-0.5 rounded font-medium transition-colors"
                          >
                            <span>Medium</span>
                            <ArrowUpRight size={11} />
                          </a>
                        </>
                      )}
                    </div>
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
