export const IMAGE_FORMATS = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
  'image/avif',
  'image/svg+xml',
  'image/bmp',
  'image/x-icon',
];

/**
 * Check if the canvas format is supported by canvas element
 * @param format - The format to check
 * @returns True if the format is supported, false otherwise
 *
 * @example
 * isCanvasSupported('image/png'); // true
 */
export function isCanvasSupported(format: string): boolean {
  const QUALITY = 0.8;

  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  try {
    const dataURL = canvas.toDataURL(format, QUALITY);
    return dataURL.startsWith(`data:${format}`);
  } catch {
    return false;
  }
}

/**
 * Check if the image format is supported by img element
 * @param format - The format to check
 * @returns True if the format is supported, false otherwise
 *
 * @example
 * isImgSupported('image/png'); // true
 */
export function isImgSupported(format: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    // 작은 데이터 URL로 테스트
    img.src = `data:${format};base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==`;
  });
}

/**
 * Get the canvas formats that are supported by the browser
 * @returns The canvas formats that are supported by the browser
 *
 * @example
 * getCanvasSupportFormats(); // ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/avif', 'image/svg+xml', 'image/bmp', 'image/x-icon']
 */
export function getCanvasSupportFormats() {
  return IMAGE_FORMATS.filter((format) => isCanvasSupported(format));
}

/**
 * Get the image formats that are supported by the browser
 * @returns The image formats that are supported by the browser
 *
 * @example
 * getImgSupportFormats(); // ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/avif', 'image/svg+xml', 'image/bmp', 'image/x-icon']
 */
export async function getImgSupportFormats() {
  const formats = [];
  for (const format of IMAGE_FORMATS) {
    if (await isImgSupported(format)) formats.push(format);
  }
  return formats;
}
