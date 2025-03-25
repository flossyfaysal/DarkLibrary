const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4 flex-shrink-0">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block p-2 rounded-md hover:bg-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded-md hover:bg-gray-700">
              Browse Books
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded-md hover:bg-gray-700">
              My Books
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded-md hover:bg-gray-700">
              Reservations
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded-md hover:bg-gray-700">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
