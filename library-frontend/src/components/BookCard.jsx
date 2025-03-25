const BookCard = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src="https://via.placeholder.com/150x200"
          alt="Book Cover"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800">The Great Gatsby</h2>
          <p class="text-sm text-gray-600">F. Scott Fitzgerald</p>
          <button class="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Borrow
          </button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src="https://via.placeholder.com/150x200"
          alt="Book Cover"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800">1984</h2>
          <p class="text-sm text-gray-600">George Orwell</p>
          <button class="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
