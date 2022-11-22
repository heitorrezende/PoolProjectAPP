import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ErrorPage from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Question from "../pages/Question";
import Leaderboard from "../pages/Leaderboard";
import Navagation from "../components/Navagation";
import Home from "../pages/Home";
import App from "../pages/App";
import NewQuestion from "../pages/AddQuestion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/questions/:question_id",
        element: (
          <PrivateRoute>
            <Question />
          </PrivateRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: (
          <PrivateRoute>
            <Leaderboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <NewQuestion />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const CostumeRouter = () => {
  return (
    <div>
      <RouterProvider router={router}>
        <Navagation />
        <Outlet />
      </RouterProvider>
    </div>
  );
};

export default CostumeRouter;
