import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'

// Create a client
const queryClient = new QueryClient()

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import route from './routes/route.jsx';
import { StrictMode } from 'react';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthProvider> */}
    <QueryClientProvider client={queryClient}>
      {/* <HelmetProvider> */}
      <RouterProvider router={router}></RouterProvider>
      {/* </HelmetProvider> */}
    </QueryClientProvider>
    {/* </AuthProvider> */}
  </StrictMode>,
)
