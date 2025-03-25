import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookCard from "./components/BookCard";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import { mockBooks } from "./data/books";

function App() {
  const [allBooks, setAllBooks] = useState(mockBooks); // Full dataset with updates
  const [displayBooks, setDisplayBooks] = useState(mockBooks); // Filtered for display
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredBooks = allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
    );
    setDisplayBooks(filteredBooks);
  };

  // Handle borrowing
  const handleBorrow = (bookId) => {
    const updatedBooks = allBooks.map((book) =>
      book.id === bookId && book.available
        ? { ...book, available: false }
        : book
    );
    setAllBooks(updatedBooks);
    setDisplayBooks((prev) =>
      prev.map((book) =>
        book.id === bookId && book.available
          ? { ...book, available: false }
          : book
      )
    );
    const borrowedBook = allBooks.find((b) => b.id === bookId);
    if (borrowedBook) {
      alert(`You have borrowed "${borrowedBook.title}"!`);
    } else {
      alert("Book not found!");
    }
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Header onSearch={handleSearch} />
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Home books={displayBooks} onBorrow={handleBorrow} />}
          />
          <Route path="/my-books" element={<MyBooks books={allBooks} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
