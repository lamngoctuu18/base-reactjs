import LoadingSpinner from '@components/common/LoadingSpinner';
import MainLayout from '@components/layout/MainLayout';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const NotFound = lazy(() => import('@pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Home />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <NotFound />
        </Suspense>
      </MainLayout>
    ),
  },
];

export default routes;
