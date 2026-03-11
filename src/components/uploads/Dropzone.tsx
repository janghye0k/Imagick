import { useFileStore } from '@/stores/file-store';
import { useShallow } from 'zustand/react/shallow';
import { useId, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

type DropzoneProps = {
  label: string;
  navigateOnAddTo?: string;
};

export function Dropzone({ label, navigateOnAddTo }: DropzoneProps) {
  const inputId = useId();
  const navigate = useNavigate();
  const addFiles = useFileStore(useShallow((state) => state.addFiles));

  const [isDragging, setIsDragging] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const baseClassName = useMemo(
    () =>
      [
        'relative flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-6 text-center transition-colors',
        isDragging ? 'border-primary bg-primary/5' : 'border-foreground/20 hover:bg-foreground/5',
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
    <section aria-label={label}>
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
        <label
          htmlFor={inputId}
          className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Choose files
        </label>
        <input
          id={inputId}
          type="file"
          multiple
          className="sr-only"
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
