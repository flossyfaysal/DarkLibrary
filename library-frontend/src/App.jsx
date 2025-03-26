import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookCard from "./components/BookCard";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import { mockBooks } from "./data/books";

function App() {
  const [allBooks, setAllBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : mockBooks;
  }); // Full dataset with updates

  const [displayBooks, setDisplayBooks] = useState(allBooks); // Filtered for display
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(allBooks));
  }, [allBooks]);

  const applySearchFilter = (books, term) => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
    );
  };

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredBooks = applySearchFilter(allBooks, term);
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
    setDisplayBooks(applySearchFilter(updatedBooks, searchTerm));
    const borrowedBook = allBooks.find((b) => b.id === bookId);
    if (borrowedBook) {
      alert(`You have borrowed "${borrowedBook.title}"!`);
    } else {
      alert("Book not found!");
    }
  };

  const handleReturn = (bookId) => {
    const updatedBooks = allBooks.map((book) =>
      book.id === bookId && !book.available
        ? { ...book, available: true }
        : book
    );
    setAllBooks(updatedBooks);
    setDisplayBooks(applySearchFilter(updatedBooks, searchTerm));
    const returnedBook = allBooks.find((b) => b.id === bookId);
    if (returnedBook) {
      alert(`You have returned "${returnedBook.title}"!`);
    } else {
      alert("Book not found!");
    }
  };

  const handleShowDetails = (book) => setSelectedBook(book);
  const handleCloseModal = () => setSelectedBook(null);

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Header onSearch={handleSearch} />
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={displayBooks}
                onBorrow={handleBorrow}
                onReturn={handleReturn}
                onShowDetails={handleShowDetails}
                searchTerm={searchTerm}
              />
            }
          />
          <Route path="/my-books" element={<MyBooks books={allBooks} />} />
        </Routes>
      </div>
      {selectedBook && (
        <div className="fixed inset-0 bg-gray-800 opacity-75 flex items-center justify-center z-100">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedBook.title}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Author:</strong> {selectedBook.author}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Status:</strong>{" "}
              {selectedBook.available ? "Available" : "Borrowed"}
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
