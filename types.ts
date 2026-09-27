export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  description: string;
  abstract?: string;
  bibtex?: string;
  links: {
    url: string;
    label: string;
  }[];
  tags: string[];
  image?: string;
  selected?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  thumbnail?: string;
  link?: string;
}
