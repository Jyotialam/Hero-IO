import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOuts/MainLayOut";

import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
// import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <ErrorPage/>
  // }
]);
export default router;
