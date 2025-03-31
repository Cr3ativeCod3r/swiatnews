'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import { pl } from 'date-fns/locale';
import Image from 'next/image';
import { News } from '@/types/category';

const NewsCard: React.FC<{ news: News }> = ({ news }) => {
    const router = useRouter();
    if (!news) return null;
    const { title, intro, slug, publication_date, publishedAt, category, cover_image } = news;
    const publishDate = publication_date || publishedAt;

    const formattedDate = publishDate
        ? formatDistanceToNow(new Date(publishDate), { addSuffix: true, locale: pl })
        : '';

    const handleCardClick = () => {
        router.push(`/${category?.slug || 'kategoria'}/${slug}`);
    };

    const coverImage = Array.isArray(cover_image) ? cover_image[0] : null;
    const coverImageUrl = coverImage?.url
        ? `${process.env.NEXT_PUBLIC_API_IMAGE}${coverImage.url}`
        : null;

    return (
        <div
            className="bg-white dark:bg-slate-900 dark:text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-102 hover:shadow-lg cursor-pointer"
            onClick={handleCardClick}
        >
            {coverImageUrl && (
                <Image
                    src={coverImageUrl}
                    alt={coverImage?.alternativeText || title}
                    width={640}
                    height={360}
                    className="w-full h-[220px] object-cover"
                    priority
                />
            )}
            <div className="p-5 flex flex-col h-auto">
                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-3">
                        {category && (
                            <span className="bg-red-100 dark:bg-slate-600 dark:text-white  text-red-600 text-xs font-medium px-2.5 py-0.5 rounded">
                                {category.name}
                            </span>
                        )}
                        <span className="text-xs text-gray-500">{formattedDate}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
                    <div className="text-gray-600 mb-4 line-clamp-3">
                        {intro}
                    </div>
                </div>
                <div className="text-right">
                    {slug && (
                        <Link href={`/${category?.slug || 'kategoria'}/${slug}`} onClick={(e) => e.stopPropagation()}>
                            <span className="text-red-600 hover:text-red-700 font-medium">
                                Czytaj więcej →
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;