/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'each',
          'for',
          'theme',
          'custom-variant',
        ],
      },
    ],
    'at-rule-no-deprecated': null,
    'color-named': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
  },
};
