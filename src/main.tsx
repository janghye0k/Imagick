import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/root.css';
import '@/styles/tailwind.css';

import { Toaster } from '@/components/ui/sonner.tsx';
import { TooltipProvider } from '@/components/ui/tooltip.tsx';
import MagickWorker from '@/workers/magick.worker?worker';

import App from './App.tsx';

const magickWorker = new MagickWorker();
Object.assign(window, { magickWorker });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <App />
      <Toaster />
    </TooltipProvider>
  </StrictMode>
);
