import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from "./routes/routes";
import './App.css'

function App() {
  const router = createBrowserRouter(ROUTES);

  return (
    <>
      <RouterProvider router={router} /> {/* Using RouterProvider */}
    </>
  );
}

export default App
