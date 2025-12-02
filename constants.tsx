import React from 'react';
import { Publication, NewsItem, BlogPost, Project } from './types';

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/Samuel0yeneye",
  github: "https://github.com/neyedhayo",
  scholar: "https://scholar.google.com/citations?user=IYpvbJQAAAAJ&hl=en",
  email: "mailto:samueloyeneye1@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-oyeneye/",
  cv: "/assets/cv/samuel_oyeneye_cv_2025_30_11.pdf"
};

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "RebusVLM",
    description: "An evaluation pipeline for understanding LLM reasoning capabilities through the lenses of Rebus puzzles. Benchmarking proprietary models (Gemini variants) to evaluate multi-step reasoning capabilities. Claude, GPT, and open-source models coming soon...",
    technologies: ["VLMs", "Reasoning", "Python", "Evaluation"],
    links: [
      { url: "https://github.com/neyedhayo/RebusvLMs", label: "GitHub" }
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Privacy Isn't Free: Benchmarking the Systems Cost of Privacy-Preserving ML",
    authors: ["Nnaemeka Obiefuna", "Samuel Oyeneye", "Similoluwa Odunaiya", "Iremide Oyelaja", "Steven Kolawole"],
    venue: "ICML 2025 (ES-FOMO)",
    year: "2025",
    description: "Developed PrivacyBench, a YAML framework benchmarking the privacy-utility-cost of PPML techniques on CNN and Transformer baselines on medical image datasets.",
    links: [
      { url: "https://openreview.net/pdf?id=2uMRHHzAIJ", label: "OpenReview" },
      { url: "https://github.com/Federated-Learning-MLC/PrivacyBench", label: "Code" }
    ],
    tags: ["Privacy", "Efficiency", "Systems", "Benchmarking"],
    selected: true,
    image: "/assets/thumbnails/figure1_tradeoffs_page-0001.jpg"
  },
  {
    id: "p2",
    title: "Secure and Scalable Horizontal Federated Learning for Bank Fraud Detection",
    authors: ["Nnaemeka Obeifuna*", "Samuel Oyeneye*", "et al."],
    venue: "ICLR Advances in Financial AI Workshop",
    year: "2025",
    description: "Designed HFL transformer architectures applied on the BAF-base dataset, outperforming majority techniques on the BAF comparison benchmark.",
    links: [
        { url: "https://www.researchgate.net/profile/Iremide-Oyelaja/publication/395206476_SECURE_AND_SCALABLE_HORIZONTAL_FEDERATED_LEARNING_FOR_BANK_FRAUD_DETECTION/links/68b7843dca495d7698321675/SECURE-AND-SCALABLE-HORIZONTAL-FEDERATED-LEARNING-FOR-BANK-FRAUD-DETECTION.pdf", label: "PDF" },
        { url: "https://github.com/Federated-Learning-MLC/loan-fintech-hfl", label: "Code" }
    ],
    tags: ["Federated Learning", "Transformers", "Security"],
    selected: true,
    image: "/assets/thumbnails/fedtransformer.png"
  },
  {
    id: "p3",
    title: "Effect of Domain Generalization Techniques in Low-Resource Systems",
    authors: ["Mahi Aliyu Aminu*", "Samuel Oyeneye*", "et al."],
    venue: "Under Review at EACL Student Research Workshop",
    year: "2026",
    description: "Investigating domain generalization techniques within resource-constrained environments.",
    links: [
        { url: "https://arxiv.org/pdf/2510.27512", label: "ArXiv" }
    ],
    tags: ["Domain Generalization", "Low-Resource", "Systems"],
    selected: true,
    image: "/assets/thumbnails/XLMr.png"
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "Aug 2025",
    content: (
      <span>
        Accepted to 🧠 <strong>Simons Computational Neuroscience Imbizo</strong> Summer School <span className="text-zinc-400 font-mono text-xs">(~5% success rate)</span>.
      </span>
    ),
    highlight: true
  },
  {
    id: "n2",
    date: "July 2025",
    content: (
      <span>
        🏆 Won <span className="text-primary font-bold dark:text-primary-dark">Best Poster Award</span> at Deep Learning Indaba.
      </span>
    ),
    highlight: true
  },
  {
    id: "n3",
    date: "Jun 2025",
    content: (
      <span>
        📝 <strong>Privacy Isn't Free</strong> paper accepted into <span className="text-zinc-800 dark:text-zinc-200 font-medium">ES-FOMO III Workshop</span> at ICML 2025.
      </span>
    ),
  },
  {
    id: "n4",
    date: "May 2025",
    content: (
      <span>
        🚀 Joined <span className="text-primary dark:text-primary-dark font-bold">Cohere Labs</span> (Aya Expedition Project) as a Machine Learning Researcher.
      </span>
    ),
  },
  {
    id: "n5",
    date: "Apr 2025",
    content: (
      <span>
        📄 <strong>Secure and Scalable HFL</strong> paper accepted into <span className="text-zinc-800 dark:text-zinc-200 font-medium">ICLR Advances in Financial AI Workshop</span>.
      </span>
    ),
  }
];

// NOTE: To add a new blog post, simply add a new object to this array below.
// Example:
// {
//   id: "b2",
//   title: "My New Post",
//   date: "August 2025",
//   summary: "Description here...",
//   tags: ["AI", "New"]
// }
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "From Polynomials to Distributed Secrets",
    date: "August 11, 2025",
    summary: "Understanding the Foundations of dcipher Network with Threshold Cryptography. This article explores Shamir's Secret Sharing, verifiable secret sharing (VSS), distributed key generation (DKG), and the dcipher Network's practical applications of threshold cryptography.",
    tags: ["Cryptography", "Security", "Threshold", "dcipher"],
    link: "https://medium.com/@samueloyeneye1/from-polynomials-to-distributed-secrets-be34568acc63"
  }
];