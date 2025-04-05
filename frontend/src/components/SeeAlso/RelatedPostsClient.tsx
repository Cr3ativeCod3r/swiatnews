'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';
import { formatDate } from '@/utils/formatDate';
import { FaEye } from "react-icons/fa6";

export default function RelatedPostsClient({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="my-8 lg:w-[70vw] sm: w-full mx-auto">

      <span className='flex items-center sm: justify-center lg:justify-normal mb-6'>
        <h2 className="text-2xl font-bold  dark:text-white">Zobacz również</h2>
        <FaEye className='ml-2 text-2xl text-blue-500 mt-1' />
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-2 sm: gap-4 sm: mx-1 lg:mx-0">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow dark:border-slate-800">
            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_CLEAR}/${post.category.slug}/${post.slug}`}>
              <div className="relative h-48 w-full">
                {post.cover_image && post.cover_image[0].url ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}${post.cover_image[0].url}`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Brak obrazu</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 dark:text-white">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>{formatDate(post.publication_date)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category.name}</span>
                </div>
                {post.intro && (
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3 text-sm">{post.intro}</p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}