import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EX1 from './ex1.jsx'
import EX2 from './ex2.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ex1",
    element: <EX1 />,
  },
  {
    path: "/ex2",
    element: <EX2 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
