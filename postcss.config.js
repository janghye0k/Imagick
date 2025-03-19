/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-import': {},
    'postcss-hexrgba': {},
    'postcss-nesting': {
      noIsPseudoSelector: false,
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: { grid: 'autoplace' },
      'nesting-rules': true,
    },
  },
};
