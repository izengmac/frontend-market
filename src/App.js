import './App.css';
import React, {useState} from 'react';
import Home from './pages_klient/Home';
import Buy_1 from './pages_klient/Buy_1';
import Cart_edit from './pages_klient/Cart_edit';
import Cart_product from './pages_klient/Cart_product';
import Cart from './pages_klient/Cart';
import Login from './pages_klient/Login';
import Catalog from './pages_klient/Catalog';
import Delivery from './pages_klient/Deliver';
import Favorites from './pages_klient/Favorites';
import PersonalDetails from './pages_klient/PersonalDetails';
import RecoverPassword from './pages_klient/RecoverPassword';
import Registration from './pages_klient/Registration';
import PersonalDetailsSuppliers from './pages-suppliers/PersonalDetailsSuppliers';
import InformationDetailsSuppliers from './pages-suppliers/InformationDetailsSupplier'
import PersonalDetailsAdmin from './pages_admin/PersonalDetailsAdmin';
import OrderDetailsAdmin from './pages_admin/OrderDetailsAdmin';
import OrdersAdmin from './pages_admin/OrdersAdmin';



import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';



const App = () => {
   const router = createBrowserRouter([
    {
      path: '/',
      element: <InformationDetailsSuppliers/>,
      children: [],
    },
    {
      path: '/Buy_1',
      element: <Buy_1/>,
      children: [],
    },
    {
      path: '/Cart_edit',
      element: <Cart_edit/>,
      children: [],
    },
    {
      path: '/Cart_product',
      element: <Cart_product/>,
      children: [],
    },
    {
      path: '/Cart',
      element: <Cart/>,
      children: [],
    },
    {
      path: '/Home',
      element: <Home/>,
      children: [],
    },
    {
      path: '/Catalog',
      element: <Catalog/>,
      children: [],
    },
    {
      path: '/Delivery',
      element: <Delivery/>,
      children: [],
    },
    {
      path: '/favorites',
      element: <Favorites/>,
      children: [],
    },
    {
      path: '/PersonalDetails',
      element: <PersonalDetails/>,
      children: [],
    },
    {
      path: '/RecoverPassword',
      element: <RecoverPassword/>,
      children: [],
    },
    {
      path: '/Registration',
      element: <Registration/>,
      children: [],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;