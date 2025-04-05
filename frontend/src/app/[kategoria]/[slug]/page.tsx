import { notFound } from 'next/navigation';
import { categoriesList } from '@/data/categories';
import { getPost } from '@/lib/api';
import { seeAlso } from '@/lib/api';
import PostPageClient from '../PostPageClient';
import { Metadata } from 'next';


interface PostPageParams {
  slug: string;
  kategoria: string;
}

export async function generateMetadata({ params }: { params: Promise<PostPageParams> }): Promise<Metadata> {
  const { slug, kategoria } = await params;  
  
  const post = await getPost(slug);
  if (!post) return { title: 'Nie znaleziono posta' };
  
  const category = categoriesList.find(cat => cat.slug === kategoria);
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN_CLEAR || 'https://swiatnews.pl';
  const postUrl = `${baseUrl}/${kategoria}/${slug}`;
  
  return {
    title: post.title,
    description: post.intro || 'Przeczytaj więcej na naszym blogu!',
    
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.intro || 'Przeczytaj więcej na naszym blogu!',
      url: postUrl,
      images: [
        {
          url: post.cover_image.url,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      siteName: 'Śwait News',
      locale: 'pl_PL',
      publishedTime: post.publishedAt || new Date().toISOString(),
      modifiedTime: post.updatedAt || new Date().toISOString(),
      authors: post.author ? [`${post.author.name}`] : undefined,
      tags: post.tags || [category?.name || ''],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.intro || 'Przeczytaj więcej na naszym blogu!',
      images: [post.cover_image.url],
      creator: post.author?.twitter || '@yourtwitter',
      site: '@yourtwitter',
    },
    
    alternates: {
      canonical: postUrl,
    },
    
    category: category?.name,
    keywords: post.tags?.join(', ') || category?.name || '',
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateJsonLd({ params }: { params: Promise<PostPageParams> }) {
  const { slug, kategoria } = await params;
  
  const post = await getPost(slug);
  if (!post) return null;
  
  const category = categoriesList.find(cat => cat.slug === kategoria);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com';
  const postUrl = `${baseUrl}/${kategoria}/${slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.intro || '',
    'image': post.cover_image.url,
    'author': {
      '@type': 'Person',
      'name': post.author?.name || 'Autor bloga',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Świat News',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/seo.png`,
      }
    },
    'datePublished': post.publishedAt || new Date().toISOString(),
    'dateModified': post.updatedAt || new Date().toISOString(),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    'keywords': post.tags?.join(', ') || category?.name || '',
    'articleSection': category?.name || '',
    'url': postUrl,
  };
}

async function PostPageContent({ params }: { params: Promise<PostPageParams> }) {
  const { slug, kategoria } = await params;

  const category = categoriesList.find(cat => cat.slug === kategoria);
  if (!category) notFound();

  const post = await getPost(slug);
  if (!post) notFound();
  
  const relatedPostsData = await seeAlso(slug);
  const jsonLd = await generateJsonLd({ params });

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      )}
      <PostPageClient post={post} category={category} relatedPosts={relatedPostsData?.data || []}/>
    </>
  );
}

export default function PostPage(props: { params: Promise<PostPageParams> }) {
  return <PostPageContent {...props} />;
}
