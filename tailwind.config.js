/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'header-bg': '#182952',
        'header-text': '#6f6e6e',
        'icon': '#ffffff',
        'widget-header': '#1B2844',
        'widget-body': '#1D2435',
        'accent-success': '#1da83c',
        'accent-info': '#ffc107',
        'accent-warning': '#fd7e14',
        'accent-danger': '#ab1a25',
        'accent-primary': '#007bff',
        'contrast-primary': '#6c757d',
        'contrast-secondary': '#333333',
      },
    },
  },
  plugins: [],
}

