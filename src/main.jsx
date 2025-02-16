import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Layout from "./components/Layout.jsx"; // ✅ Import new Layout component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Layout handles Navbar, Footer, and transitions
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
