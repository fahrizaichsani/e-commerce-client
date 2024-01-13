import "./App.css";
import { createBrowserRouter, RouterProvider, redirect} from "react-router-dom";
import LoginPage from "./pages/login";
import Home from "./pages/home";
import AddPage from "./pages/add-page";
import EditPage from "./pages/edit-page";
import Layout from "./layout/layout";
import Detail from "./pages/detail";
import Category from "./pages/category-page";
import AddUser from "./pages/add-user-page";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
      loader: () => localStorage.getItem("access_token") && redirect("/products")
    },
    {
      path: "/products",
      element: <Layout/>,
      loader: () => !localStorage.getItem("access_token") && redirect("/"),
      children: [
        {
          path: "/products",
          element: <Home/>,
        },
        {
          path:"/products/:id",
          element: <Detail/>
        },
        {
          path: "/products/add",
          element: <AddPage/>
        },
        {
          path: "/products/edit/:id",
          element: <EditPage/>
        },
        {
          path: "/products/categories",
          element: <Category/>
        }
      ]
    },
    {
      path: "/add-user",
      element: <Layout/>,
      loader: () => !localStorage.getItem("access_token") && redirect("/"),
      children: [
        {
          path: "/add-user",
          element: <AddUser/>
        }
      ]
    }
  ]);
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
