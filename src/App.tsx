import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import ErrorBoundary from '@components/common/ErrorBoundary';
import { router } from '@routes/routes';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
