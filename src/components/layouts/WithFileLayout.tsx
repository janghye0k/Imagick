import { throttle } from 'es-toolkit';
import { ImageIcon } from 'lucide-react';
import { memo, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router';
import { useEventListener } from 'usehooks-ts';

import useSupportFormatStore from '@/stores/use-support-format-store';

const GlobalFileDropHandler = memo(() => {
  const imgSupportFormats = useSupportFormatStore((state) => state.imgSupportFormats);

  const [isDragging, setIsDragging] = useState(false);

  /**
   * 드래그 오버 시 드래그 상태 설정
   */
  const handleDragOver = useCallback((event: DragEvent) => {
    const $header = document.querySelector('header');
    if (
      $header?.contains(event.target as Node) ||
      !Array.from(event.dataTransfer?.items || []).some((item) => item.kind === 'file' && item.type.includes('image'))
    )
      return setIsDragging(false);
    event.preventDefault();
    setIsDragging(true);
  }, []);

  useEventListener('dragover', handleDragOver);
  // 브라우저 밖으로 드래그 아웃 시 드래그 상태 종료
  useEventListener(
    'dragleave',
    throttle((event: DragEvent) => {
      if (!event.relatedTarget) setIsDragging(false);
    }, 100)
  );

  useEventListener('drop', (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer?.files || []).filter((file) => imgSupportFormats.includes(file.type));
    window.dispatchEvent(new CustomEvent('global-file-drop', { detail: { files } }));
  });

  if (!isDragging) return null;
  return createPortal(
    <div className="fixed inset-0 top-14">
      <div className="bg-foreground/80 text-background flex size-full flex-col items-center justify-center gap-4">
        <ImageIcon className="size-16" />
        <p className="text-center text-2xl font-semibold">Drop files here!</p>
      </div>
    </div>,
    document.body
  );
});

const WithFileLayout = () => {
  return (
    <>
      <Outlet />
      <GlobalFileDropHandler />
    </>
  );
};

export default WithFileLayout;
