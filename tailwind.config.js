/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // KOOMPI Primary Colors (80%)
        'koompi': {
          'primary': '#021C40',      // Dark Blue - signature color
          'secondary': '#035F5F',     // Teal
          'accent-blue': '#38ACD9',   // Light Blue (30%)
          'accent-orange': '#F1811B', // Orange (10%)
          'accent-yellow': '#EEEE81', // Yellow (10%)
        },
        // Primary Dark Blue Spectrum (Dial Up/Down)
        'primary': {
          50: '#E6EBF0',
          100: '#B3C4D6',
          200: '#809DBC',
          300: '#4D76A2',
          400: '#1A4F88',
          500: '#021C40',    // Main primary
          600: '#021838',
          700: '#011430',
          800: '#011028',
          900: '#010C20',
        },
        // Secondary Teal/Gray Spectrum
        'secondary': {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#035F5F',    // Main secondary
          600: '#424242',
          700: '#303030',
          800: '#212121',
          900: '#121212',
        },
        // Blue Accent Spectrum (for gradients)
        'accent': {
          50: '#E8F7FC',
          100: '#BFE9F6',
          200: '#96DBF0',
          300: '#6DCDE9',
          400: '#44BFE3',
          500: '#38ACD9',    // Main accent blue
          600: '#2D8AB0',
          700: '#226886',
          800: '#17465C',
          900: '#0C2432',
        },
        'cream': '#FFF9F0',
        // Gradient colors from brand guide
        'gradient': {
          'light': '#35ACC5',
          'mid': '#1875A1',
          'dark': '#1FA8C5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
