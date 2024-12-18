import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@plantamera/home-page/ui';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  //   {
  //     path: '/about',
  //     element: <AboutPage />,
  //   },
  //   {
  //     path: '/projects',
  //     element: <ProjectsPage />,
  //   },
  //   {
  //     path: '/contact',
  //     element: <ContactPage />,
  //   },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
