
import "./App.css";
import Home from "./compoments/home";
import React, { useState, useEffect } from "react";
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
import { getToken ,Role} from "./axios";
import Page404 from "./compoments/404";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
function App() {
  const token = localStorage.getItem("token");
  const getRole = localStorage.getItem("Role");
  const [isAuth, setIsAuth] = useState(token ? true : false);
  const [role, setRole] = useState(getRole);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Shop",
      element: <Shop />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/blog",
      element: <Blog />
    },
    {
      path: "/blog_details",
      element: <Blog_details />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/cart",
      element: isAuth ? <Cart /> : <Navigate to={"/login"} />
    },
    {
      path: "/checkout/:id",
      element: isAuth ? <Checkout /> : <Navigate to={"/login"} />
    },
    {
      path: "/success",
      element: <Success />
    },
    {
      path: "/product_details/:id",
      element: <Product_details />
    },
    {
      path: "/Login",
      element: isAuth ? <Navigate to={"/"} /> : <Login />
    },
    {
      path: "/Register",
      element: isAuth ? <Navigate to={"/"} /> : <Register />
    },
    {
      path: "/manager",
      element: isAuth && role === "2" ? <Manager /> : <Navigate to={"/Login"} />
    },
    {
      path: "/404",
      element: <Page404/>
    },
    {
      path: "/blog_details/:id",
      element: <Blog_details />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}


export default App;
