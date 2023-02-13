import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorPage from './pages/error_page';
import HomePage from './pages/home_page';
import Footer from './components/footer';
import HeaderWrapper from './components/wrappers/header_wrapper';
import MyTripsPage from './pages/my_trips_page';
import TicketListPage from './pages/ticket_list_page';
import LoginPage from './pages/login_page';
import CheckoutPage from './pages/checkout_page';
import { RecoilRoot } from 'recoil';
import RegisterPage from './pages/register_page';
import axios from 'axios';

const queryClient = new QueryClient();
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
console.log(BASE_URL);
axios.defaults.baseURL = BASE_URL;

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderWrapper />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/my-trips',
        element: <MyTripsPage />,
      },
      {
        path: '/tickets/:startDate/:endDate/:from/:to',
        element: <TicketListPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <>
          <RouterProvider router={router} />

          <Footer />
        </>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
