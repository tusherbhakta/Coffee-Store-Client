import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/newcoffee'),
  },
  {
    path:"/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path:"/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/newcoffee/${params.id}`),
  },
  {
    path: "/login",
    element:<Login></Login>
  },
  {
    path: "/signup",
    element:<Signup></Signup>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
