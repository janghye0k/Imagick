import { useId } from 'react';

import { cn } from '@/lib/utils';
import { useThemeStore } from '@/stores/use-theme-store';

type ThemeToggleProps = React.ComponentPropsWithoutRef<'label'>;

const ThemeToggle = ({ className, ...props }: ThemeToggleProps) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const id = useId();

  return (
    <label
      {...props}
      tabIndex={0}
      role="switch"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      htmlFor={id}
      className={cn(
        'bg-secondary relative inline-block h-[22px] w-10 cursor-pointer rounded-full border',
        'hover:border-primary focus-visible:ring-primary transition-[border] focus-visible:ring',
        className
      )}
    >
      <input type="checkbox" id={id} className="hidden" onChange={() => toggleTheme()} />
      <span className="theme-toggle-thumb bg-card text-card-foreground absolute top-px left-px inline-block size-[18px] rounded-full p-0.5 shadow-sm transition-transform"></span>
    </label>
  );
};

export default ThemeToggle;
