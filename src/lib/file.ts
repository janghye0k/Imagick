import { UPLOAD_LIMITS } from '@/constants';
import { AddFilesError, AddFilesResult } from '@/stores/file-store';
import { UploadItem } from '@/stores/file-store';

function createId() {
  return crypto?.randomUUID?.() ?? `u_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

export function getTotalBytes(items: UploadItem[]) {
  return items.reduce((sum, item) => sum + item.file.size, 0);
}

export function addFilesWithLimits(existing: UploadItem[], incoming: FileList | File[]): AddFilesResult {
  const next: UploadItem[] = [...existing];
  const errors: AddFilesError[] = [];

  const files = Array.from(incoming);
  for (const file of files) {
    if (next.length >= UPLOAD_LIMITS.maxFiles) {
      errors.push({ code: 'MAX_FILES', message: `최대 ${UPLOAD_LIMITS.maxFiles}개까지만 업로드할 수 있어요.` });
      break;
    }

    if (file.size > UPLOAD_LIMITS.maxBytesPerFile) {
      errors.push({
        code: 'FILE_TOO_LARGE',
        message: `파일당 최대 크기(${Math.round(UPLOAD_LIMITS.maxBytesPerFile / (1024 * 1024))}MB)를 초과했어요.`,
        fileName: file.name,
        size: file.size,
        max: UPLOAD_LIMITS.maxBytesPerFile,
      });
      continue;
    }

    const attemptedTotal = getTotalBytes(next) + file.size;
    if (attemptedTotal > UPLOAD_LIMITS.maxBytesTotal) {
      errors.push({
        code: 'TOTAL_TOO_LARGE',
        message: `전체 업로드 용량(${Math.round(UPLOAD_LIMITS.maxBytesTotal / (1024 * 1024))}MB)을 초과했어요.`,
        attemptedTotal,
        max: UPLOAD_LIMITS.maxBytesTotal,
      });
      break;
    }

    next.push({ id: createId(), file, addedAt: Date.now() });
  }

  return {
    added: next.slice(existing.length),
    errors,
  };
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(1)} MB`;
}
