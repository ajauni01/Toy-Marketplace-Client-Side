
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";
import SignUp from "../SignUp/SignUp";
import SingIn from "../SignIn/SingIn";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "../Pages/PrivateRoute";
import AddToy from "../Pages/addToy";
import MyToys from "../Pages/MyToys";
import AllToys from "../Pages/AllToys";


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
  {
    path: "viewDetails/:id",
    element: <PrivateRoute> <ViewDetails></ViewDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`https://toy-server-3.vercel.app/viewDetails/${params.id}`),
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "addToy",
    element: <PrivateRoute> <AddToy></AddToy></PrivateRoute>,
    errorElement: < ErrorPage ></ErrorPage >
  },
  {
    path: "myToys",
    element: <PrivateRoute> <MyToys></MyToys></PrivateRoute>,
    errorElement: < ErrorPage ></ErrorPage >
  },
  {
    path: "allToys",
    element: <PrivateRoute> <AllToys></AllToys></PrivateRoute>,
    errorElement: < ErrorPage ></ErrorPage >
  },



]);

export default router;
