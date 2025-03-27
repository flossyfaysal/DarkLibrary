import React from "react";
import BookCard from "../components/BookCard";

const Home = ({
  books,
  onBorrow,
  onShowDetails,
  onReturn,
  searchTerm,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <main className="flex-1 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Books</h1>
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
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
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
