import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookCard from "./components/BookCard";
import { mockBooks } from "./data/books";

function App() {
  const [books, setBooks] = useState(mockBooks);

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Books Listed
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.length ? (
              books.map((book) => <BookCard key={book.id} book={book} />)
            ) : (
              <p>No books available</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
