
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";
import SignUp from "../SignUp/SignUp";
import SingIn from "../SignIn/SingIn";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "signIn",
    element: <SingIn></SingIn>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "blogs",
    element: <Blogs></Blogs>,
    errorElement: <ErrorPage></ErrorPage>,
  },


]);

export default router;
