"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const NewsItem: React.FC<{ title: string; category: string; time: string; categorySlug: string; slug: string }> = ({ title, category, time, categorySlug, slug }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${categorySlug}/${slug}`);
  };

  return (
    <div
      className="border-b border-gray-100 pb-3 last:border-0 cursor-pointer"
      onClick={handleClick}
    >
      <h4 className="font-medium text-gray-800 dark:text-white hover:text-red-600 transition mb-1">
        {title}
      </h4>
      <div className="flex items-center text-xs text-gray-500 dark:text-slate-300">
        <span>{time}</span>
        <span className="mx-2">•</span>
        <span>{category}</span>
      </div>
    </div>
  );
};

const NewsList: React.FC<{ news: { id: number; title: string; category: string; time: string; categorySlug: string; slug: string }[] }> = ({ news }) => {
  return (
    <div className="space-y-4">
      {news.map((item) => (
        <NewsItem
          key={item.id}
          title={item.title}
          category={item.category}
          time={item.time}
          categorySlug={item.categorySlug}
          slug={item.slug}
        />
      ))}
    </div>
  );
};

export default NewsList;