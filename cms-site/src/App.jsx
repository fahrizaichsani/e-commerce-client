import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";



function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage/>,
    }
  ]);
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
