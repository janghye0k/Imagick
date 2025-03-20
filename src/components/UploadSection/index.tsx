import useFileStore from '@/stores/file-store';
import { useCallback, useEffect, useRef } from 'react';
import { Outlet } from 'react-router';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { checkAllowFiles } from '@/hooks/check-allow-files';

function UploadSection() {
  const { setFiles, block } = useFileStore();

  const dropzoneRef = useRef<HTMLDivElement>(null);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      if (!e.dataTransfer) return;
      const files = Array.from(e.dataTransfer.files);
      const isAllow = checkAllowFiles(files);
      if (!isAllow) return;
      setFiles((exists) => [...exists, ...files]);
    },
    [setFiles, toast]
  );

  useEffect(() => {
    if (block) return;
    let timeout: NodeJS.Timeout;

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      if (!dropzoneRef.current) return;
      dropzoneRef.current.style.zIndex = '10';
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!dropzoneRef.current) return;
        dropzoneRef.current.style.zIndex = '-10';
      }, 100);
    };

    window.addEventListener('dragover', handleDragOver);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      if (dropzoneRef.current) dropzoneRef.current.style.zIndex = '-10';
    };
  }, [block]);

  useEffect(() => {
    window.addEventListener('drop', handleDrop);
    return () => {
      window.removeEventListener('drop', handleDrop);
    };
  }, [handleDrop]);

  return (
    <>
      <Outlet />
      <div
        ref={dropzoneRef}
        className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 text-white/85 select-none"
        style={{ zIndex: -10 }}
      >
        <Plus size={80} />
        <p className="text-2xl">파일을 여기에 놓으세요</p>
      </div>
    </>
  );
}

export default UploadSection;
