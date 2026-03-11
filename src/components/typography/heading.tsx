import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva('scroll-m-20', {
  variants: {
    as: {
      h1: 'text-center text-4xl font-extrabold tracking-tight text-balance',
      h2: 'border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      h5: 'text-lg font-semibold tracking-tight',
      h6: 'text-base font-medium tracking-tight',
    },
  },
  defaultVariants: {
    as: 'h1',
  },
});

type TypographyHeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

export const TypographyHeading = ({ as = 'h1', className, ...props }: TypographyHeadingProps) => {
  const Comp = as;
  return (
    <Comp
      data-typography={as}
      data-slot="heading"
      data-as={as}
      className={cn(headingVariants({ as, className }))}
      {...props}
    />
  );
};
