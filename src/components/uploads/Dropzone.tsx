import { Button } from '@/components/ui/button';
import { useFileStore } from '@/stores/file-store';
import { useShallow } from 'zustand/react/shallow';
import { useRef, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

type DropzoneProps = {
  label: string;
  navigateOnAddTo?: string;
};

export function Dropzone({ label, navigateOnAddTo }: DropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const addFiles = useFileStore(useShallow((state) => state.addFiles));

  const [isDragging, setIsDragging] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const baseClassName = useMemo(
    () =>
      [
        'relative flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-6 text-center transition-colors',
        isDragging ? 'border-primary bg-primary/15' : 'border-foreground/20 hover:bg-primary/5',
      ].join(' '),
    [isDragging]
  );

  const handleAdd = (files: FileList | File[]) => {
    const result = addFiles(files);
    const firstError = result.errors[0]?.message ?? null;
    setLastError(firstError);
    if (navigateOnAddTo && result.added.length > 0) navigate(navigateOnAddTo);
  };

  return (
    <section
      aria-label={label}
      className="bg-card rounded-xl overflow-hidden h-fit"
      onClick={() => inputRef.current?.click()}
    >
      <div
        className={baseClassName}
        data-dropzone-surface="true"
        onDragEnter={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
          const files = e.dataTransfer?.files;
          if (files && files.length > 0) handleAdd(files);
        }}
      >
        <div className="text-sm font-medium">{label}</div>
        <div className="text-sm text-foreground/70">Drag and drop files here, or click to choose.</div>
        <Button type="button" size="sm" className="mt-2">
          Choose files
        </Button>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="sr-only"
          aria-hidden
          onChange={(e) => {
            const files = e.currentTarget.files;
            if (files && files.length > 0) handleAdd(files);
            e.currentTarget.value = '';
          }}
        />
      </div>
      {lastError ? <p className="mt-2 text-sm text-destructive">{lastError}</p> : null}
    </section>
  );
}
