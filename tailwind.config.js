/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5852D6'
        }
      },
      fontFamily: {
        body: ['"Poppins", sans-serif'],
        logo: ['"Ubuntu Mono", monospace']
      }
    }
  },
  plugins: []
};
