import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Detail from "./pages/detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/detail/:id",
      element: <Detail/>
    },
  ]);
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
