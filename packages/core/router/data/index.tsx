import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignupPage } from '@plantamera/signup-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignupPage />,
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
