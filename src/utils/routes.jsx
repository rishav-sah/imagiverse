import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PhotoGrid from "../components/PhotoGrid";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PhotoGrid />
      },
    ],
    errorElement: <h1>Error Component</h1>
  }
]);

export default appRouter;