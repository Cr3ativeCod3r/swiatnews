import {Category} from '@/types/category'

const CategoryHeader = ({ category, newsCount }: { category: Category | string, newsCount: number }) => {
    return (
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-red-600 ">
          {typeof category === 'string' ? category : category.name}
        </h1>
        <p className="text-gray-600 mt-2  dark:text-gray-300">
          {newsCount} {newsCount === 1 ? 'artykuł' : 
            newsCount % 10 >= 2 && newsCount % 10 <= 4 && (newsCount % 100 < 10 || newsCount % 100 >= 20) ? 
            'artykuły' : 'artykułów'}
        </p>
      </div>
    );
  };

  export default CategoryHeader;