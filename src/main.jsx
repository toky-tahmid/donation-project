import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Donation from "./Pages/Donation/Donation";
import Statistics from "./Pages/Statistics/Statistics";
import DonationDetails from "./Pages/DonationDetails/DonationDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/donations.json')
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/donations/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ()=>fetch('/donations.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
