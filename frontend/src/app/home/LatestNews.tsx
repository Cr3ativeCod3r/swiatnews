import { getLatestNews } from '@/lib/api';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { NewsItem, MappedNewsItem } from '@/types/post';

import NewsList from '@/components/Home/NewsList';


async function LatestNewsContent() {
 try {
   const response = await getLatestNews(5);
   if (!response) {
     throw new Error('Brak odpowiedzi');
   }
   if (!response.data) {
     throw new Error('Brak pola data w odpowiedzi');
   }
   const news = response.data;
   const mappedNews: MappedNewsItem[] = news.map((item: NewsItem) => {
     return {
       id: item.id,
       title: item.title,
       category: 'Ogólne',
       slug: item.slug,
       categorySlug: item.category.slug,
       time: item.publication_date ? format(new Date(item.publication_date), 'd MMM yyyy', { locale: pl }) : 'Brak daty',
     };
   });
   return <NewsList news={mappedNews} />;
 } catch (error) {
   console.error('Błąd:', error);
   return (
     <div className="p-4 text-red-500">
       Nie udało się pobrać najnowszych wiadomości
     </div>
   );
 }
}

export default function LatestNews() {
 return (
     <LatestNewsContent />
 );
}