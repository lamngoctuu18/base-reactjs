import { createRoute } from '@tanstack/react-router';
import { rootRoutes } from './routes';
import AdminLayout from '@components/layout/admin/AdminLayout';
import { homeRouteAdmin } from '@features/admin/routes/home.route';

const adminRoute = createRoute({
  getParentRoute: () => rootRoutes,
  path: '/admin',
  component: AdminLayout,
});

const adminTree = adminRoute.addChildren([homeRouteAdmin]);

export { adminTree, adminRoute };
