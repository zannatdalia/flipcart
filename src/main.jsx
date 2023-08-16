import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Home from "./layout/Home.jsx";
import Shop from "./Component/Shop.jsx";
import Orders from "./Component/Orders.jsx";
import Login from "./Component/Login.jsx";
import Inventory from "./Component/Inventory.jsx";
import productCartLoader from "./loader/Loader.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Shop />,
            },{
                path: "/orders",
                element: <Orders />,
                loader: productCartLoader
            },{
                path: "/inventory",
                element: <Inventory />,
            },{
                path: "/login",
                element: <Login />
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
