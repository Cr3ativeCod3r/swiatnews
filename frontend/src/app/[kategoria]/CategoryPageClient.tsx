'use client';

import { CategoryPageClientProps } from '@/types/category';
import PostsProvider  from '@/components/Category/PostsProvider';
import FilterSection from '@/components/Category/FilterSection';
import NewsListContainer from '@/components/Category/NewsListContainer';
import CategoryPageFooter from '@/components/Category/CategoryPageFooter';

export default function CategoryPageClient({ 
  currentCategory, 
  initialPosts, 
  kategoria,
  currentPage = 1,
  totalItems,
  pageSize,
}: CategoryPageClientProps) {
  return (
    <div className='bg-white dark:bg-gray-950 pb-12'>
    <PostsProvider 
      initialPosts={initialPosts}
      kategoria={kategoria}
      initialPage={currentPage}
      initialTotalItems={totalItems}
      pageSize={pageSize}
    >
      <div className="container mx-auto lg:px-4 sm: px-1 py-8 ">
        <FilterSection categoryName={currentCategory.name} />
        <div className='min-h-[50vh]'>
        <NewsListContainer />
        </div>
        <CategoryPageFooter pageSize={pageSize} categorySlug={kategoria} /> 
      </div>
    </PostsProvider>
    </div>
  );
}