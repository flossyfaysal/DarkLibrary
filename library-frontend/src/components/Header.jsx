import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch, onReset, searchTerm, setSearchTerm }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleInputChange = (e) => {
    const term = e.target.value;
    onSearch(term);
    setSearchTerm(term);
  };

  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/" onClick={onReset}>
          DarkLibrary
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search books..."
          className="p-2 rounded-md text-white-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <div className="relative">
          <button
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            className="flex items-center space-x-2 hover:text-indigo-200"
          >
            <span>User</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropDownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
              <Link
                to="/profile"
                className="block p-2 rounded-md hover:bg-gray-700"
              >
                Profile
              </Link>
              <Link
                to="/admin/my-books"
                className="block p-2 rounded-md hover:bg-gray-700"
              >
                My Books
              </Link>
              <Link
                to="/logout"
                className="block p-2 rounded-md hover:bg-gray-700"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
