export interface Post {
    id: number;
    documentId: string;
    publication_date: string;
    title: string;
    slug: string;
    image_author: string | null;
    content: Array<{
        type: string;
        children: Array<{
            text: string;
            type?: string;
            bold?: boolean;
        }>;
    }>;
    intro: string;
    breaking_news: boolean | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface AuthorPostsProps {
    posts: Post[];
    authorName: string;
    currentPage: number;
}
