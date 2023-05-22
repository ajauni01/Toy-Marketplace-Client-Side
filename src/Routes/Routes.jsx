
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
]);

export default router;
