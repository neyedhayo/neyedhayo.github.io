import { Publication, BlogPost } from './types';

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/Samuel0yeneye",
  github: "https://github.com/neyedhayo",
  scholar: "https://scholar.google.com/citations?user=IYpvbJQAAAAJ&hl=en",
  email: "mailto:samueloyeneye1@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-oyeneye/",
  cv: "/assets/cv/SamuelOyeneye_CV.pdf"
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Privacy Isn't Free: Benchmarking the Systems Cost of Privacy-Preserving ML",
    authors: ["Nnaemeka Obiefuna*", "Samuel Oyeneye*", "Similoluwa Odunaiya", "Iremide Oyelaja", "Steven Kolawole"],
    venue: "ICML 2025 Workshop on Efficient Systems for Foundation Models (ES-FOMO III)",
    year: "2025",
    description: "Developed PrivacyBench, a systematic benchmarking framework evaluating the privacy-utility-cost tradeoffs of differential privacy and secure aggregation across CNN and Transformer architectures on medical imaging tasks.",
    abstract: "While privacy-preserving machine learning (PPML) techniques like Differential Privacy (DP) and Federated Learning (FL) provide formal privacy guarantees, their real-world systems overhead is often overlooked. We introduce PrivacyBench, a modular evaluation framework that systematically measures computational runtime, memory footprint, communication overhead, and downstream model accuracy under varying privacy budgets (ε). Our findings reveal non-trivial throughput degradation and highlight critical hardware bottlenecks for clinical deployments.",
    bibtex: `@inproceedings{obiefuna2025privacy,
  title={Privacy Isn't Free: Benchmarking the Systems Cost of Privacy-Preserving ML},
  author={Obiefuna, Nnaemeka and Oyeneye, Samuel and Odunaiya, Similoluwa and Oyelaja, Iremide and Kolawole, Steven},
  booktitle={ICML 2025 Workshop on Efficient Systems for Foundation Models (ES-FOMO)},
  year={2025}
}`,
    links: [
      { url: "https://openreview.net/pdf?id=2uMRHHzAIJ", label: "Paper" },
      { url: "https://github.com/Federated-Learning-MLC/PrivacyBench", label: "Code" }
    ],
    tags: ["Privacy", "Efficiency", "Systems Benchmarking", "PPML"],
    selected: true,
    image: "/assets/thumbnails/figure1_tradeoffs_page-0001.jpg"
  },
  {
    id: "p2",
    title: "Secure and Scalable Horizontal Federated Learning for Bank Fraud Detection",
    authors: ["Nnaemeka Obiefuna", "Iremide Oyelaja", "Similoluwa Odunaiya", "Samuel Oyeneye"],
    venue: "ICLR 2025 Workshop on Advances in Financial AI",
    year: "2025",
    description: "Architected a secure horizontal federated learning framework using tabular transformer models on the Bank Account Fraud (BAF) suite, outperforming traditional baselines under strict privacy and communication constraints.",
    abstract: "Detecting fraudulent transactions across financial institutions without exposing proprietary or personally identifiable customer records requires robust distributed learning paradigms. We implement a horizontally federated learning system coupled with transformer encoders tailored for tabular fraud detection. Our setup achieves superior detection rates on the Bank Account Fraud (BAF) benchmark while maintaining sub-linear communication overhead across decentralized silo nodes.",
    bibtex: `@inproceedings{obiefuna2025secure,
  title={Secure and Scalable Horizontal Federated Learning for Bank Fraud Detection},
  author={Obiefuna, Nnaemeka and Oyelaja, Iremide and Odunaiya, Similoluwa and Oyeneye, Samuel},
  booktitle={ICLR 2025 Advances in Financial AI Workshop},
  year={2025}
}`,
    links: [
      { url: "https://www.researchgate.net/profile/Iremide-Oyelaja/publication/395206476_SECURE_AND_SCALABLE_HORIZONTAL_FEDERATED_LEARNING_FOR_BANK_FRAUD_DETECTION/links/68b7843dca495d7698321675/SECURE-AND-SCALABLE-HORIZONTAL-FEDERATED-LEARNING-FOR-BANK-FRAUD-DETECTION.pdf", label: "Paper" },
      { url: "https://github.com/Federated-Learning-MLC/loan-fintech-hfl", label: "Code" }
    ],
    tags: ["Federated Learning", "Transformers", "Security", "Finance"],
    selected: true,
    image: "/assets/thumbnails/fedtransformer.png"
  },
  {
    id: "p3",
    title: "Effect of Domain Generalization Techniques in Low-Resource Systems",
    authors: ["Mahi Aminu*", "Chisom Chibuike*", "Fatimo Adebanjo*", "Omokolade Awosanya", "Samuel Oyeneye"],
    venue: "arXiv preprint",
    year: "2025",
    description: "Investigated invariance learning and parameter-efficient domain generalization techniques across resource-constrained NLP systems.",
    abstract: "Pretrained multilingual language models frequently fail to generalize across distribution shifts in under-resourced linguistic domains. This paper examines domain generalization methods—including invariant risk minimization and lightweight adapter adaptation—for low-resource NLP tasks. We identify specific failure modes under out-of-domain evaluation and propose compute-efficient adaptation strategies suitable for edge devices.",
    bibtex: `@article{aminu2025effect,
  title={Effect of Domain Generalization Techniques in Low-Resource Systems},
  author={Aminu, Mahi and Chibuike, Chisom and Adebanjo, Fatimo and Awosanya, Omokolade and Oyeneye, Samuel},
  journal={arXiv preprint arXiv:2510.27512},
  year={2025}
}`,
    links: [
      { url: "https://arxiv.org/pdf/2510.27512", label: "Paper (arXiv)" }
    ],
    tags: ["Domain Generalization", "Low-Resource", "Efficiency", "NLP"],
    selected: true,
    image: "/assets/thumbnails/XLMr.png"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "From Polynomials to Distributed Secrets",
    date: "August 2025",
    summary: "Understanding the Foundations of dcipher Network with Threshold Cryptography. This article explores Shamir's Secret Sharing, verifiable secret sharing (VSS), distributed key generation (DKG), and the dcipher Network's practical applications of threshold cryptography.",
    tags: ["Cryptography", "Security", "Threshold", "dcipher"],
    link: "https://medium.com/@samueloyeneye1/from-polynomials-to-distributed-secrets-be34568acc63",
    thumbnail: "/assets/thumbnails/threshold_cryptography.jpg"
  }
];
