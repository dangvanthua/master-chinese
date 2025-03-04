import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)', opacity: '0.4' },
          '100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
