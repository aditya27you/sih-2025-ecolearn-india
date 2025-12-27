import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/components/templates/MainLayout';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Modules } from './pages/Modules';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'modules',
        element: <Modules />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
