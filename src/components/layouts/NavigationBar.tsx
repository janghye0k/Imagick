import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MENU_LIST } from '@/constants/menu.c';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavigationBar(props: React.ComponentPropsWithoutRef<typeof NavigationMenu>) {
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const $active = document.activeElement as HTMLElement;
    if (!ref.current || !$active || !ref.current.contains($active)) return;
    $active.blur();
  }, [location.pathname]);

  return (
    <>
      <NavigationMenu {...props} viewport={isMobile} ref={ref}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger active={location.pathname.startsWith('/converter')}>Convert</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-sm gap-4">
                {MENU_LIST[0].children?.map((item) => (
                  <ListItem key={item.href} href={item.href} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {MENU_LIST.slice(1, -1).map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle())}
                active={location.pathname.startsWith(item.href.toLowerCase())}
              >
                <Link to={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <NavigationMenuTrigger active={location.pathname.startsWith('/tools')}>Tools</NavigationMenuTrigger>
            <NavigationMenuContent className="right-0 left-auto">
              <ul className="grid w-2xs gap-4">
                {MENU_LIST.at(-1)?.children?.map((item) => (
                  <ListItem key={item.href} href={item.href} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
