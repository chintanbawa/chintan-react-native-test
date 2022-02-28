module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
        alias: {
          store: './src/store',
          router: './src/router',
          screens: './src/screens',
          utils: './src/utils',
          assets: './src/assets',
          components: './src/components'
        }
      }
    ]
  ]
};
