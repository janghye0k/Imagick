import { cn } from '@/lib/utils';

export function TypographySmall({ className, ...props }: React.ComponentProps<'small'>) {
  return (
    <small
      data-typography="small"
      data-slot="small"
      className={cn('text-sm leading-none font-medium', className)}
      {...props}
    />
  );
}
