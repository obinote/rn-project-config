module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          i18n: './src/i18n',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
