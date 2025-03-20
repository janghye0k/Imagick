import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import useFileStore from '@/stores/file-store';
import { Plus, Settings, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import styles from './index.module.css';
import { allowImageExtensions } from '@/hooks/check-allow-files';

interface FileListProps extends React.HTMLAttributes<HTMLDivElement> {
  onAddClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const fixedButtonClass = cn(
  'cursor-pointer rounded-full hover:bg-white hover:text-sky-800'
);

const fixedButtonIconStyle = { width: '24px', height: '24px' };

function FileList({ onAddClick, className, ...props }: FileListProps) {
  const fileStore = useFileStore();

  const [isSettingOpen, setIsSettingOpen] = useState(true);

  return (
    <>
      <div
        {...props}
        className={cn(styles.wrapper, className)}
        onDragStart={(e) => e.preventDefault()}
      >
        <section className={cn(styles.container)}>
          <div className={cn(styles['image-list'])}>
            {fileStore.files.map((file, index) => {
              const names = file.name.split('.');
              const ext = names.pop();
              const name = names.join('.');
              return (
                <Card
                  key={`file-${index}`}
                  className={cn(styles['image-card'], 'rounded-md', 'py-1')}
                >
                  <CardHeader className="px-1">
                    <div className="ml-auto flex items-center">
                      <Button
                        size="icon"
                        variant="outline"
                        className={cn(
                          'rounded-full',
                          'size-7',
                          'cursor-pointer'
                        )}
                      >
                        <X />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={cn(styles['image-card-previewbox'])}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className={cn(styles['image-card-preview'])}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="px-2 py-1">
                    <div className="flex flex-1 text-xs text-zinc-500">
                      <div className="min-w-0 flex-1">
                        <input type="text" className="w-full" value={name} />
                      </div>
                      <div className="shrink-0">
                        <Select value={ext}>
                          <SelectTrigger size="sm">
                            <SelectValue placeholder="확장자" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {allowImageExtensions.map((extension) => (
                                <SelectItem key={extension} value={extension}>
                                  {extension}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <TooltipProvider>
            <div className={cn(styles.widgets)}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className={fixedButtonClass}
                    onClick={() => setIsSettingOpen((state) => !state)}
                  >
                    <Settings style={fixedButtonIconStyle} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>설정 {isSettingOpen ? '닫기' : '열기'}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className={fixedButtonClass}
                    onClick={onAddClick}
                  >
                    <Plus style={fixedButtonIconStyle} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>이미지 추가</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </section>
        <section
          className={cn(
            styles.settings,
            'border-l',
            'border-l-zinc-200',
            'text-sm',
            isSettingOpen && styles['--open']
          )}
          aria-expanded={isSettingOpen}
        >
          <div className="border-b border-b-zinc-200 p-2 font-semibold whitespace-nowrap text-zinc-600">
            <h3 className="px-2 py-1">이미지 설정</h3>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-0">
              <ScrollArea
                className={cn('h-full p-2 text-zinc-500')}
              ></ScrollArea>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FileList;
