import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dropzone } from '@/components/uploads/dropzone';
import { UploadList } from '@/components/uploads/upload-list';
import { Link } from 'react-router';
import { Spotlight } from '@/components/ui/spotlight';

type ToolCard = {
  name: string;
  href: string;
  imageSrc: string;
  description: string;
};

const TOOL_CARDS: ToolCard[] = [
  {
    name: 'Convert',
    href: '/convert',
    imageSrc: '/images/features/convert-image.png',
    description: 'Convert images to PNG, JPG, WebP, AVIF, and more.',
  },
  {
    name: 'Compress',
    href: '/compress',
    imageSrc: '/images/features/compress.png',
    description: 'Reduce file size without leaving your browser.',
  },
  {
    name: 'Resize',
    href: '/resize',
    imageSrc: '/images/features/resize.png',
    description: 'Resize by pixels or percent. Keep aspect ratio.',
  },
  {
    name: 'Filter',
    href: '/filter',
    imageSrc: '/images/features/transform.png',
    description: 'Adjust brightness, contrast, saturation, blur, and more.',
  },
  {
    name: 'Crop',
    href: '/crop',
    imageSrc: '/images/features/crop.png',
    description: 'Crop images precisely with a simple workflow.',
  },
  {
    name: 'Convert SVG',
    href: '/convert-svg',
    imageSrc: '/images/features/convert-svg.png',
    description: 'Convert SVG to raster formats when needed.',
  },
  {
    name: 'Transform',
    href: '/transform',
    imageSrc: '/images/features/transform.png',
    description: 'Rotate, flip, and apply quick transformations.',
  },
  {
    name: 'Sprite',
    href: '/sprite',
    imageSrc: '/images/features/sprite.png',
    description: 'Generate CSS sprites from multiple images.',
  },
];

export function MainPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Imagick</h1>
        <p className="max-w-2xl text-foreground/70">
          Edit images in your browser — no app, no sign-up. Resize, convert, compress, and more.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Dropzone label="Upload images to get started" navigateOnAddTo="/convert" />
        <UploadList />
      </div>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Tools</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOL_CARDS.map((tool) => (
            <Link key={tool.href} to={tool.href} className="group block focus:outline-none ">
              <Card
                size="sm"
                className="overflow-hidden relative transition-all hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Spotlight
                  className="bg-primary/50 blur-2xl"
                  size={64}
                  springOptions={{
                    bounce: 0.3,
                    duration: 0.1,
                  }}
                />
                <div className="aspect-16/10 w-full overflow-hidden ">
                  <img
                    src={tool.imageSrc}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] dark:invert dark:hue-rotate-180"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-sm">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
