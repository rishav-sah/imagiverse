import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PhotoGrid from "../components/PhotoGrid";
import PhotoInfo from "../pages/PhotoInfo";
import About from "../pages/About";
import Contact from "../pages/Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PhotoGrid />,
      },
      {
        path: "/photos/:id",
        element: <PhotoInfo />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <h1>Error Component</h1>,
  },
]);

export default appRouter;
