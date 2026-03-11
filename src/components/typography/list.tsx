import { cn } from '@/lib/utils';

export function TypographyList({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-typography="list"
      data-slot="list"
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    />
  );
}
