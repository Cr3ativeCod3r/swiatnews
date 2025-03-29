import { Post} from './post';
import { type BlocksContent } from '@strapi/blocks-react-renderer';

export interface PostsData {
    data: Post[];
    meta?: {
      pagination?: {
        total: number;
      }
    };
  }

  export interface CategoryPageClientProps {
    currentCategory: {
      name: string;
      slug: string;
    };
    initialPosts: PostsData;
    kategoria: string;
    currentPage: number;
    totalItems: number;
    pageSize: number;
    intro?: string;
  }

export interface PostsContextType {
    posts: PostsData;
    setPosts: (posts: PostsData) => void;
    filter: string;
    setFilter: (filter: string) => void;
    sortBy: 'date' | 'title';
    setSortBy: (sortBy: 'date' | 'title') => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    isLoading: boolean;
    totalItems: number;
    filteredNews: Post[];
  }
  

 export interface News {
      title: string;
      content: BlocksContent;
      intro: string;
      slug: string;
      publication_date?: string;
      publishedAt?: string;
      category?: {
          slug?: string;
          name: string;
      };
      cover_image?: Array<{ url: string; alternativeText?: string }> | null;
  }

  export interface Category {
    id: number;
    name: string;
    slug: string;
  }