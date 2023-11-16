import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import EX1 from './ex1.jsx'
import EX2 from './ex2.jsx'
import EX3 from './ex3/ex3.jsx'
import { ATM } from './ex3/atm.jsx'
import { Provider } from 'react-redux'
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
  {
    path: "/ex3",
    element: <EX3 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ATM}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)
