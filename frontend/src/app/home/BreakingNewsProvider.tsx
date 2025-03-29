import { getBreakingNews } from '@/lib/api';
import { BreakingNewsItem } from '@/types/post';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import BreakingNewsTable from '@/components/Home/BreakingNewsTable';
import { getTimeAgo } from '@/utils/getTimeAgo';



async function BreakingNewsContent() {
 try {
   const breakingNewsData = await getBreakingNews();

   if (!breakingNewsData) {
     return null;
   }

   const article: BreakingNewsItem = {
     id: breakingNewsData.id,
     title: breakingNewsData.title,
     description: breakingNewsData.description,
     category: breakingNewsData.category.name,
     categorySlug: breakingNewsData.category.slug,
     slug: breakingNewsData.slug,
     imageUrl: breakingNewsData.cover_image[0].url,
     time: breakingNewsData.publication_date
       ? format(new Date(breakingNewsData.publication_date), 'd MMM yyyy', { locale: pl })
       : 'Brak daty',
     timeAgo: getTimeAgo(breakingNewsData.publication_date)
   };
   return <BreakingNewsTable breakingNews={article} />;
 } catch (error) {
   console.error('Błąd podczas pobierania pilnych wiadomości:', error);
   return (
     <div className="text-red-600 text-center p-4">
       Błąd podczas pobierania pilnych wiadomości
     </div>
   );
 }
}

export async function BreakingNewsProvider() {
 return (
     <BreakingNewsContent />
 );
}