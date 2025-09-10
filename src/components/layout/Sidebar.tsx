import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <aside className="w-64 h-full bg-gray-100 dark:bg-gray-800 shadow">
    <nav className="flex flex-col p-4 space-y-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `py-2 px-4 rounded hover:bg-primary hover:text-white ${
            isActive ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-200'
          }`
        }
        end
      >
        Home
      </NavLink>
      {/* Add more NavLinks here */}
    </nav>
  </aside>
);

export default Sidebar;
