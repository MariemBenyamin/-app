import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import App from "./App";
import { AllData } from "./Data/AllData";
import AllProperties from "./Properties/AllProperties";
import AllDetails from "./Details/AllDetails";
import AllComponent from "./Components/AllComponent";
import AllContact from "./Contact/AllContact";
import AllProducts from "./Products/AllProducts";
import AllShop from "./Shop/AllShop";
import AllCart from "./Cart/AllCart";
import AllPayment from "./Payment/AllPayment";
import PaySuccess from "./Success/PaySuccess";
import ScrollToTop from "react-scroll-to-top";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "properties",
    element: <AllProperties />,
  },
  {
    path: "details",
    element: <AllDetails />,
  },
  {
    path: "contact",
    element: <AllContact />,
  },
  {
    path: "product",
    element: <AllProducts />,
  },
  {
    path: "shop",
    element: <AllShop />,
  },
  {
    path: "cart",
    element: <AllCart />,
  },
  {
    path: "payment",
    element: <AllPayment />,
  },
  {
    path: "success",
    element: <PaySuccess />,
  },
]);

createRoot(document.getElementById("root")).render(
    <AllData >

      <ScrollToTop smooth />
        <RouterProvider router={router} />
        
    </AllData>
);
