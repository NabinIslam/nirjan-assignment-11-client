import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddArtifact from "../pages/AddArtifact";
import PrivateRoute from "./PrivateRoute";
import ArtifactDetails from "../pages/ArtifactDetails";
import AllArtifacts from "../pages/AllArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts";
import MyArtifacts from "../pages/MyArtifacts";

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
        path: "/artifact/:id",
        element: (
          <PrivateRoute>
            <ArtifactDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "/artifacts",
        element: (
          <PrivateRoute>
            <AllArtifacts />,
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
