module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  rules: {
    'react/prop-types': 0,
    'space-before-function-paren': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
