import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import Home from "../pages/Home";
import PortfolioPage from "../pages/Portfolio";
import ServiceDetail from "../pages/ServiceDetail";
import ServicesPages from "../pages/Services";
import SiteRoot from "../pages/SiteRoot";
import SubscribePage from "../pages/Subscribe";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/subscribe",
        element: <SubscribePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/service",
        element: <ServicesPages />,
      },
      {
        path: "/service-detail/:type",
        element: <ServiceDetail />,
      },
    ],
  },
];

export default ROUTES;
