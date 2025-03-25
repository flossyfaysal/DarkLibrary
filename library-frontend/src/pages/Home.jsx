import React from "react";
import BookCard from "../components/BookCard";

const Home = ({ books, onBorrow }) => {
  return (
    <main className="flex-1 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} onBorrow={onBorrow} />
          ))
        ) : (
          <p className="text-gray-600 col-span-full">
            No books found matching "{searchTerm}".
          </p>
        )}
      </div>
    </main>
  );
};

export default Home;
