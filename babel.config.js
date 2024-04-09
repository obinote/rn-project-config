module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          screens: './src/screens',
          routes: './src/routes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
