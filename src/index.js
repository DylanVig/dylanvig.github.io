import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import ExperiencePage from "./pages/ExperiencePage.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/Home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/About", element: <About /> },
  { path: "/experience", element: <ExperiencePage /> },
  { path: "/ExperiencePage", element: <ExperiencePage /> },
  { path: "/experiencepage", element: <ExperiencePage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/Projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "/Contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
