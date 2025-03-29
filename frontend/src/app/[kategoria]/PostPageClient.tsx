'use client';

import { NextSeo } from 'next-seo';
import ErrorMessage from '@/components/PostPage/ErrorMessage';
import PostMeta from '@/components/PostPage/PostMeta';
import PostHeader from '@/components/PostPage/PostHeader';
import ContentRenderer from '@/components/PostPage/ContentRenderer';
import TagList from '@/components/PostPage/TagList';
import { Post } from '@/types/post';
import Head from 'next/head';


export function generateJsonLd(post: Post) {
    return {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': post.title,
        'description': post.intro,
        'datePublished': post.publishedAt,
        'author': {
            '@type': 'Person',
            'name': post.author
        }
    }
}


export default function PostPageClient({ post, category }: { post: Post, category: { name: string } }) {
    if (!post) {
        return <ErrorMessage message="Nie znaleziono postu." />;
    }
    const jsonLd = generateJsonLd(post)


    const siteName = "World News";
    const postUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/${post.category.slug}/${post.slug}`;
    const coverImageUrl = post.cover_image.url || 'https://twojblog.pl/default-image.jpg';
    const description = post.intro || `Artykuł o ${post.title} w kategorii ${category.name}. Przeczytaj więcej na naszym blogu!`;
    const imageAlt = `${post.title} - ${category.name} - ${siteName}`;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />

            <div className="min-h-screen flex flex-col">
                <NextSeo
                    title={`${post.title} | ${siteName}`}
                    description={description}
                    canonical={postUrl}
                    openGraph={{
                        type: 'article',
                        locale: 'pl_PL',
                        site_name: siteName,
                        article: {
                            publishedTime: post.publication_date,
                            modifiedTime: post.updated_at || post.publication_date,
                            authors: post.author ? [`https://twojblog.pl/autor/${post.author.name}`] : [],
                            tags: post.tags.map(tag => tag.name),
                            section: category.name,
                        },
                        url: postUrl,
                        title: post.title,
                        description: description,
                        images: [
                            {
                                url: coverImageUrl,
                                width: 1200,
                                height: 630,
                                alt: imageAlt,
                            },
                        ],
                    }}
                    additionalMetaTags={[
                        {
                            name: 'keywords',
                            content: post.tags.map(tag => tag.name).join(', '),
                        },
                        {
                            name: 'author',
                            content: post.author?.name || siteName,
                        }
                    ]}
                />

                <Head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'BlogPosting',
                                headline: post.title,
                                image: [coverImageUrl],
                                datePublished: post.publication_date,
                                dateModified: post.updated_at || post.publication_date,
                                author: {
                                    '@type': 'Person',
                                    name: post.author?.name || siteName,
                                    url: post.author ? post.author.name : null
                                },
                                publisher: {
                                    '@type': 'Organization',
                                    name: siteName,
                                    logo: {
                                        '@type': 'ImageObject',
                                        url: `${process.env.NEXT_PUBLIC_DOMAIN}/seo.png`
                                    }
                                },
                                description: description,
                                mainEntityOfPage: {
                                    '@type': 'WebPage',
                                    '@id': postUrl
                                },
                                keywords: post.tags.map(tag => tag.name).join(', ')
                            })
                        }}
                    />
                </Head>

                <main className="container mx-auto py-8 flex-grow">
                    <article className="max-w-3xl mx-auto">
                        <PostMeta
                            author={post?.author?.name ? { name: post.author.name } : undefined}
                            date={post.publication_date}
                            category={category.name}
                            title={post.title}
                        />
                        <PostHeader
                            title={post.title}
                            coverImage={post.cover_image}
                            imageAuthor={post.image_author}
                        />
                        <ContentRenderer content={post.content} />
                        <TagList tags={post.tags.map(tag => ({ ...tag, id: tag.id.toString() }))} />
                    </article>
                </main>
            </div>
        </>
    );
}
