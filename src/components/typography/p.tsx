import { cn } from '@/lib/utils';

type TypographyPProps = React.ComponentProps<'p'>;

export function TypographyP({ className, ...props }: TypographyPProps) {
  return <p data-typography="p" data-slot="p" className={cn('leading-7 not-first:mt-6', className)} {...props} />;
}
