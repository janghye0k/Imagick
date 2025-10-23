export const MENU_LIST = [
  {
    title: 'Convert',
    description: '',
    href: '',
    image: '',
    children: [
      {
        title: 'Image Converter',
        description: (
          <>
            Convert your image to different formats.
            <br />
            (e.g. PNG to JPEG, JPEG to WebP, etc.)
          </>
        ),
        image: '/images/convert-image.png',
        href: '/converter/image',
      },
      {
        title: 'SVG Converter',
        description: 'Create SVG (Scalable Vector Graphics) from your image.',
        image: '/images/convert-svg.png',
        href: '/converter/svg',
      },
    ],
  },
  {
    title: 'Compress',
    description: 'Compress your image to reduce file size.',
    image: '/images/compress.png',
    href: '/compress',
    children: [],
  },
  {
    title: 'Resize',
    description: 'Resize your image to different dimensions.',
    image: '/images/resize.png',
    href: '/resize',
    children: [],
  },
  {
    title: 'Crop',
    description: 'Crop your image to a specific area.',
    image: '/images/crop.png',
    href: '/crop',
    children: [],
  },
  {
    title: 'Tools',
    description: '',
    href: '',
    image: '',
    children: [
      {
        title: 'Transform Image',
        description: 'Transform your image with flip, rotate',
        image: '/images/transform.png',
        href: '/tools/transform',
      },
      {
        title: 'Sprite Generator',
        description: 'Create CSS sprite from your images.',
        image: '/images/sprite.png',
        href: '/tools/sprite-generator',
      },
    ],
  },
];
