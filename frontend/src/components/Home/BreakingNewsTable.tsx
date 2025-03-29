'use client';

import { BreakingNewsItem } from '@/types/post';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface BreakingNewsDisplayProps {
  breakingNews: BreakingNewsItem;
}

const BreakingNewsTable: React.FC<BreakingNewsDisplayProps> = ({ breakingNews }) => {
  return (
    <div className="md:w-2/3 relative h-96">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <Image 
        src={`${process.env.NEXT_PUBLIC_API_IMAGE}${breakingNews.imageUrl}`}
        alt="img" 
        fill 
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 lg:p-6 sm: p-4 z-20 text-white">
        <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">PILNE</span>
        <Link href={`/${breakingNews.categorySlug}/${breakingNews.slug}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 hover:text-blue-300 transition-colors">
            {breakingNews.title}
          </h2>
        </Link>
        <p className="text-sm md:text-base mb-2 text-gray-200">{breakingNews.intro}</p>
        <div className="flex items-center text-sm">
          <span>{breakingNews.timeAgo}</span>
          <span className="mx-2">•</span>
          <Link href={`/${breakingNews.categorySlug}`} className="hover:text-blue-300 transition-colors">
            {breakingNews.category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTable;
