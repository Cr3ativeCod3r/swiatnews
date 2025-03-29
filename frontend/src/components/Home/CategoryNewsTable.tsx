'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CategoryNewsData } from './CategoryNews';
import { categoryIcons } from '../../../public/icons/CategoryIcons';
import { categoriesList } from '@/data/categories';

interface NewsListProps {
  newsData: CategoryNewsData;
}

const CategoryNewsTable: React.FC<NewsListProps> = ({ newsData }) => {
  const { category, articles } = newsData;
  const categoryObj = categoriesList.find((cat) => cat.name === category);

  if (!categoryObj) {
    console.error(`Nieznana kategoria: ${category}`);
    return null;
  }

  const categorySlug = categoryObj.slug;
  const firstArticle = newsData.articles[0];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">

      <header className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight flex items-center">
          {categoryIcons[category] && (
            <span className="mr-2">{categoryIcons[category]}</span>
          )}
          {category}
        </h3>
        <Link
          href={`/${categorySlug}`}
          className="text-blue-600 dark:text-blue-400 text-xs font-semibold hover:underline"
        >
          Więcej›
        </Link>
      </header>

      {firstArticle?.cover_image[0].url && (
        <div className=" w-full h-48 relative">
          <Image 
            src={`${process.env.NEXT_PUBLIC_API_IMAGE}${firstArticle.cover_image[0].url}`} 
            alt={firstArticle.title} 
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {articles.length > 0 ? (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {articles.map((article) => (
            <li key={article.id} className="py-3">
              <Link
                href={`/${article.categorySlug}/${article.slug}`}
                className="block hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors px-2 py-1"
              >
                <div className="flex items-center">
                  {categoryIcons[article.category] && (
                    <span className="mr-2">{categoryIcons[article.category]}</span>
                  )}
                  <h4 className="font-bold text-base text-gray-800 dark:text-gray-200 line-clamp-2">
                    {article.title}
                  </h4>
                </div>
                <time className="text-xs text-gray-500 dark:text-gray-400">{article.time}</time>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 italic text-center">
          Brak aktualnych wiadomości w tej kategorii
        </p>
      )}
    </div>
  );
};

export default CategoryNewsTable;