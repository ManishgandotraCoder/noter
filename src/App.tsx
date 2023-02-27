
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import { useEffect } from 'react';
import Topbar from "./components/topbar/topbar"
import EditNote from './pages/EditNote/editNote';

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Dashboard />,

  },
  {
    path: "/edit",
    element: <EditNote />,

  }
]);

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E8E8E8"

  })
  return (
    <div>
      <Topbar />
      <div><RouterProvider router={router} /></div>
    </div>
  );
}

export default App;
