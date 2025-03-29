import React from 'react';
import NewsCard from '@/components/Category/NewsCard';
import { usePosts } from '@/hooks/usePosts';

function NewsListContainer() {
  const { isLoading, filteredNews } = usePosts();

  if (isLoading) {
    return null;
  }

  if (filteredNews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-xl text-gray-700 mb-4">Brak wiadomości w tej kategorii</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
      {filteredNews.map((post) => (
        <NewsCard key={post.id} news={post} />
      ))}
    </div>
  );
}
export default NewsListContainer;