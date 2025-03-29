import { getCategoryPosts } from '@/lib/api';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { categoriesList } from '@/data/categories';
import { ApiResponseItem } from '@/types/api'


export interface NewsItem {
  id: number;
  title: string;
  category: string;
  slug: string;
  categorySlug: string;
  time: string;
  cover_image: {
    url: string;
  }[];
}

export interface CategoryNewsData {
  category: string;
  articles: NewsItem[];
  categories: string[];
}

export async function CategoryNews({
  category,
  page = 1,
  pageSize = 5,
}: {
  category: string;
  page?: number;
  pageSize?: number;
}) {
  const categoryObj = categoriesList.find((cat) => cat.name === category);

  if (!categoryObj) {
    console.warn(`Nieznana kategoria: ${category}`);
    return null;
  }

  const categorySlug = categoryObj.slug;

  try {
    const data = await getCategoryPosts(categorySlug, page, pageSize);

    if (!data?.data) {
      throw new Error('Brak danych w odpowiedzi API');
    }

    const articles: NewsItem[] = data.data.map((item: ApiResponseItem) => ({
      id: item.id,
      title: item.title,
      category: item.category?.name || 'Ogólne',
      slug: item.slug,
      cover_image: item?.cover_image,
      categorySlug: item.category?.slug || 'ogolne',
      time: item.publication_date
        ? format(new Date(item.publication_date), 'd MMM yyyy', { locale: pl })
        : 'Brak daty',
    }));

    const categories = [...new Set(articles.map((article) => article.category))];

    const newsData: CategoryNewsData = {
      category,
      articles,
      categories,
    };

    return newsData;
  } catch (error) {
    console.error(
      `Błąd podczas pobierania wiadomości dla kategorii ${category}:`,
      error
    );
    return null;
  }
}