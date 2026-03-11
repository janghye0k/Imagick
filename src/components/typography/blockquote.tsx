import { cn } from '@/lib/utils';

type TypographyBlockquoteProps = React.ComponentProps<'blockquote'>;

export function TypographyBlockquote({ className, ...props }: TypographyBlockquoteProps) {
  return (
    <blockquote
      data-typography="blockquote"
      data-slot="blockquote"
      className={cn('mt-6   border-l-2 pl-6 italic', className)}
      {...props}
    />
  );
}
