import { type BlocksContent } from '@strapi/blocks-react-renderer';

export interface Post {
    id: number;
    documentId: string;
    publication_date: string;
    publishedAt: string;
    title: string;
    title_slug: string;
    content: BlocksContent;
    image_author: string;
    cover_image: CoverImage[];
    category: Category;
    tags: Tag[];
    categorySlug: string;
    slug: string;
    intro: string;
    author?: {
        name?: string;
        avatar?: string;
    };
}

export interface Author {
    id: number;
    documentId: string;
    name: string;
    bio: string;
}

export interface Category {
    id: number;
    documentId: string;
    name: string;
    slug: string;
}

export interface Tag {
    id: number;
    documentId: string;
    name: string;
}

export interface CoverImage {
    id: number;
    documentId: string;
    name: string;
    url: string;
    formats: {
        small: {
            url: string;
        };
        thumbnail: {
            url: string;
        };
    };
}


export interface BreakingNewsItem {
  id: number;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  slug: string;
  imageUrl: string;
  time: string;
  timeAgo: string;
  intro?: string;
}

export interface NewsItem {
    id: number;
    title: string;
    slug: string;
    category: {
      slug: string;
    };
    publication_date?: string;
  }

export interface MappedNewsItem {
    id: number;
    title: string;
    category: string;
    slug: string;
    categorySlug: string;
    time: string;
  }
export interface PostPageParams  {
    slug: string;
    kategoria: string;
  };