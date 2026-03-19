import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/services/:slug",
    Component: ServiceDetail,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
  {
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/blog/:slug",
    Component: BlogPost,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
