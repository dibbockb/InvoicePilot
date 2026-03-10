import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './router';
import { SupabaseProvider } from './components/context/supabaseContext';
import { Toaster } from "@/components/ui/sonner"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SupabaseProvider>
      <Toaster />
      <RouterProvider router={router} />
    </SupabaseProvider>

  </StrictMode>
)
