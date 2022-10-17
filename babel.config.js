module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    // Path alias config
    [
      'module-resolver',
      {
        alias: {
          '@screen': './app/screen',
          '@navigation': './app/navigation',
          '@constants': './app/constants',
          '@themes': './app/themes',
          '@assets': './app/assets',
        },
      },
    ],
    
    // React Native Reanimated
    'react-native-reanimated/plugin',
  ],
};
