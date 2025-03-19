/** @type {import('prettier').Config} */
export default {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'auto',
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: false,
  quoteProps: 'as-needed',
  plugins: ['prettier-plugin-jsdoc', 'prettier-plugin-tailwindcss'],
};
