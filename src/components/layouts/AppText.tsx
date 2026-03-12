import { cn } from '@/lib/utils';

export const AppText = ({ className, children = 'Imagick', ...props }: React.ComponentProps<'span'>) => {
  return (
    <span className={cn('font-app font-semibold text-4xl tracking-wide', className)} {...props}>
      {children}
    </span>
  );
};
