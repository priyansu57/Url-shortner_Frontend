import React from 'react';


import { createBrowserRouter } from "react-router-dom";
import UrlShortener from "../routes/url";
import App from "../App";
import LoginForm from "../routes/Auth/LoginForm";
import RegisterForm from "../routes/Auth/Registerlogin";
import Checker_user  from "../routes/Auth/Cheker";
import ProtectedRoute from "../routes/Auth/Cheker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       {
        path: "/",
        element: (
          <ProtectedRoute>
            <UrlShortener />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create",
        element: (
          <ProtectedRoute>
            <UrlShortener />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/me",
        element: <Checker_user />,
      }
    ]
  }
]);

export default router;
