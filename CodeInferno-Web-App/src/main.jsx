import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import MainPage from './pages/SlashPage.jsx'
import SignUpPage from './pages/SignupPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <div><p>Error rendering LoginPage.</p></div>
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <div><p>Error rendering SignUpPage.</p></div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
);
