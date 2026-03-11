import { Dropzone } from '@/components/uploads/dropzone';
import { UploadList } from '@/components/uploads/upload-list';

export function ToolPlaceholderPage({ toolName }: { toolName: string }) {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{toolName}</h1>
        <p className="text-sm text-foreground/70">Phase 3에서 실제 이미지 처리 기능이 추가됩니다.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Dropzone label="Upload images" />
        <UploadList />
      </div>
    </div>
  );
}
