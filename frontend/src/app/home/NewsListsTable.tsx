import { CategoryNews, CategoryNewsData } from '@/components/Home/CategoryNews';
import CategoryNewsTable from '@/components/Home/CategoryNewsTable';
import { categoriesList } from '@/data/categories';



async function CategoryNewsContent() {
 const newsPromises = categoriesList.map(async (category) => {
   const newsData = await CategoryNews({ category: category.name });
   return newsData ? { category, newsData } : null;
 });

 const newsResults = await Promise.all(newsPromises);
 const validNews = newsResults.filter(
   (news): news is { category: typeof categoriesList[0]; newsData: CategoryNewsData } => news !== null
 );

 return (
   <section className="py-12 dark:bg-gray-950">
     <div className="container mx-auto lg:px-4 sm: px-0.5">
       <h2 className="text-2xl font-bold mb-8 lg:text-left sm: text-center">Kategorie wiadomości</h2>
       {validNews.length > 0 ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {validNews.map(({ category, newsData }) => (
             <CategoryNewsTable key={category.id} newsData={newsData} />
           ))}
         </div>
       ) : (
         <div className="text-center text-gray-500">
           Brak dostępnych wiadomości w kategoriach
         </div>
       )}
     </div>
   </section>
 );
}

export default function CategoryNewsList() {
 return (
     <CategoryNewsContent />
 );
}