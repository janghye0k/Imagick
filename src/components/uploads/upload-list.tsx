import { formatBytes } from '@/lib/file';
import { useFileStore } from '@/stores/file-store';
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';

export function UploadList() {
  const { items, totalBytes, removeById, clear } = useFileStore(useShallow((state) => state));

  const summary = useMemo(() => `${items.length} file(s) · ${formatBytes(totalBytes)}`, [items.length, totalBytes]);

  if (items.length === 0) {
    return (
      <section aria-label="Uploaded files" className="rounded-xl border border-foreground/10 p-4">
        <p className="text-sm text-foreground/70">No files uploaded yet.</p>
      </section>
    );
  }

  return (
    <section aria-label="Uploaded files" className="rounded-xl border border-foreground/10 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">{summary}</p>
        <button
          type="button"
          onClick={clear}
          className="rounded-md border border-foreground/10 px-3 py-1.5 text-sm hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Clear
        </button>
      </div>

      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 rounded-lg bg-foreground/5 px-3 py-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{item.file.name}</p>
              <p className="text-xs text-foreground/70">{formatBytes(item.file.size)}</p>
            </div>
            <button
              type="button"
              onClick={() => removeById(item.id)}
              className="shrink-0 rounded-md border border-foreground/10 px-2 py-1 text-xs hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Remove ${item.file.name}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
