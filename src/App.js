
import "./App.css";
import Home from "./compoments/home";
import React from "react";
import Shop from "./compoments/shop";
import About from "./compoments/about";
import Blog from "./compoments/blog";
import Blog_details from "./compoments/blog_details";
import Contact from "./compoments/contact";
import Cart from "./compoments/cart";
import Checkout from "./compoments/checkout";
import Success from "./compoments/success";
import Product_details from "./compoments/product_details";
import Login from "./compoments/login";
import Register from "./compoments/register";
import Manager from "./compoments/Manager";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>
    },
    {
      path: "/Shop",
      element:<Shop></Shop>
    },
    {
      path: "/About",
      element:<About></About>
    },
    {
      path: "/blog",
      element:<Blog></Blog>
    },
    {
      path: "/blog_details",
      element:<Blog_details></Blog_details>
    },
    {
      path: "/contact",
      element:<Contact></Contact>
    },
    {
      path: "/cart",
      element:<Cart></Cart>
    },
    {
      path: "/checkout",
      element:<Checkout></Checkout>
    },
    {
      path: "/success",
      element:<Success></Success>
    },
    {
      path: "/product_details",
      element:<Product_details></Product_details>
    },
    {
      path: "/Login",
      element:<Login></Login>
    },
    {
      path: "/Register",
      element:<Register></Register>
    },
    {
      path: "/Manager",
      element:<Manager></Manager>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
