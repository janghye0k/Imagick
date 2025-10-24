import { Link } from 'react-router';

import pkg from '@/../package.json';
import LogoSvg from '@/assets/images/logo.svg?react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MENU_LIST } from '@/constants/menu.c';

const CARD_ITEMS: typeof MENU_LIST = [];

const getCardItem = (item: any) => {
  if (Array.isArray(item.children) && item.children.length) return item.children.map(getCardItem);
  CARD_ITEMS.push(item);
};

MENU_LIST.forEach(getCardItem);

const MainPage = () => {
  return (
    <div className="mx-auto space-y-12 px-8 py-16">
      <section className="space-y-6 text-center">
        <h1 className="font-logo text-8xl">{pkg.name}</h1>
        <p className="text-muted-foreground text-base">
          Easily convert, compress, resize, and crop images — all directly in your browser
          <br />
          No installation needed. Handle images magically!{'  '}
          <LogoSvg className="fill-primary inline-block size-3.5 -translate-y-0.5" />✨
        </p>
      </section>

      <section className="flex flex-wrap items-stretch justify-center gap-4">
        {CARD_ITEMS.map((item) => (
          <Link key={item.href} to={item.href}>
            <Card className="hover:ring-primary/35 group h-full w-2xs transition-all duration-300 hover:shadow-xl hover:ring">
              <CardHeader>
                <div className="mx-auto size-28 transition-all duration-300 group-hover:scale-102">
                  <img
                    className="in-dark:hue-rotate-180 in-dark:invert-100 object-cover"
                    src={item.image}
                    alt={`${item.title} Icon Image`}
                  />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="mt-2 text-xs">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default MainPage;
