const NewsFilter = ({ 
  filter, 
  setFilter, 
}: { 
  filter: string, 
  setFilter: (filter: string) => void, 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <div className="flex-grow md:mr-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Szukaj artykułów..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent  dark:bg-slate-900 dark:text-white dark:border-slate-600"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsFilter;