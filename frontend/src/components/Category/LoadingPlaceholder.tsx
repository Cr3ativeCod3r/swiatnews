
function LoadingPlaceholder() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg h-64 animate-pulse">
            <div className="bg-gray-200 h-32 rounded mb-4"></div>
            <div className="bg-gray-200 h-4 rounded mb-2 w-3/4"></div>
            <div className="bg-gray-200 h-4 rounded mb-2 w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  export default LoadingPlaceholder;