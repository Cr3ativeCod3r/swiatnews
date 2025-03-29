import React, {ReactNode, useEffect, useState, createContext} from 'react';
import { useSearchParams } from 'next/navigation'; 
import { getCategoryPosts } from '@/lib/api';
import { PostsData } from '@/types/category';
import { PostsContextType } from '@/types/category';

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

function PostsProvider({ 
    children, 
    initialPosts, 
    kategoria,
    initialPage = 1,
    initialTotalItems,
    pageSize
  }: { 
    children: ReactNode;
    initialPosts: PostsData;
    kategoria: string;
    initialPage?: number;
    initialTotalItems?: number;
    pageSize: number;
  }) {
    const searchParams = useSearchParams();
    const pageParam = searchParams.get('page');
    
    const [filter, setFilter] = useState<string>('');
    const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
    const [posts, setPosts] = useState<PostsData>(initialPosts);
    const [currentPage, setCurrentPage] = useState<number>(pageParam ? parseInt(pageParam) : initialPage);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const totalItems = initialTotalItems || posts?.meta?.pagination?.total || 0;
  
    useEffect(() => {
      if (pageParam) {
        const pageFromUrl = parseInt(pageParam);
        if (pageFromUrl !== currentPage) {
          setCurrentPage(pageFromUrl);
        }
      }
    }, [pageParam, currentPage]);
  
    useEffect(() => {
      if (!pageParam) {
        setPosts(initialPosts);
      }
    }, [initialPosts, pageParam]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true);
        try {
          const result = await getCategoryPosts(kategoria, currentPage, pageSize);
          setPosts(result);
        } catch (error) {
          console.error("Error fetching posts:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchPosts();
    }, [currentPage, kategoria, pageSize]);
  

    useEffect(() => {
      if (!filter) return;
      
      const fetchFilteredPosts = async () => {
        setIsLoading(true);
        try {
          const result = await getCategoryPosts(kategoria, 1, 100); 
          setPosts(result);
        } catch (error) {
          console.error("Error fetching filtered posts:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchFilteredPosts();
    }, [filter, kategoria]);

    const filteredNews = posts?.data
      ? posts.data
          .filter((post) => {
            if (!filter) return true;
            return post.title.toLowerCase().includes(filter.toLowerCase());
          })
          .sort((a, b) => {
            if (sortBy === 'date') {
              return (
                new Date(b.publication_date || b.publishedAt || 0).getTime() -
                new Date(a.publication_date || a.publishedAt || 0).getTime()
              );
            } else {
              return a.title.localeCompare(b.title);
            }
          })
      : [];
  
    return (
      <PostsContext.Provider value={{
        posts,
        setPosts,
        filter,
        setFilter,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
        isLoading,
        totalItems,
        filteredNews,
      }}>
        {children}
      </PostsContext.Provider>
    );
  }

export default PostsProvider;