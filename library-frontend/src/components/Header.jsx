const Header = () => {
  return (
    <header class="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
      <div class="text-2xl font-bold">
        <a href="#" class="hover:text-indigo-200">
          LibraryHub
        </a>
      </div>
      <div class="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search books..."
          class="p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button class="bg-indigo-700 hover:bg-indigo-800 p-2 rounded-md">
          Search
        </button>
        <div class="relative">
          <button class="flex items-center space-x-2 hover:text-indigo-200">
            <span>User</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg hidden">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">
              My Books
            </a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
