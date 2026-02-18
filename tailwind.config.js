/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official KOOMPI Brand Colors (from koompi.com source)
        // 60% Primary (near-black navy) | 30% Secondary (teal) | 10% Accent (pink/purple)
        'koompi': {
          'primary': '#011228',        // Near-black navy (60% usage)
          'secondary': '#38A7C8',      // Teal/Cyan (30% usage)
          'accent-blue': '#38A7C8',    // Alias for secondary
          'accent-pink': '#F16179',    // Fiery Pink (CTAs, badges, highlights)
          'accent-purple': '#8d47ff',  // Purple accent
          'accent-yellow': '#FFD700',  // Gold Yellow (sparingly)
        },
        // Slate colors for glass effect
        slate: {
          50: '#f8fafc',      // slate-50
          800: '#1e293b',     // slate-800
          900: '#0f172a',     // slate-900
        },
        // Primary Near-Black Navy Spectrum
        'primary': {
          50: '#E0E8F0',
          100: '#B3C4D6',
          200: '#809FBC',
          300: '#4D7AA2',
          400: '#1A5588',
          500: '#011228',    // Main primary
          600: '#010E20',
          700: '#010A18',
          800: '#000710',
          900: '#000408',
        },
        // Secondary Teal Spectrum
        'secondary': {
          50: '#E8F6FA',
          100: '#BFE8F2',
          200: '#96DAE9',
          300: '#6DCCE1',
          400: '#50B9D5',
          500: '#38A7C8',    // Main secondary
          600: '#2D86A0',
          700: '#226578',
          800: '#174250',
          900: '#0C2328',
        },
        // Accent Pink Spectrum
        'accent': {
          50: '#FEF0F2',
          100: '#FCD9DF',
          200: '#F9B3BD',
          300: '#F68D9B',
          400: '#F47285',
          500: '#F16179',    // Main accent (Fiery Pink)
          600: '#D94F67',
          700: '#C03D55',
          800: '#A72B43',
          900: '#8E1931',
        },
        'cream': '#f7f7f7',
        // Gradient colors from brand
        'gradient': {
          'light': '#38A7C8',
          'mid': '#2D6F8E',
          'dark': '#011228',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
        },
      },
    },
  },
  plugins: [],
}
