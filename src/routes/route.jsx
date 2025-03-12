import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import HomeLayout from "../components/layouts/HomeLayout";
import Errorpage from "../components/pages/Errorpage";




const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
      ]
    },
  ]);

export default route;

