import { useState, useEffect } from "react";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("title-asc");
  const [filterOption, setFilterOption] = useState("all");
  const booksPerPage = 16;
  const location = useLocation();

  const currentPage = parseInt(searchParams.get("page") || 1, 10);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(allBooks));
  }, [allBooks]);

  const resetHome = () => {
    setSearchTerm("");
    setSortOption("title-asc");
    setFilterOption("all");
    setDisplayBooks(allBooks);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      resetHome();

      const timer = setTimeout(() => {
        setLoading(false), 500;
      });
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLoading(false), 500;
      });
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const applySearchSortFilter = (books, term, sort, filter) => {
    let results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
    );

    // Filter
    if (filter === "available") {
      results = results.filter((book) => book.available);
    } else if (filter === "borrowed") {
      results = results.filter((book) => !book.available);
    }

    // Sort
    results.sort((a, b) => {
      if (sort === "title-asc") {
        return a.title.localeCompare(b.title);
      }
      if (sort === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      if (sort === "author-asc") {
        return a.author.localeCompare(b.author);
      }
      if (sort === "author-desc") {
        return b.author.localeCompare(a.author);
      }
    });

    return results;
  };

  // Handle search
  const handleSearch = (term) => {
    setLoading(true);
    setSearchTerm(term);
    setSearchParams({ page: "1" });
    const filteredBooks = applySearchSortFilter(
      allBooks,
      term,
      sortOption,
      filterOption
    );
    setTimeout(() => {
      setDisplayBooks(filteredBooks);
      setLoading(false);
    }, 500);
  };

  // Handle borrowing
  const handleBorrow = (bookId) => {
    const updatedBooks = allBooks.map((book) =>
      book.id === bookId && book.available
        ? { ...book, available: false }
        : book
    );
    setAllBooks(updatedBooks);
    setDisplayBooks(
      applySearchSortFilter(updatedBooks, searchTerm, sortOption, filterOption)
    );
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
    setDisplayBooks(
      applySearchSortFilter(updatedBooks, searchTerm, sortOption, filterOption)
    );
    const returnedBook = allBooks.find((b) => b.id === bookId);
    if (returnedBook) {
      alert(`You have returned "${returnedBook.title}"!`);
    } else {
      alert("Book not found!");
    }
  };

  const handleSorting = (sort) => {
    setLoading(true);
    setSortOption(sort);
    const sortedBooks = applySearchSortFilter(
      allBooks,
      searchTerm,
      sort,
      filterOption
    );
    setTimeout(() => {
      setDisplayBooks(sortedBooks);
      setLoading(false);
    }, 500);
  };
  const handleFiltering = (filter) => {
    setLoading(true);
    setFilterOption(filter);
    const filteredBooks = applySearchSortFilter(
      allBooks,
      searchTerm,
      sortOption,
      filter
    );
    setTimeout(() => {
      setDisplayBooks(filteredBooks);
      setLoading(false);
    }, 500);
  };

  const handleShowDetails = (book) => setSelectedBook(book);
  const handleCloseModal = () => setSelectedBook(null);

  const setCurrentPage = (page) => {
    setLoading(true);
    setSearchParams({ page: page.toString() });
    setTimeout(() => setLoading(false), 500);
  };

  // Pagination Logic
  const indexOfLastBook = currentPage * booksPerPage; // 16
  const indexOfFirstBook = indexOfLastBook - booksPerPage; // 0
  const currentBooks = displayBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(displayBooks.length / booksPerPage);

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Header
        onSearch={handleSearch}
        onReset={resetHome}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
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
                loading={loading}
                onSort={handleSorting}
                onFilter={handleFiltering}
                sortOption={sortOption}
                filterOption={filterOption}
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
