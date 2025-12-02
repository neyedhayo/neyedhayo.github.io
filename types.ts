import React from 'react';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  description: string;
  links: {
    url: string;
    label: string;
  }[];
  tags: string[];
  image?: string;
  selected?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    url: string;
    label: string;
  }[];
}

export interface NewsItem {
  id: string;
  date: string;
  content: React.ReactNode;
  link?: string;
  highlight?: boolean;
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