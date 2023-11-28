import React from "react";
import Signup from "./pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./layout/Protected";
import Feed from "./pages/Feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "",
        element: <Feed />,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signup />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
