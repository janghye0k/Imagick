import { Button } from '@/components/ui/button';
import { formatBytes } from '@/lib/file';
import { useFileStore } from '@/stores/file-store';
import { Trash2Icon } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  MorphingDialog,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from '../ui/morphing-dialog';

export function UploadList() {
  const { items, totalBytes, removeById, clear } = useFileStore(useShallow((state) => state));

  const summary = useMemo(() => `${items.length} file(s) · ${formatBytes(totalBytes)}`, [items.length, totalBytes]);
  const thumbnails = useMemo(() => {
    return items.map((item) => {
      return {
        id: item.id,
        url: URL.createObjectURL(item.file),
      };
    });
  }, [items]);

  useEffect(() => {
    return () => {
      thumbnails.forEach(({ url }) => URL.revokeObjectURL(url));
    };
  }, [thumbnails]);

  if (items.length === 0) {
    return (
      <section aria-label="Uploaded files" className="rounded-xl border border-foreground/10 p-4 bg-card">
        <p className="text-sm text-foreground/70">No files uploaded yet.</p>
      </section>
    );
  }

  return (
    <section aria-label="Uploaded files" className="rounded-xl border border-foreground/10 p-4 bg-card">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">{summary}</p>
        <Button type="button" variant="outline" size="sm" onClick={clear}>
          Clear
        </Button>
      </div>

      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3 rounded-lg bg-foreground/5 ps-2 pe-3 py-2">
            <MorphingDialog
              transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
              }}
            >
              <MorphingDialogTrigger>
                <MorphingDialogImage
                  src={thumbnails.find(({ id }) => id === item.id)!.url}
                  alt={item.file.name}
                  className="w-10 h-10 object-cover rounded-md"
                />
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent>
                  <MorphingDialogImage
                    src={thumbnails.find(({ id }) => id === item.id)!.url}
                    alt={item.file.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{item.file.name}</p>
              <p className="text-xs text-foreground/70">{formatBytes(item.file.size)}</p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="shrink-0 ml-auto hover:text-destructive group"
              onClick={() => removeById(item.id)}
              aria-label={`Remove ${item.file.name}`}
            >
              <Trash2Icon />
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
