import { ChevronDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router';

import pkg from '@/../package.json';
import ThemeToggle from '@/components/inputs/ThemeToggle';
import { MENU_LIST } from '@/constants/menu.c';
import { cn } from '@/lib/utils';

const REPO_URL = pkg.author.url + '/' + pkg.name;

interface NavigationDrawerProps extends React.ComponentProps<'div'> {
  open: boolean;
}

const NavigationDrawer = ({ open, className, ...props }: NavigationDrawerProps) => {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setMounted(true), 0);
      setTimeout(() => setVisible(true), 100);
    } else {
      setTimeout(() => setVisible(false), 100);
    }
  }, [open]);

  const handleTransitionEnd = () => {
    if (!visible) setMounted(false); // 애니메이션 끝나면 unmount
  };

  if (!mounted) return null;
  return createPortal(
    <div
      {...props}
      className={cn(
        'bg-background fixed inset-0 top-14 px-8 opacity-100 transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
        className
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      <NavigationDrawerContent />
    </div>,
    document.body
  );
};

const commonItemClass = 'hover:text-primary flex items-center border-b py-2.5 transition-all';
const commonChildItemClass = 'px-3 text-sm';

function NavigationDrawerContent() {
  return (
    <div className="pt-6 pb-16">
      <div className="mx-auto max-w-xs">
        <ul>
          <li>
            <input type="checkbox" id="sidebar-navigation-convert" className="peer hidden" />
            <label
              htmlFor="sidebar-navigation-convert"
              className={cn(commonItemClass, 'justify-between peer-checked:[&_svg]:-rotate-180')}
            >
              <span>Convert</span>
              <ChevronDownIcon size={20} className="transition-transform duration-300" />
            </label>
            <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr]">
              <ul className="bg-secondary/50 overflow-hidden">
                {MENU_LIST[0].children?.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className={cn(commonChildItemClass, commonItemClass)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {MENU_LIST.slice(1, -1).map((item) => (
            <li key={item.href}>
              <Link to={item.href} className={cn(commonItemClass)}>
                {item.title}
              </Link>
            </li>
          ))}

          <li>
            <input type="checkbox" id="sidebar-navigation-tools" className="peer hidden" />
            <label
              htmlFor="sidebar-navigation-tools"
              className={cn(commonItemClass, 'justify-between peer-checked:[&_svg]:-rotate-180')}
            >
              <span>Tools</span>
              <ChevronDownIcon size={20} className="transition-transform duration-300" />
            </label>
            <div className="grid grid-rows-[0fr] transition-all duration-300 peer-checked:grid-rows-[1fr]">
              <ul className="bg-secondary/50 overflow-hidden">
                {MENU_LIST.at(-1)?.children?.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className={cn(commonChildItemClass, commonItemClass)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <div className="bg-secondary/50 text-secondary-foreground-foreground mt-4 flex items-center justify-between rounded p-3 text-xs">
          <span>Appearance</span>
          <ThemeToggle />
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 px-2">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" aria-label="Github Repository">
            <span className="github-mask bg-card inline-block size-5 opacity-75 transition-opacity hover:opacity-100"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationDrawer;
