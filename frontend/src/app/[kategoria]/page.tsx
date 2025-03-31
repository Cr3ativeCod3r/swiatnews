import { notFound } from 'next/navigation';
import { categoriesList } from '@/data/categories';
import { getCategoryPosts } from '@/lib/api';
import { PostPageParams } from '@/types/post';
import CategoryPageClient from './CategoryPageClient';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return categoriesList.map(category => ({
    kategoria: category.slug
  }));
}

export interface CategoryPageProps {
  page?: string;
}

export async function generateMetadata({ params }: { params: PostPageParams }): Promise<Metadata> {
  const { kategoria } = params;
  const currentCategory = categoriesList.find(cat => cat.slug === kategoria);
  
  if (!currentCategory) {
    return { title: 'Kategoria nie znaleziona' };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN_CLEAR || 'https://swiatnews.pl';
  const categoryUrl = `${baseUrl}/${kategoria}`;
  
  return {
    title: `${currentCategory.name} - Artykuły i posty`,
    description: `Przeglądaj artykuły w kategorii ${currentCategory.name} na naszym blogu.`,
    
    openGraph: {
      title: `${currentCategory.name} - Artykuły i posty`,
      description: `Przeglądaj artykuły w kategorii ${currentCategory.name} na naszym blogu.`,
      url: categoryUrl,
      siteName: 'Świat News',
      locale: 'pl_PL',
      type: 'website',
    },
    
    alternates: {
      canonical: categoryUrl,
    },
    
    robots: {
      index: true,
      follow: true,
    },
  };
}

async function CategoryPageContent({ params, searchParams }: {params: PostPageParams, searchParams: CategoryPageProps}) {
  const paramsData = await params;
  const { kategoria } = paramsData;
  const currentPage = Number(searchParams?.page || 1);
  const pageSize = Number(process.env.NEXT_PUBLIC_PAGE_SIZE);
  const currentCategory = categoriesList.find(cat => cat.slug === kategoria);

  if (!currentCategory) {
    notFound();
  }

  try {
    const posts = await getCategoryPosts(kategoria, currentPage, pageSize);
    const totalItems = posts?.meta?.pagination?.total || posts?.data?.length || 0;

    return (
      <CategoryPageClient
        currentCategory={currentCategory}
        initialPosts={posts}
        kategoria={kategoria}
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={pageSize}
      />
    );
  } catch (error) {
    console.error("Error loading category posts:", error);
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Błąd: Nie można załadować danych
      </div>
    );
  }
}

export default async function CategoryPage(props: {params: PostPageParams, searchParams: CategoryPageProps}) {
  return <CategoryPageContent {...props} />;
}