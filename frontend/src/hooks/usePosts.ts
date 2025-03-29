import { useContext } from 'react';
import {PostsContext} from '@/components/Category/PostsProvider';

export function usePosts() {
    const context = useContext(PostsContext);
    if (context === undefined) {
      throw new Error('usePosts must be used within a PostsProvider');
    }
    return context;
  }


