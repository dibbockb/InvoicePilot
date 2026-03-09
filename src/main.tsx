import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './router';
import { SupabaseProvider } from './components/context/supabaseContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SupabaseProvider>
      <RouterProvider router={router} />
    </SupabaseProvider>

  </StrictMode>
)
