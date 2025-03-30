import React from "react";
import BookCard from "../components/BookCard";
import SkeletonLoader from "../components/SkeletonLoader";

const Home = ({
  books,
  onBorrow,
  onShowDetails,
  onReturn,
  searchTerm,
  currentPage,
  setCurrentPage,
  totalPages,
  loading,
  sortOption,
  filterOption,
  onSort,
  onFilter,
}) => {
  return (
    <main className="flex-1 p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Books</h1>
        <div className="flex space-x-4">
          {/* Sort Dropdown */}
          <div className="relative w-full max-w-xs">
            <select
              value={sortOption}
              onChange={(e) => onSort(e.target.value)}
              className="w-full p-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:bg-gray-50 transition-colors duration-200 appearance-none cursor-pointer"
            >
              <option value="title-asc">Title A-Z</option>
              <option value="title-desc">Title Z-A</option>
              <option value="author-asc">Author A-Z</option>
              <option value="author-desc">Author Z-A</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          {/* Filter Dropdown */}
          <div className="relative w-full max-w-xs">
            <select
              value={filterOption}
              onChange={(e) => onFilter(e.target.value)}
              className="w-full p-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 hover:bg-gray-50 transition-colors duration-200 appearance-none cursor-pointer"
            >
              <option value="all">All Books</option>
              <option value="available">Available</option>
              <option value="borrowed">Borrowed</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.length > 0 ? (
            books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onBorrow={onBorrow}
                onReturn={onReturn}
                onShowDetails={onShowDetails}
              />
            ))
          ) : (
            <p className="text-gray-600 col-span-full">
              No books found matching "{searchTerm}".
            </p>
          )}
        </div>
      )}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center space-x-4">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-indigo-600 text-white rounded-mgpx-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
