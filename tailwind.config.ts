import type { Config } from 'tailwindcss'

const config: Config = {
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
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      },
      
      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        }
      },

      maxWidth: {
        app: '700px'
      },

      // ## verificar a possibilidade de estilizar o select ##
      // keyframes: {
      //   slideDownAndFade: {
      //     from: { opacity: 0 },
      //     to: { opacity: 1 },
      //   },
      //   slideUpAndFade: {
      //       from: { opacity: 1 },
      //       to: { opacity: 0 },
      //   },
      // },

      // animation: {
      //   slideDownAndFade: 'slideDownAndFade is linear',
      //   slideUpAndFade: 'slideUpAndFade is linear',
      // },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
