// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default withNuxt(
  // Your custom configs here
  skipFormatting,
  {
    files: ['app/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
    },
  },
);
