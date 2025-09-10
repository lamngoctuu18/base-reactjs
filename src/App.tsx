import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import ErrorBoundary from '@components/common/ErrorBoundary';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return <ErrorBoundary>{element}</ErrorBoundary>;
};

export default App;
