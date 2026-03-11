import { cn } from '@/lib/utils';

export function TypographyTableWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-typography="table-wrapper"
      data-slot="table-wrapper"
      className={cn('my-6 w-full overflow-y-auto', className)}
      {...props}
    ></div>
  );
}

export function TypographyTable({ className, ...props }: React.ComponentProps<'table'>) {
  return <table data-typography="table" data-slot="table" className={cn('w-full', className)} {...props} />;
}

export function TypographyTableHead({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead data-typography="table-header" data-slot="table-header" className={cn('divide-y', className)} {...props} />
  );
}

export function TypographyTableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody data-typography="table-body" data-slot="table-body" className={cn('divide-y', className)} {...props} />;
}

export function TypographyTableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-typography="table-row"
      data-slot="table-row"
      className={cn('divide-x p-0 even:bg-muted', className)}
      {...props}
    />
  );
}

export function TypographyTableCell({
  className,
  as = 'td',
  align = 'left',
  ...props
}: React.ComponentProps<'td' | 'th'> & { as: 'td' | 'th'; align?: 'left' | 'center' | 'right' }) {
  const Comp = as;
  return (
    <Comp
      data-typography="table-cell"
      data-slot="table-cell"
      className={cn(
        'border px-4 py-2 text-left',
        as === 'th' && 'font-bold',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
      {...props}
    />
  );
}
