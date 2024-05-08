import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div />,
    errorElement: <div />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <div><p>Error rendering LoginPage.</p></div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
);
