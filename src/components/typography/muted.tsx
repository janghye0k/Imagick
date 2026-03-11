import { cn } from '@/lib/utils';

export function TypographyMuted({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-typography="muted"
      data-slot="muted"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}
