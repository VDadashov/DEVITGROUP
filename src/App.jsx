import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from "./routes/routes";
import './App.css'
import { Container } from "@styles/common/container";

function App() {
  const router = createBrowserRouter(ROUTES);

  return (
    <>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App
