import React from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Programs from './pages/Programs/Programs';
import Exercises from './pages/Exercises/Exercises';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Programs />,
  },
  {
    path: '/exercises',
    element: <Exercises />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
