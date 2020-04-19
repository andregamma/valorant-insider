const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        'navigation': '#111111',
        'primary': '#ff4655',
        'on-primary': '#0f1923',
        'on-secondary': '#ece8e1',
      },
      gridTemplateColumns: {
        'characters': 'repeat(5, 8rem)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}