import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOuts/MainLayOut";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: Error,
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
]);
export default router;
