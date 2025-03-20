import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div
      className="flex size-full flex-col items-center justify-center gap-4"
      onDragStart={(e) => e.preventDefault()}
    >
      <h2 className="text-7xl font-bold">404</h2>
      <h3 className="text-3xl font-medium">페이지 없음</h3>
      <p className="text-zinc-500/75">
        죄송합니다, 요청하신 페이지를 찾을 수 없습니다.
      </p>
      <Link to="/">
        <Button className="cursor-pointer">
          <svg
            className="size-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          홈 화면으로
        </Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
