import * as React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx'
import MainPage from './pages/PublicMainPage.jsx'
import SignUpPage from './pages/SignupPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import DashBoardPage from './pages/DashboardPage.jsx';
import TestPage from './pages/TestPage.jsx';
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import { BoxCSSProvider } from './components/createAccountPage/boxProps.jsx';
// import router from './routes/routeList.jsx';

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
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <div><p>Error rendering ProfilePage</p></div>
  },
  {
    path: "/dashboard",
    element: <DashBoardPage />,
    errorElement: <div><p>Error rendering DashBoardPage</p></div>
  },
  {
    path: '/createaccount',
    element: <CreateAccountPage />,
    errorElement: <div><p>Error rendering Account Creation Page</p></div>
  },
  {
    path: '/test',
    element: <TestPage />,
    errorElement: <div><p>How the hell do u mess up the testing page XD</p></div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxCSSProvider>
      <RouterProvider router={router} />      
    </BoxCSSProvider>
  </React.StrictMode>,
);
