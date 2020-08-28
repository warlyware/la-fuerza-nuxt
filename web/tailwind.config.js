/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      MissionGothic: ["MissionGothic"],
      // MissionGothicBold: ["MissionGothicBold"],
      // MissionGothicBlack: ["MissionGothicBlack"],
      // MissionGothicItalic: ["MissionGothicItalic"],
      // MissionGothicBlackItalic: ["MissionGothicBlackItalic"]
    },
    colors: {
      pink: '#ff15b1',
      blue: '#19105e',
      aqua: '#1bcfc9',
      orange: '#ff5000',
      white: '#fff',
      black: '#000',
      'gray-light': '#f6f6f6',
      gray: '#CDCDCD',
      'gray-dark': '#616469'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
