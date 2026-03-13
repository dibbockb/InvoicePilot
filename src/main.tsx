import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './router';
import { Toaster } from "@/components/ui/sonner"
import AuthProvider from './lib/Auth/AuthProvider';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>
)
