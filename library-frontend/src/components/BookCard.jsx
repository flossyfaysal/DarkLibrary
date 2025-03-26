const BookCard = ({ book, onBorrow, onShowDetails, onReturn }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src={book.cover}
          alt={`${book.title} Cover`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2
            className="text-lg font-semibold text-gray-800 cursor-pointer hover:underline"
            onClick={() => onShowDetails(book)}
          >
            {book.title}
          </h2>
          <p className="text-sm text-gray-600">{book.author}</p>
          {book.available ? (
            <button
              onClick={() => onBorrow(book.id)}
              className="mt-2 px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Borrow
            </button>
          ) : (
            <button
              onClick={() => onReturn(book.id)}
              className="mt-2 px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Return
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BookCard;
