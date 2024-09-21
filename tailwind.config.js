/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F4511E', // Example custom color
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounce: 'bounce 0.5s ease-in-out',
        scaleUp: 'scaleUp 0.3s ease-in-out',
        shake: 'shake 0.5s ease-in-out',
        pulse: 'pulse 1s infinite', // Add a pulse effect
      },
      keyframes: {
        // Existing keyframes...
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
