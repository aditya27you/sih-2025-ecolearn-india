import { createBrowserRouter } from 'react-router';
import App from './App';
import { MainLayout } from '@/components/templates/MainLayout';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { AuthLayout } from '@/components/templates/AuthLayout';
import { LearningLayout } from '@/components/templates/LearningLayout';
import { ProtectedRoute, GuestRoute } from '@/components/atoms/ProtectedRoute';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Modules } from './pages/Modules';
import { Challenges } from './pages/Challenges';
import { Leaderboard } from './pages/Leaderboard';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Lesson } from './pages/Lesson';
import { Quiz } from './pages/Quiz';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      // Protected Routes
      {
        element: <ProtectedRoute />,
        children: [
          {
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
              {
                path: 'challenges',
                element: <Challenges />,
              },
              {
                path: 'leaderboard',
                element: <Leaderboard />,
              },
            ],
          },
          {
            path: 'learn',
            element: <LearningLayout />,
            children: [
              {
                path: 'lesson/:id',
                element: <Lesson />,
              },
              {
                path: 'quiz/:id',
                element: <Quiz />,
              },
            ],
          },
        ],
      },
      // Guest Routes
      {
        element: <GuestRoute />,
        children: [
          {
            element: <AuthLayout />,
            children: [
              {
                path: 'login',
                element: <Login />,
              },
              {
                path: 'signup',
                element: <SignUp />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
