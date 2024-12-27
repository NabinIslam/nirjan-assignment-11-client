import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddArtifact from "../pages/AddArtifact";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoute>
            <AddArtifact />,
          </PrivateRoute>
        ),
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoute>
            <AddArtifact />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
