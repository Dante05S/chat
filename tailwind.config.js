/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5852D6',
          dark: '#3e3a99',
          font: '#ffffff'
        },
        secondary: {
          DEFAULT: '#1B1B1B',
          font: '#ffffff'
        },
        tertiary: {
          DEFAULT: '#16171B'
        },
        pane: 'rgba(46, 44, 54, 0.2)',
        error: {
          DEFAULT: 'rgb(211, 47, 47)',
          background: '#f8d7da',
          font: '#721c24'
        },
        background: '#000000',
        success: '#64AE65'
      },
      screens: {
        'xxs': '369px',
        'xs': '500px'
      },
      fontFamily: {
        body: ['"Poppins", sans-serif'],
        logo: ['"Ubuntu Mono", monospace']
      }
    }
  },
  plugins: []
};
