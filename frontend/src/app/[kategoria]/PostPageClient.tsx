'use client';

import ErrorMessage from '@/components/PostPage/ErrorMessage';
import PostMeta from '@/components/PostPage/PostMeta';
import PostHeader from '@/components/PostPage/PostHeader';
import ContentRenderer from '@/components/PostPage/ContentRenderer';
import TagList from '@/components/PostPage/TagList';
import { Post } from '@/types/post';
import { useEffect } from 'react';

export default function PostPageClient({ post, category }: { post: Post, category: { name: string } }) {
    useEffect(() => {
        if (post) {
            document.title = post.title;
        }
    }, [post]);

    if (!post) {
        return <ErrorMessage message="Nie znaleziono postu." />;
    }
    const domain = process.env.NEXT_PUBLIC_DOMAIN_CLEAR || 'https://swiatnews.pl';
    const postUrl = `${domain}/${post.category.slug}/${post.slug}`;


    return (
        <>
            <div className="min-h-screen flex flex-col">
                <main className="py-8 flex-grow bg-white dark:bg-slate-950">
                    <article className="max-w-3xl mx-auto">
                        <PostMeta
                            author={post?.author?.name ? { name: post.author.name } : undefined}
                            date={post.publication_date}
                            category={category.name}
                            title={post.title}
                            url={postUrl}
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