import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ContextApp from "./components/context/ContextApp";
import Dashboard from "./components/views/Dashboard";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <h1>Pagina no encontrada</h1> },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
