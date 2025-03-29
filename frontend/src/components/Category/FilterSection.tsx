import React from 'react';
import CategoryHeader from './CategoryHeader';
import NewsFilter from './NewsFilter';
import { usePosts } from '@/hooks/usePosts';
import {Category} from '@/types/post'

function FilterSection({ categoryName }: { categoryName: Category | string;  }) {
    const { filter, setFilter, totalItems } = usePosts();
  
    return (
      <>
        <CategoryHeader category={categoryName} newsCount={totalItems} />
        <NewsFilter filter={filter} setFilter={setFilter} />
      </>
    );
  }
export default FilterSection;