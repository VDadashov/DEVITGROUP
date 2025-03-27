import Home from "../pages";
import SiteRoot from "../pages/SiteRoot";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

export default ROUTES;
