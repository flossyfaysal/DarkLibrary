import React from "react";
import BookCard from "../components/BookCard";

const MyBooks = ({ books }) => {
  const borrowedBooks = books.filter((book) => !book.available);
  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {borrowedBooks.length > 0 ? (
          borrowedBooks.map((book) => (
            <BookCard key={book.id} book={book} onBorrow={() => {}} /> // No borrow action here
          ))
        ) : (
          <p className="text-gray-600 col-span-full">
            You haven’t borrowed any books yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyBooks;
