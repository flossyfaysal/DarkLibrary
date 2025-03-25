const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">
        <a href="#" className="hover:text-indigo-200">
          LibraryHub
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search books..."
          className="p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button className="bg-indigo-700 hover:bg-indigo-800 p-2 rounded-md">
          Search
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 hover:text-indigo-200">
            <span>User</span>
          </button>

          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg hidden">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              My Books
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
