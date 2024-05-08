import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "/home",
    element: <App page="home" />,
  },
  {
    path: "/shop",
    element: <App page="shop" />,
    loader: async () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  },
  {
    path: "/cart",
    element: <App page="cart" />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
