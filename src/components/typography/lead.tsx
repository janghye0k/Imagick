import { cn } from '@/lib/utils';

export function TypographyLead({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p data-typography="lead" data-slot="lead" className={cn('text-xl text-muted-foreground', className)} {...props} />
  );
}
