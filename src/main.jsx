import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorPage from './Componets/ErrorPages/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componets/Root/Root';
import Home from './Componets/Home/Home';
import Statistics from './Componets/Statistics/Statistics';
import Dashboard from './Componets/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, 

    children: [

        {
          path:'/',
          element: <Home></Home>
        },

        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },

        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
