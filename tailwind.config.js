const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito-Regular',
        nunitoBold: 'Nunito-Bold',
        dancingScript: 'DancingScript-Regular',
        dancingScriptBold: 'DancingScript-Bold',
      },
      colors: {},
    },
  },
  variants: {},
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        // eslint-disable-next-line quotes
        '.app-screen': `flex-1 pt-3`,
      });
    }),
  ],
};
