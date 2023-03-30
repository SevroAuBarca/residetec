import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowResidencia from "./pages/ShowResidencia";
import CreateResidencia from "./pages/CreateResidencia";
import User from "./pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "home", element: <Home /> },
      { path: "residencia/:id", element: <ShowResidencia /> },
      { path: "createResidencia/:id", element: <CreateResidencia /> },
      { path: "user/:id", element: <User /> },
    ],
  },
]);

export default router;
