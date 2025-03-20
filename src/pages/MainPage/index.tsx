import useFileStore from '@/stores/file-store';
import FileList from '@/components/FileList';
import { useCallback, useRef } from 'react';
import {
  allowImageExtensions,
  checkAllowFiles,
} from '@/hooks/check-allow-files';
import { Button } from '@/components/ui/button';

function MainPage() {
  const { files, setFiles } = useFileStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      const isAllow = checkAllowFiles(files);
      if (!isAllow) return;
      setFiles((exists) => [...exists, ...files]);
    },
    [setFiles]
  );

  const openFileInput = useCallback(() => inputRef.current?.click(), []);

  return (
    <>
      {false && !files.at(0) ? (
        <div className="p-6">
          <div className="align-center flex size-full flex-col text-center">
            <h2 className="mt-12 text-4xl font-bold">이미지 변환</h2>
            <p className="mt-4 text-2xl text-zinc-600">
              파일의 사이즈, 용량, 포맷 등 원하는 것들을 변환하세요!
            </p>
            <p className="mt-1 text-lg text-zinc-500">
              ( {allowImageExtensions.join(', ')} )
            </p>
            <Button
              size="lg"
              type="button"
              className="mx-auto mt-6 h-16 cursor-pointer px-24 text-xl"
              onClick={openFileInput}
            >
              이미지 선택
            </Button>
            <p className="mt-2 text-sm text-zinc-600">끌어서 이미지를 선택</p>
          </div>
        </div>
      ) : (
        <>
          <div className="size-full">
            <FileList onAddClick={openFileInput} />
          </div>
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        className="sr-only"
        onChange={handleFileChange}
        accept={allowImageExtensions.map((ext) => `.${ext}`).join(',')}
      />
    </>
  );
}

export default MainPage;
