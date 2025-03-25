const BookCard = ({ book }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src="https://placehold.co/600x400"
          alt={`${book.title} Cover`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
          <p className="text-sm text-gray-600">{book.author}</p>
          <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Borrow
          </button>
        </div>
      </div>
    </>
  );
};

export default BookCard;
