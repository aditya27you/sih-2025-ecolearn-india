import { createBrowserRouter } from 'react-router';
import App from './App';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Modules } from './pages/Modules';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
