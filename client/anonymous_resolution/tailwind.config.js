/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#0ebeb5',
        },
        pink: {
          50: '#d62976'
        },
        backlight: {
          50: '#cddfe6'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

