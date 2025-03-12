
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import route from './routes/route.jsx';
import { StrictMode } from 'react';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
