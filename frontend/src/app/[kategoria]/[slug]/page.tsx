import { notFound } from 'next/navigation';
import { categoriesList } from '@/data/categories';
import { getPost } from '@/lib/api';
import PostPageClient from '../PostPageClient';


interface PostPageParams  {
 slug: string;
 kategoria: string;
};

async function PostPageContent({ params }: { params: PostPageParams })  {
 const { slug, kategoria } = params;
 try {
   const category = categoriesList.find(cat => cat.slug === kategoria);
   if (!category) {
     notFound();
   }
   const post = await getPost(slug);
   if (!post) {
     notFound();
   }
   return <PostPageClient post={post} category={category} />;
 } catch (error) {
   console.error('Error loading post:', error);
   return (
     <div className="min-h-screen flex items-center justify-center text-red-600">
       Błąd: Nie można załadować danych postu
     </div>
   );
 }
}

export default function PostPage(props: { params: PostPageParams })  {
 return (
     <PostPageContent {...props} />
 );
}