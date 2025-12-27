import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/components/templates/MainLayout';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { AuthLayout } from '@/components/templates/AuthLayout';
import { LearningLayout } from '@/components/templates/LearningLayout';
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
  {
    path: '/learn',
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
    path: '*',
    element: <NotFound />,
  },
]);
