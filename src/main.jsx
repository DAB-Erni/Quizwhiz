import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Examiner from './components/Examiner.jsx'
import Examinee from './components/Examinee.jsx'
import Admin from './components/Admin.jsx'
import Users from './components/Users.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/examiner",
    element: <Examiner />,
  },
  {
    path: "/examinee",
    element: <Examinee />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/user",
    element: <Users />,
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);