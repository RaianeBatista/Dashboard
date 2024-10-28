import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      borderWidth: {
        6: '6px',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },
        error: {
          25: '#fffbfa',
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdca',
          300: '#fda29b',
          400: '#f97066',
          500: '#f04438',
          600: '#d92d20',
          700: '#b42318',
          800: '#912018',
          900: '#7a271a',
        },
      },
      maxWidth: {
        app: '700px',
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // slideUpAndFade: {
        //   from: { opacity: '1' },
        //   to: { opacity: '0' },
        // },
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1 0.3, 1)',
        // slideUpAndFade: 'slideUpAndFade 1s linear',
      },
    },
  },
  plugins: [],
};

export default config;
