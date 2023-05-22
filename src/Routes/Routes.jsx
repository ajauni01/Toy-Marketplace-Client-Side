
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";
import SignUp from "../SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
    errorElement: <ErrorPage></ErrorPage>,
  },


]);

export default router;
