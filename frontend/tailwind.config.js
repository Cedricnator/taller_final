/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'body': [
            'Montserrat',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji', 
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji'
          ],
          'sans': [
            'Montserrat',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji'
          ]
        }
      },
    },
  },
  darkMode: 'selector',
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    
  ],
}