import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import Home from "./pages/home";
import AddPage from "./pages/add-page";
import EditPage from "./pages/edit-page";
import Layout from "./layout/layout";



function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/home",
      element: <Layout/>,
      children: [
        {
          path: "/home",
          element: <Home/>,
        }
      ]
    }
  ]);
  return <>
  <RouterProvider router={router}/></>;
}

export default App;
