import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">{children}</main>
    </div>
  </div>
);

export default MainLayout;
