import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage/Home";
import AboutUs from "../pages/About Us/AboutUs";
import Services from "../pages/Services/Services";
import Coverage from "../pages/Coverage/Coverage";
import BeARider from "../pages/Rider/BeARider";
import Pricing from "../pages/Pricing/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/be-a-rider",
        element: <BeARider></BeARider>,
      },
    ],
  },
]);
