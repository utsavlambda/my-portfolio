const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        postcssPresetEnv({
          stage: 3, // or 'autoprefixer'
        }),
      ],
    },
  },
};
