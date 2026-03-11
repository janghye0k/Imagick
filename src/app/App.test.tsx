import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders home heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /imagick/i })).toBeInTheDocument();
  });

  it('navigates to Convert when dropping files on Home, and keeps files globally', async () => {
    render(<App />);

    const homeRegion = screen.getByRole('region', { name: /upload images to get started/i });
    const surface = homeRegion.querySelector('[data-dropzone-surface="true"]') as HTMLElement | null;
    expect(surface).not.toBeNull();

    const file = new File([new Uint8Array([1, 2, 3])], 'a.png', { type: 'image/png' });
    fireEvent.drop(surface!, { dataTransfer: { files: [file] } });

    expect(await screen.findByRole('heading', { name: /convert/i })).toBeInTheDocument();
    expect(screen.getByText('a.png')).toBeInTheDocument();

    const nav = screen.getByRole('navigation', { name: /primary/i });
    const resizeLink = within(nav).getByRole('link', { name: /resize/i });
    fireEvent.click(resizeLink);

    expect(await screen.findByRole('heading', { name: /resize/i })).toBeInTheDocument();
    expect(screen.getByText('a.png')).toBeInTheDocument();
  });
});
