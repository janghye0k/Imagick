import { createBrowserRouter } from 'react-router';
import { AppLayout } from '@/components/layouts/AppLayout';
import { MainPage } from '@/pages/main/main-page';
import { ToolPlaceholderPage } from '@/pages/ToolPlaceholderPage';

export function createAppRouter() {
  return createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: 'convert', element: <ToolPlaceholderPage toolName="Convert" /> },
        { path: 'compress', element: <ToolPlaceholderPage toolName="Compress" /> },
        { path: 'resize', element: <ToolPlaceholderPage toolName="Resize" /> },
        { path: 'filter', element: <ToolPlaceholderPage toolName="Filter" /> },
        { path: 'crop', element: <ToolPlaceholderPage toolName="Crop" /> },
        { path: 'convert-svg', element: <ToolPlaceholderPage toolName="Convert SVG" /> },
        { path: 'transform', element: <ToolPlaceholderPage toolName="Transform" /> },
        { path: 'sprite', element: <ToolPlaceholderPage toolName="Sprite" /> },
      ],
    },
  ]);
}
