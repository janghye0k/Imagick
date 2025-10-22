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
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

export default function NavigationBar(props: React.ComponentPropsWithoutRef<typeof NavigationMenu>) {
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <NavigationMenu {...props} viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger active={location.pathname.startsWith('/converter')}>Convert</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-xs gap-4">
              <ListItem href="/converter/image" title="Image Converter">
                Convert your image to different formats.
                <br />
                (e.g. PNG to JPEG, JPEG to WebP, etc.)
              </ListItem>
              <ListItem href="/converter/svg" title="SVG Converter">
                Create SVG (Scalable Vector Graphics) from your image.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle())}
            active={location.pathname.startsWith('/compress')}
          >
            <Link to="/compress">Compress</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle())}
            active={location.pathname.startsWith('/resize')}
          >
            <Link to="/resize">Resize</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle())}
            active={location.pathname.startsWith('/crop')}
          >
            <Link to="/crop">Crop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger active={location.pathname.startsWith('/tools')}>Tools</NavigationMenuTrigger>
          <NavigationMenuContent className="-left-12">
            <ul className="grid w-60 gap-4">
              <ListItem href="/tools/transform" title="Transform Image">
                Transform your image with flip, rotate
              </ListItem>
              <ListItem href="/tools/sprite-generator" title="Sprite Generator">
                Create sprite sheet from your images.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

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
