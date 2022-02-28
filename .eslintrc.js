module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0,
    'prefer-single': true,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false
      }
    ]
  }
};
