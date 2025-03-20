import { toast } from 'sonner';

export const allowImageExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'avif',
  'webp',
  'tiff',
  'tif',
  'svg',
];

/** 파일목록이 허용되는 이미지 파일인지 확인한다. */
export function checkAllowFiles(
  files: File[],
  extenstions = allowImageExtensions
) {
  let errorExts: string[] = [];
  files.forEach((file) => {
    const ext = file.name.split('.').pop() as string;
    const isPass = extenstions.includes(ext);
    if (!isPass) errorExts.push(ext);
  });
  errorExts = Array.from(new Set(errorExts));
  if (!!errorExts.at(0)) {
    const errorExtText = errorExts.map((ext) => `.${ext}`).join(', ');
    toast.error('업로드 오류', {
      description: `허용되지 않는 확장자(${errorExtText})가 포함되어 있습니다.`,
    });
    return false;
  }
  return true;
}
