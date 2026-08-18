/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import "./styles/main.scss";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import "./styles/main.scss";

import Home from "./pages/Home";
import AboutKasa from "./pages/AboutKASA";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    Component: App,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: AboutKasa,
      },
      {
        path: "housing/:id",
        Component: Housing,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);