'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AuthorPostsProps } from "@/types/authorPosts";
import { formatDate } from "@/utils/formatDate";
import ContentRenderer from '@/components/PostPage/ContentRenderer'; // Import the ContentRenderer component

export default function AuthorPostsClient({ posts, user, currentPage }: AuthorPostsProps) {
  const totalPosts = posts.length;
  const pageSize = 10;
  const pageCount = Math.ceil(totalPosts / pageSize);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 bg-blue-50 border bordder-1 rounded-2xl sm: flex-col lg:flex-row">
        {user.avatar?.url && (
          <div className="h-24 w-24  sm: mt-2 lg:mt-0 lg:ml-4 sm: ml-0 rounded-full overflow-hidden border-2 border-blue-400">
            <Image 
              src={`${process.env.NEXT_PUBLIC_API_IMAGE}${user.avatar.url}`}
              alt={user.name} 
              width={120} 
              height={124}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className=' dark:text-black p-4 '>
          <h1 className="text-2xl font-bold ml-2">{user.name}</h1>
          {user.bio && <ContentRenderer content={user.bio} />}
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-600">Brak postów do wyświetlenia</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <div key={post.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden dark:text-white  dark:bg-slate-800 flex flex-col">
                <div className="p-4 flex-1">
                  <p className="text-gray-500 text-sm mb-2 dark:text-gray-300">
                    {formatDate(post.publication_date)}
                  </p>
                  <h2 className="text-xl font-semibold mb-2">
                    <Link href={`/post/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                    {post.intro}
                  </p>
                </div>
                <Link href={`/post/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium transition-colors mb-4 ml-4">
                  Czytaj więcej →
                </Link>
              </div>
            ))}
          </div>

          {pageCount > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              {currentPage > 1 && (
                <Link href={`/autor/${user.slug || user.id}?page=${currentPage - 1}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                  ← Poprzednia
                </Link>
              )}
              <span className="px-4 py-2">
                Strona {currentPage} z {pageCount}
              </span>
              {currentPage < pageCount && (
                <Link href={`/autor/${user.slug || user.id}?page=${currentPage + 1}`} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                  Następna →
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}