import { RouterProvider } from 'react-router';
import { createAppRouter } from '@/app/router';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

const router = createAppRouter();

function App() {
  return (
    <TooltipProvider>
      <RouterProvider router={router} />
      <Toaster richColors closeButton />
    </TooltipProvider>
  );
}

export default App;
