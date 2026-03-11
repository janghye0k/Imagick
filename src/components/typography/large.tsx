import { cn } from '@/lib/utils';

export function TypographyLarge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-typography="large" data-slot="large" className={cn('text-lg font-semibold', className)} {...props} />
  );
}
