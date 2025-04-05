// app/autor/[autor]/page.tsx
import { Suspense } from 'react';
import { getPostsByAuthor } from '@/lib/api';
import AuthorPostsClient from '@/components/AuthorPosts/AuthorPostsClient';
import { notFound } from 'next/navigation';

interface AuthorPageProps {
  params: {
    autor: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function AuthorPage({ 
  params, 
  searchParams 
}: AuthorPageProps) {
  const authorName = params.autor;
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize = 10; 
  
  try {
    const postsData = await getPostsByAuthor(authorName, currentPage, pageSize);

    if (!postsData || postsData.length === 0) {
      return notFound();
    }
    
    return (

      <div className="container mx-auto px-4 py-8">
  
        
        <Suspense fallback={<div>Ładowanie postów...</div>}>
          <AuthorPostsClient 
            posts={postsData[0].posts} 
            user={postsData[0]}
            currentPage={currentPage}
          />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Error in author page:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Wystąpił błąd</h1>
        <p>Nie udało się pobrać postów dla autora: {authorName}</p>
      </div>
    );
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { autor: string } }) {
  const authorName = params.autor;
  
  return {
    title: `Posty autora: ${authorName}`,
    description: `Wszystkie posty napisane przez ${authorName}`,
  };
}