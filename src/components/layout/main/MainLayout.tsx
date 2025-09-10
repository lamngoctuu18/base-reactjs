import Header from '@components/headers/Header';
import Sidebar from '@components/sidebars/Sidebar';
import { Outlet } from '@tanstack/react-router';

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  </div>
);

export default MainLayout;
