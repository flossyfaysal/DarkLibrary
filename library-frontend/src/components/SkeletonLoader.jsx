const SkeletonLoader = () => {
  // Array of 16 skeleton cards to match booksPerPage
  const skeletonCards = Array(16).fill(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
          {/* Title Placeholder */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          {/* Author Placeholder */}
          <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
          {/* Button Placeholders */}
          <div className="flex space-x-2">
            <div className="h-8 bg-gray-300 rounded w-20"></div>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
