import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4 flex-shrink-0">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin"
              className="block p-2 rounded-md hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/admin/featured-books"
              className="block p-2 rounded-md hover:bg-gray-700"
            >
              Featured Books
            </Link>
          </li>
          <li>
            <Link
              to="/admin/my-books"
              className="block p-2 rounded-md hover:bg-gray-700"
            >
              My Books
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reservations"
              className="block p-2 rounded-md hover:bg-gray-700"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className="block p-2 rounded-md hover:bg-gray-700"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
