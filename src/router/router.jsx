import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/Auth/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/signIn",
        Component: SignIn,
      },
    ],
  },
]);
