
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
// Toaster
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <Toaster position="top-center" richColors />
    <App />
  </BrowserRouter>
</StrictMode>,
);
