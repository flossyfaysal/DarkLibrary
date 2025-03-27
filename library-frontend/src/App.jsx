import { useState, useEffect } from "react";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import { mockBooks } from "./data/books";

// Next tasks:
// 1. Apply pagination.
// 2. Apply sorting and filtering
// 3. Sort all featured books based on the number of times they have been borrowed.
// 4. Display the Featured books page.
// 5. Display only 16 books per page per row 4 books and then pagination.
// 6. Add a loader on header, and when the user loads more books on the books home page, it shows next 16 books loading.

function App() {
  const [allBooks, setAllBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : mockBooks;
  }); // Full dataset with updates

  const [displayBooks, setDisplayBooks] = useState(allBooks); // Filtered for display
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const booksPerPage = 16;

  const currentPage = parseInt(searchParams.get("page") || 1, 10);

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
    setSearchParams({ page: "1" });
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

  const setCurrentPage = (page) => {
    setSearchParams({ page: page.toString() });
  };

  // Pagination Logic
  const indexOfLastBook = currentPage * booksPerPage; // 16
  const indexOfFirstBook = indexOfLastBook - booksPerPage; // 0
  const currentBooks = displayBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(displayBooks.length / booksPerPage);

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
                books={currentBooks}
                onBorrow={handleBorrow}
                onReturn={handleReturn}
                onShowDetails={handleShowDetails}
                searchTerm={searchTerm}
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
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
